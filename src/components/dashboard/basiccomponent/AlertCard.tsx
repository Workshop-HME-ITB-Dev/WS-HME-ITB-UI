import { AlertData } from "./basic.types";

const AlertCard = ({ data, onClose }: AlertCardProps): JSX.Element => {
    const divStyle = data.type === 'success' ? "bg-green-100 border border-green-400 text-green-700 pl-4 pr-8 py-3 rounded fixed top-4 left-0 right-0 text-center mx-auto w-fit max-w-screen" :
        "bg-red-100 border border-red-400 text-red-700 pl-4 pr-8 py-3 rounded fixed top-0 left-0 right-0 text-center mx-auto w-fit max-w-screen";
    const svgStyle = data.type === 'success' ? "fill-current h-6 w-6 text-green-500" : "fill-current h-6 w-6 text-red-500";
    return (
        <div className={divStyle} role="alert">
            <strong className="font-bold">{data.title}</strong>
            <span className="block sm:inline">{" " + data.desc}</span>
            <span onClick={() => { onClose(null) }} className="absolute top-0 bottom-0 right-0 pr-1 pl-4 py-2.5">
                <svg className={svgStyle} role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <title>Close
                    </title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
            </span>
        </div>
    );
}

interface AlertCardProps {
    data: AlertData;
    onClose: Function;
}

export default AlertCard;