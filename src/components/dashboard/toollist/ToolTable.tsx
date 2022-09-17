import { numberToIDR } from "../../../utils/utils";
import { Tool } from "../../rent/rent.types";

const ToolTable = ({ header, data, onEdit, onDelete }: ToolTableProps): JSX.Element => {

    return (
        <table className="border-separate border-spacing-x-3 table-auto bg-transparent mb-4 mt-6 w-full mx-auto">
            <thead className="container bg-ws-orange rounded-t w-auto">
                <tr className="row flex flex-row justify-between px-2">
                    <th key="no" className="w-10 col text-gray-800 align-middle py-1 text-md font-bold text-left">
                        No
                    </th>
                    {header.map(x => (
                        <th key={x} className="w-40 col text-gray-800 align-middle py-1 text-md font-bold text-center">
                            {x}
                        </th>
                    ))}
                    <th key="action" className="w-40 col text-gray-800 align-middle py-1 text-md font-bold text-center">
                        Action
                    </th>
                </tr>
            </thead>

            <tbody className="container rounded-b w-auto">
                {data.map((product, idx) => (
                    <tr key={product.id.toString() + idx.toString()} className={`row flex flex-row justify-between ${idx % 2 === 0 ? 'bg-slate-200' : 'bg-slate-300'}`}>
                        <th key={product.id} className="w-10 col border-ws-orange align-middle font-normal text-sm whitespace-nowrap py-2 text-center">
                            {idx + 1}
                        </th>
                        <th key={product.id + product.image + idx} className="w-40 col border-ws-orange align-middle font-normal text-sm whitespace-nowrap py-2 text-center">

                            <img className='h-32 w-32 object-cover rounded border-b-2 md:border-b-0 md:border-r-2' src={product.image} alt={product.name} />

                        </th>
                        <th key={product.id + product.name + idx} className="w-40 col border-ws-orange align-middle font-normal text-sm py-2 text-center my-auto">
                            {product.name}
                        </th>
                        <th key={product.id + product.totalStock + idx} className="w-40 col border-ws-orange align-middle font-normal text-sm py-2 text-center my-auto">
                            {product.totalStock}
                        </th>
                        <th key={product.id + product.priceHour + idx} className="w-40 col border-ws-orange align-middle font-normal text-sm py-2 text-center my-auto">
                            {numberToIDR(product.priceHour)}
                        </th>
                        <th key={product.id + product.priceDay + idx} className="w-40 col border-ws-orange align-middle font-normal text-sm py-2 text-center my-auto">
                            {numberToIDR(product.priceDay)}
                        </th>
                        <th key={product.id + "edit" + + idx} className="w-40 col border-ws-orange align-middle font-normal text-sm py-2 text-center my-auto">
                            <div className="flex flex-row gap-x-4">
                                <button onClick={() => { onEdit(product) }} className=" bg-sky-400 text-slate-700 hover:bg-sky-200 font-bold py-2 px-4 rounded-lg w-auto">
                                    Edit
                                </button>
                                <button onClick={() => { onDelete(product) }} className=" bg-red-500 text-slate-700 hover:bg-red-200 font-bold py-2 px-4 rounded-lg w-auto">
                                    Delete
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

interface ToolTableProps {
    header: string[];
    data: Tool[];
    onEdit: Function;
    onDelete: Function;
}

export default ToolTable;