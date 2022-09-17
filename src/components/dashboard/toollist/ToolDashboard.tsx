import { useEffect, useState } from "react";
import { Tool } from "../../rent/rent.types";
import { AlertData } from "../basiccomponent/basic.types";
import SearchBar from "../basiccomponent/SearchBar";
import { CSVLink } from "react-csv";
import moment from "moment";
import ToolTable from "./ToolTable";
import ToolDeleteModal from "./modals/ToolDeleteModal";
import AlertCard from "../basiccomponent/AlertCard";
import ToolAddModal from "./modals/ToolAddModal";
import ToolEditModal from "./modals/ToolEditModal";
import { useLazyQuery } from "@apollo/client";
import { GetToolsResponse } from "../../../graphql/toolQuery.types";
import { GET_TOOLS } from "../../../graphql/toolsQuery";
import { checkToken } from "../../../utils/jwtvalidator";


const ToolDashboard = (): JSX.Element => {
  const [getTools, { loading, error }] = useLazyQuery<GetToolsResponse>(GET_TOOLS, { fetchPolicy: 'cache-and-network' });
  const [showAlert, setShowAlert] = useState<boolean>(true);

  const [tools, setTools] = useState<Tool[]>([]);
  const [filteredTools, setfilteredTools] = useState<Tool[]>([]);
  const [wordSearch, setWordSearch] = useState<string>('');
  const [alert, setAlert] = useState<null | AlertData>(null);
  const [formData, setFormData] = useState<Tool>(formReset)

  const [addModal, setAddModal] = useState<boolean>(false);
  const [editModal, setEditModal] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);

  const onWordSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setWordSearch(wordSearch => e.target.value);
    setfilteredTools(tools.filter(art => wordSearch === '' ? true : art.name.toLowerCase().includes(e.target.value.toLowerCase())))
  };

  const setAdd = () => {
    setFormData(formReset);
    setAddModal(true);
  }
  const setEdit = (data: Tool) => {
    setFormData(data);
    setEditModal(true);
  }
  const setDelete = (data: Tool) => {
    setFormData(data);
    setDeleteModal(true);
  }

  const refreshData = async (): Promise<any> => {
    try {
      const fetchToolsData = await getTools();
      if (fetchToolsData.data) {
        const filteredToolsData = fetchToolsData.data.tools.filter(x => x.activated)
        setfilteredTools(filteredToolsData);
        setTools(filteredToolsData)
      }
    } catch (e: any) {
      console.error(e.message);
      setAlert(e.message);
      checkToken();
    }
    setWordSearch('');
  }
  useEffect(() => {
    refreshData()
  }, [])
  return (
    <>
      {alert && <AlertCard data={alert} onClose={setAlert} />}
      {showAlert && error && <AlertCard data={{
        title: 'ERROR',
        desc: error.message,
        type: 'error'
      }} onClose={setShowAlert} />}
      <div className="h-full flex flex-col mx-auto">
        {addModal && <ToolAddModal formData={formData} setFormData={setFormData} setShowModal={setAddModal} setActionResult={setAlert} refreshData={refreshData} />}
        {editModal && <ToolEditModal formData={formData} setFormData={setFormData} setShowModal={setEditModal} setActionResult={setAlert} refreshData={refreshData} />}
        {deleteModal && <ToolDeleteModal formData={formData} setFormData={setFormData} setShowModal={setDeleteModal} setActionResult={setAlert} refreshData={refreshData} />}
        <SearchBar wordSearch={wordSearch} onChange={onWordSearchChange} placeholder={"Cari Tools"} />
        <div className="flex flex-row w-full justify-center items-center gap-x-6">
          <button className=" bg-sky-400 text-slate-700 hover:bg-sky-200 font-bold py-2 px-4 rounded-lg w-auto">
            <CSVLink data={tools} headers={headers} filename={`WS-ToolTables-${moment().format("DD-MM-YYYY")}`}>
              Export CSV
            </CSVLink>
          </button>
          <button onClick={() => { setAdd() }} className=" bg-green-400 text-slate-700 hover:bg-green-200 font-bold py-2 px-4 rounded-lg w-auto">
            Add Tool
          </button>
        </div>
        {
          loading ?
            <svg className='w-10 text-ws-orange animation animate-spin mx-auto mt-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill='currentColor' d="M304 48C304 74.51 282.5 96 256 96C229.5 96 208 74.51 208 48C208 21.49 229.5 0 256 0C282.5 0 304 21.49 304 48zM304 464C304 490.5 282.5 512 256 512C229.5 512 208 490.5 208 464C208 437.5 229.5 416 256 416C282.5 416 304 437.5 304 464zM0 256C0 229.5 21.49 208 48 208C74.51 208 96 229.5 96 256C96 282.5 74.51 304 48 304C21.49 304 0 282.5 0 256zM512 256C512 282.5 490.5 304 464 304C437.5 304 416 282.5 416 256C416 229.5 437.5 208 464 208C490.5 208 512 229.5 512 256zM74.98 437C56.23 418.3 56.23 387.9 74.98 369.1C93.73 350.4 124.1 350.4 142.9 369.1C161.6 387.9 161.6 418.3 142.9 437C124.1 455.8 93.73 455.8 74.98 437V437zM142.9 142.9C124.1 161.6 93.73 161.6 74.98 142.9C56.24 124.1 56.24 93.73 74.98 74.98C93.73 56.23 124.1 56.23 142.9 74.98C161.6 93.73 161.6 124.1 142.9 142.9zM369.1 369.1C387.9 350.4 418.3 350.4 437 369.1C455.8 387.9 455.8 418.3 437 437C418.3 455.8 387.9 455.8 369.1 437C350.4 418.3 350.4 387.9 369.1 369.1V369.1z" />
            </svg> :
            <>
              <div className="w-screen px-6">
                <div className="overflow-x-auto w-auto">
                  <ToolTable data={filteredTools} header={headers.map(x => x.label)} onEdit={setEdit} onDelete={setDelete} />
                </div>
              </div>
              {filteredTools.length === 0 &&
                <span className="text-md text-gray-800 font-sans mx-auto font-semibold">
                  No data available
                </span>}
            </>
        }
      </div>
    </>
  );
};

export default ToolDashboard;

const headers = [
  { label: "Gambar", key: "imageUrl" },
  { label: "Judul", key: "title" },
  { label: "Stok Total", key: "totalStock" },
  { label: "Harga Per Jam", key: "priceHour" },
  { label: "Harga Per Hari", key: "priceDay" }
];

const formReset = {
  id: 0,
  name: '',
  image: '',
  activated: true,
  totalStock: 0,
  priceHour: 0,
  priceDay: 0,
}
