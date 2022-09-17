import moment from "moment";
import { numberToIDR } from "../../../utils/utils";
import { Rent, Tool } from "../../rent/rent.types";

const PickupTable = ({ header, data, onEdit, onDelete, tools }: PickupTableProps): JSX.Element => {

    return (
        <table className="border-separate border-spacing-x-3 table-auto bg-transparent mb-4 mt-6 w-full mx-auto">
            <thead className="container bg-ws-orange rounded-t w-auto">
                <tr className="row flex flex-row justify-between px-2">
                    <th key="no" className="w-10 col text-gray-800 align-middle py-1 text-md font-bold text-left">
                        No
                    </th>
                    {header.map(x => (x === 'Rent') ? (
                        <th key={x} className="w-60 col text-gray-800 align-middle py-1 text-md font-bold text-center">
                            {x}
                        </th>) :
                        (<th key={x} className="w-40 col text-gray-800 align-middle py-1 text-md font-bold text-center">
                            {x}
                        </th>)
                    )}
                    <th key="action" className="w-40 col text-gray-800 align-middle py-1 text-md font-bold text-center">
                        Action
                    </th>
                </tr>
            </thead>

            <tbody className="container rounded-b w-auto">
                {data.map((rent, idx) => (
                    <tr key={rent.id.toString()+idx.toString()} className={`row flex flex-row justify-between ${idx % 2 === 0 ? 'bg-slate-200' : 'bg-slate-300'}`}>
                        <th key={rent.id} className="w-10 col border-ws-orange align-middle font-normal text-sm whitespace-nowrap py-2 text-center my-auto">
                            {idx + 1}
                        </th>
                        <th key={rent.rentName} className="w-40 col border-ws-orange align-middle font-normal text-sm whitespace-nowrap py-2 text-center my-auto">
                            {rent.rentName}
                        </th>
                        <th key={rent.rentNim} className="w-40 col border-ws-orange align-middle font-normal text-sm py-2 text-center my-auto">
                            {rent.rentNim}
                        </th>
                        <th key={rent.rentPhone} className="w-40 col border-ws-orange align-middle font-normal text-sm py-2 text-justify my-auto">
                            {rent.rentPhone}
                        </th>
                        <th key={rent.rentLineId} className="w-40 col border-ws-orange align-middle font-normal text-sm py-2 text-justify my-auto">
                            {rent.rentLineId}
                        </th>
                        <th key={rent.organisation} className=" w-40 col border-ws-orange align-middle font-normal text-sm py-2 text-center my-auto">
                            {rent.organisation}
                        </th>
                        <th key={JSON.stringify(rent.tools)} className="w-60 col border-ws-orange align-middle font-normal text-sm py-2 text-justify my-auto">
                            <ul className="list-disc text-left pl-6 mx-auto">
                                {rent.tools.map((x, idx) => {
                                    const name = tools.find(y => y.id === x.toolId)?.name;
                                    if (name) {
                                        return (<li key={idx}>
                                            {name.length > 20 ? name.substring(0, 20) + '..' : name} - {x.quantity}pcs
                                        </li>)
                                    }
                                })
                                }
                            </ul>
                        </th>
                        <th key={rent.fromDate.toISOString()} className="w-40 col border-ws-orange align-middle font-normal text-sm py-2 text-center my-auto">
                            {moment(rent.fromDate).format("DD-MM-YYYY") + ' ' + String(rent.fromDate.getHours()).padStart(2, '0') + ':' + String(rent.fromDate.getMinutes()).padStart(2, '0') + ' WIB'}
                        </th>
                        <th key={rent.expectedReturnDate.toISOString()} className="w-40 col border-ws-orange align-middle font-normal text-sm py-2 text-center my-auto">
                            {moment(rent.expectedReturnDate).format("DD-MM-YYYY") + ' ' + String(rent.expectedReturnDate.getHours()).padStart(2, '0') + ':' + String(rent.expectedReturnDate.getMinutes()).padStart(2, '0') + ' WIB'}

                        </th>
                        <th key={rent.totalPrice} className="w-40 col border-ws-orange align-middle font-normal text-sm py-2 text-center my-auto">
                            {numberToIDR(rent.totalPrice)}
                        </th>
                        <th key={rent.id + "edit"} className="w-44 col border-ws-orange align-middle font-normal text-sm py-2 text-center my-auto">
                            <div className="flex flex-row gap-x-2">
                                <button onClick={() => { onEdit(rent) }} className=" bg-sky-400 text-slate-700 hover:bg-sky-200 font-bold py-2 px-4 rounded-lg w-auto">
                                    Pickup
                                </button>
                                <button onClick={() => { onDelete(rent) }} className=" bg-red-500 text-slate-700 hover:bg-red-200 font-bold py-2 px-4 rounded-lg w-auto">
                                    Drop
                                </button>
                            </div>
                        </th>
                    </tr>
                ))
                }
            </tbody>

        </table >
    );
}

interface PickupTableProps {
    header: string[];
    data: Rent[];
    onEdit: Function;
    onDelete: Function;
    tools: Tool[];
}

export default PickupTable;