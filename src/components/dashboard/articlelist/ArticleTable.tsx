import moment from "moment";
import { Article } from "../../article/article.types";

const ArticleTable = ({ header, data, onEdit, onDelete }: ArticleTableProps): JSX.Element => {
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
                {data.map((article, idx) => (
                    <tr key={article.id + idx} className={`row flex flex-row justify-between ${idx % 2 === 0 ? 'bg-slate-200' : 'bg-slate-300'}`}>
                        <th key={article.id} className="w-10 col border-ws-orange align-middle font-normal text-sm whitespace-nowrap py-2 text-center">
                            {idx + 1}
                        </th>
                        <th key={article.id + article.imageUrl} className="w-40 col border-ws-orange align-middle font-normal text-sm whitespace-nowrap py-2 text-center">

                            <img className='h-32 w-32 object-cover rounded border-b-2 md:border-b-0 md:border-r-2' src={article.imageUrl} alt={article.title} />

                        </th>
                        <th key={article.id + article.title} className="w-40 col border-ws-orange align-middle font-normal text-sm py-2 text-center my-auto">
                            {article.title}
                        </th>
                        <th key={article.id + article.desc} className="w-40 col border-ws-orange align-middle font-normal text-sm py-2 text-justify my-auto">
                            {article.desc}
                        </th>
                        <th key={article.id + article.publishedDate.toISOString()} className="w-40 col border-ws-orange align-middle font-normal text-sm py-2 text-center my-auto">
                            {moment(article.publishedDate).format('DD MMM YYYY')}
                        </th>
                        <th key={article.id + article.duration} className="w-40 col border-ws-orange align-middle font-normal text-sm py-2 text-center my-auto">
                            {article.duration} min
                        </th>
                        <th key={article.id + article.link} className="w-40 col border-ws-orange align-middle font-normal text-sm py-2 text-center my-auto">
                            <a className="text-blue-700 text-bold hover:text-blue-300" href={article.link} rel="noopener noreferrer" target={'_blank'}>Click Here</a>
                        </th>
                        <th key={article.id + "edit"} className="w-40 col border-ws-orange align-middle font-normal text-sm py-2 text-center my-auto">
                            <div className="flex flex-row gap-x-4">
                                <button onClick={() => { onEdit(article) }} className=" bg-sky-400 text-slate-700 hover:bg-sky-200 font-bold py-2 px-4 rounded-lg w-auto">
                                    Edit
                                </button>
                                <button onClick={() => { onDelete(article) }} className=" bg-red-500 text-slate-700 hover:bg-red-200 font-bold py-2 px-4 rounded-lg w-auto">
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

interface ArticleTableProps {
    header: string[];
    data: Article[];
    onEdit: Function;
    onDelete: Function;
}

export default ArticleTable;