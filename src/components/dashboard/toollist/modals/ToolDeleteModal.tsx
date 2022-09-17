import { useMutation } from "@apollo/client";
import { UpdateToolInput, UpdateToolResponse } from "../../../../graphql/toolQuery.types";
import { UPDATE_TOOL } from "../../../../graphql/toolsQuery";
import { checkToken } from "../../../../utils/jwtvalidator";
import { Tool } from "../../../rent/rent.types";

const ToolDeleteModal = ({ formData, setFormData, setShowModal, setActionResult, refreshData }: ToolDeleteModalProps): JSX.Element => {
    const [updateTool] = useMutation<UpdateToolResponse>(UPDATE_TOOL);

    const onDelete = async (e: any): Promise<any> => {
        e.preventDefault()
        try {
            // only deactivate the tool, not remove it from db
            // in case the tool is still needed in rent log data
            // gql mutation
            const variables: UpdateToolInput = {
                updateToolInput: {
                    id: formData.id,
                    name: formData.name,
                    image: formData.image,
                    activated: false,
                    totalStock: Number(formData.totalStock),
                    priceHour: Number(formData.priceHour),
                    priceDay: Number(formData.priceDay),
                }
            }
            const tool = await updateTool({ variables })

            if (tool.data) {
                setActionResult({
                    title: "Success!",
                    desc: "Tool removed successfully.",
                    type: "success",
                });
            }
        }
        catch (e: any) {
            console.error(e.message);
            setActionResult({
                title: "Failed!",
                desc: e.message,
                type: "failed",
            });
            checkToken();
        }
        await new Promise(r => setTimeout(r, 500));
        // Refresh data 
        // leave the modal
        setShowModal(false);
        await refreshData();
        window.location.reload();
    }
    return (
        <>
            <div className="justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none mx-4">
                <div className="relative w-auto my-6 mx-auto max-w-xl bg-red-200">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-3 border-b border-solid border-slate-200">
                            <h2 className="text-2xl font-semibold">Delete Tool</h2>
                            <button
                                className="ml-auto border-0 text-black float-right text-2xl font-bold focus:outline-none"
                                onClick={() => setShowModal(false)}
                            >
                                <svg className="h-8 w-8 text-gray-900 hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                    <path fill="currentcolor" d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
                                </svg>
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative px-3 mb-10 flex-auto my-2 w-full">
                            <h2 className="font-sans text-xl text-semibold text-gray-900 text-center mt-3 mb-4">
                                Are you sure to delete tool ?
                            </h2>
                            <div className="flex flex-row gap-x-6 mx-auto justify-center">
                                <button onClick={() => { setShowModal(false) }} className=" bg-red-500 text-slate-700 hover:bg-red-200 text-xl font-bold py-2 px-4 rounded-lg w-auto">
                                    No
                                </button>
                                <button onClick={(e) => { onDelete(e) }} className=" bg-green-400 text-slate-700 hover:bg-green-200 text-xl font-bold py-2 px-4 rounded-lg w-auto">
                                    Yes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-30 fixed inset-0 z-40 bg-black"></div>
        </>
    );
}
interface ToolDeleteModalProps {
    formData: Tool;
    setFormData: Function;
    setShowModal: Function;
    setActionResult: Function;
    refreshData: Function;
}

export default ToolDeleteModal;