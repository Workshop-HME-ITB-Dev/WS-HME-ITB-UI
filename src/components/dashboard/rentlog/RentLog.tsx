import { CSVLink } from "react-csv";
import { useEffect, useState } from "react";
import { Rent, Tool, ToolRent } from "../../rent/rent.types";
import { AlertData } from "../basiccomponent/basic.types";
import AlertCard from "../basiccomponent/AlertCard";
import SearchBar from "../basiccomponent/SearchBar";
import LogTable from "./LogTable";
import LogDeleteModal from "./modals/PickupDropModals";
import moment from "moment";
import { checkToken } from "../../../utils/jwtvalidator";
import { configCreator } from "../../../utils/configCreator";
import axios from "axios";

const RentLog = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(true);
  const [showAlert, setShowAlert] = useState<boolean>(true);
  const [alert, setAlert] = useState<null | AlertData>(null);

  const [rents, setRents] = useState<Rent[]>([]);
  const [tools, setTools] = useState<Tool[]>([]);
  const [filteredRents, setFilteredRents] = useState<Rent[]>([]);
  const [wordSearch, setWordSearch] = useState<string>('');
  const [formData, setFormData] = useState<Rent>(formReset)

  const [deleteModal, setDeleteModal] = useState<boolean>(false);

  const onWordSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setWordSearch(wordSearch => e.target.value);
    setFilteredRents(rents.filter(x => wordSearch === '' ? true : x.rentName.toLowerCase().includes(e.target.value.toLowerCase())))
  };

  const setDelete = (data: Rent) => {
    setFormData(data);
    setDeleteModal(true);
  }

  const refreshData = async (): Promise<any> => {
    setLoading(true);
    try {
      const fetchRentsData = await axios.get(process.env.REACT_APP_API_HOST_URL + '/rents', configCreator());
      const fetchToolsData = await axios.get(process.env.REACT_APP_API_HOST_URL + '/tools', configCreator());

      if (fetchRentsData.data.data) {
        const dataFormatted: Rent[] = fetchRentsData.data.data.filter(x => (x.status === 'dropped' || x.status === 'finished'))
          .map(x => {
            const rentToolsParsed: ToolRent[] = JSON.parse(x.tools);
            return ({
              ...x,
              fromDate: new Date(x.fromDate),
              expectedReturnDate: new Date(x.expectedReturnDate),
              tools: rentToolsParsed,
              returnDate: x.returnDate ? new Date(x.returnDate) : null,
            })
          });
        setFilteredRents(dataFormatted);
        setRents(dataFormatted);
        // Fetch Tools 
        if (fetchToolsData.data.data) {
          setTools(fetchToolsData.data.data)
          setLoading(false);
        }
      }
    } catch (e: any) {
      console.error(e.message);
      setAlert({
        title: 'ERROR',
        desc: e.message,
        type: 'error'
      })
      setShowAlert(true);
      checkToken();
    }
    setWordSearch('');
  }
  useEffect(() => {
    refreshData();
  }, [])
  return (
    <>
      {showAlert && alert && <AlertCard data={alert} onClose={setShowAlert} />}

      <div className="h-full flex flex-col mx-auto">
        {deleteModal && <LogDeleteModal formData={formData} setFormData={setFormData} setShowModal={setDeleteModal} setActionResult={setAlert} setShowAlert={setShowAlert} refreshData={refreshData} />}
        <SearchBar wordSearch={wordSearch} onChange={onWordSearchChange} placeholder={"Cari Nama"} />
        <div className="flex flex-row w-full justify-center items-center ">
          <button className=" bg-sky-400 text-slate-700 hover:bg-sky-200 font-bold py-2 px-4 rounded-lg w-auto">
            <CSVLink data={rents.map(x => {
              let toolStringify = ''
              x.tools.forEach((tol, idx) => {
                const name = tools.find(y => y.id === tol.toolId)?.name;
                if (name) {
                  toolStringify += `${name} - ${tol.quantity}pcs` + (idx === x.tools.length - 1 ? '' : '\n');
                }
              });
              return ({
                ...x,
                tools: toolStringify
              })
            })} headers={headers} filename={`WS-RentTables-${moment().format("DD-MM-YYYY")}`}>
              Export CSV
            </CSVLink>
          </button>
        </div>
        {
          loading ?
            <svg className='w-10 text-ws-orange animation animate-spin mt-10 mx-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill='currentColor' d="M304 48C304 74.51 282.5 96 256 96C229.5 96 208 74.51 208 48C208 21.49 229.5 0 256 0C282.5 0 304 21.49 304 48zM304 464C304 490.5 282.5 512 256 512C229.5 512 208 490.5 208 464C208 437.5 229.5 416 256 416C282.5 416 304 437.5 304 464zM0 256C0 229.5 21.49 208 48 208C74.51 208 96 229.5 96 256C96 282.5 74.51 304 48 304C21.49 304 0 282.5 0 256zM512 256C512 282.5 490.5 304 464 304C437.5 304 416 282.5 416 256C416 229.5 437.5 208 464 208C490.5 208 512 229.5 512 256zM74.98 437C56.23 418.3 56.23 387.9 74.98 369.1C93.73 350.4 124.1 350.4 142.9 369.1C161.6 387.9 161.6 418.3 142.9 437C124.1 455.8 93.73 455.8 74.98 437V437zM142.9 142.9C124.1 161.6 93.73 161.6 74.98 142.9C56.24 124.1 56.24 93.73 74.98 74.98C93.73 56.23 124.1 56.23 142.9 74.98C161.6 93.73 161.6 124.1 142.9 142.9zM369.1 369.1C387.9 350.4 418.3 350.4 437 369.1C455.8 387.9 455.8 418.3 437 437C418.3 455.8 387.9 455.8 369.1 437C350.4 418.3 350.4 387.9 369.1 369.1V369.1z" />
            </svg> :
            <>
              <div className="w-screen px-6">
                <div className="overflow-x-auto w-auto">
                  <LogTable data={filteredRents} header={headers.map(x => x.label)} onReturn={setDelete} tools={tools} />
                </div>
              </div>
            </>
        }
      </div>
    </>
  );
}

export default RentLog;
const headers = [
  { label: "Nama", key: "rentName" },
  { label: "NIM", key: "rentNim" },
  { label: "Phone", key: "rentPhone" },
  { label: "Line ID", key: "rentLineId" },
  { label: "Organisation", key: "organisation" },
  { label: "Rent", key: "tools" },
  { label: "From", key: "fromDate" },
  { label: "Until", key: "expectedReturnDate" },
  { label: "Biaya", key: "totalPrice" },
  { label: "Pemberi", key: "pickupName" },
  { label: "NIM Pemberi", key: "pickupNim" },
  { label: "Penerima", key: "returnName" },
  { label: "NIM Penerima", key: "returnNim" },
  { label: "Status", key: "status" },
  { label: "Denda", key: "fine" }
];

const formReset: Rent = {
  id: 0,
  tools: [{ toolId: 2, quantity: 1 }, { toolId: 4, quantity: 1 }],
  rentName: "John Doe",
  rentNim: "13218000",
  rentPhone: "087743872830",
  rentLineId: "LineIDEXample123",
  organisation: "Workshop HME ITB",
  fromDate: new Date("June 8, 2022"),
  expectedReturnDate: new Date("June 13, 2022"),
  totalPrice: 120000,
  status: "waiting_pickup",
  fine: 10000,
  pickupName: 'david fauzi',
  pickupNim: '13218043',
  returnName: 'Joni Jonru',
  returnNim: '13218010',
  returnDate: new Date("June 14, 2022"),
}
