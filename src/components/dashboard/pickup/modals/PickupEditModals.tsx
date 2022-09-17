import { useMutation } from "@apollo/client";
import { useState } from "react";
import { UPDATE_RENT } from "../../../../graphql/rentQuery";
import { UpdateRentInput } from "../../../../graphql/rentQuery.types";
import { checkToken } from "../../../../utils/jwtvalidator";
import { validatePickupForm } from "../../../../utils/rentDashboardValidator";
import { Rent, RentPickupError } from "../../../rent/rent.types";

const PickupEditModal = ({ formData, setFormData, setShowModal, setActionResult, refreshData }: PickupEditModalProps): JSX.Element => {
    const [updatePickup] = useMutation<UpdateRentInput>(UPDATE_RENT);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<RentPickupError>({
        pickupName: '',
        pickupNim: ''
    });
    const onEdit = async (e: any): Promise<any> => {
        e.preventDefault()
        const { error: err, result: res } = validatePickupForm(formData);
        setError(res);
        if (!err) {
            setLoading(true);
            try {
                // gql mutation
                const variables: UpdateRentInput = {
                    updateRentInput: {
                        id: formData.id,
                        rentName: formData.rentName,
                        rentNim: formData.rentNim,
                        rentPhone: formData.rentPhone,
                        rentLineId: formData.rentLineId,
                        organisation: formData.organisation,
                        fromDate: formData.fromDate.toISOString(),
                        expectedReturnDate: formData.expectedReturnDate.toISOString(),
                        status: 'waiting_return',
                        totalPrice: formData.totalPrice,
                        pickupName: formData.pickupName,
                        pickupNim: formData.pickupNim,
                        fine: 0,
                        returnName: '',
                        returnNim: '',
                        returnDate: ''
                    }
                }
                const rent = await updatePickup({ variables })
                if (rent.data) {
                    setActionResult({
                        title: "Success!",
                        desc: "Pickup updated successfully.",
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
            setLoading(false);
            // Refresh data 
            // leave the modal
            setShowModal(false);
            await refreshData();
            window.location.reload();
        }
    }
    const onChange = (e: any): void => {
        if (e.target.name === 'publishedDate') {
            setFormData(formData => ({ ...formData, [e.target.name]: (new Date(e.target.value)) }));
        }
        else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };
    return (
        <>
            <div className="justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none mx-4">
                <div className="relative w-auto my-6 mx-auto max-w-md bg-red-200">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-3 border-b border-solid border-slate-200">
                            <h2 className="text-2xl font-semibold">Pickup Rent</h2>
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
                        <div className="relative px-3 mb-10 flex flex-col my-2 w-full">
                            {/* Nama Pickup */}
                            <div className="flex flex-col mb-2">
                                <label
                                    className="block text-gray-700 text-md font-bold mb-2 ml-2"
                                    htmlFor="pickupName"
                                >
                                    Nama Pemberi Barang
                                </label>
                                <input
                                    className="w-80 shadow appearance-none border rounded-lg py-2 px-3 ml-2 text-gray-700 leading-tight focus:border-ws-orange focus:ring-ws-orange focus:outline-none focus:shadow-outline"
                                    id="pickupName"
                                    type="text"
                                    placeholder="John Doe"
                                    name="pickupName"
                                    value={formData.pickupName}
                                    onChange={(e) => onChange(e)}
                                />
                                {error.pickupName && (
                                    <span className="text-sm text-red-600 mt-1 ml-2">{error.pickupName}</span>
                                )}
                            </div>
                            {/* NIM Pickup */}
                            <div className="flex flex-col mb-2">
                                <label
                                    className="block text-gray-700 text-md font-bold mb-2 ml-2"
                                    htmlFor="pickupNim"
                                >
                                    NIM Pemberi Barang
                                </label>
                                <input
                                    className="w-80 shadow appearance-none border rounded-lg py-2 px-3 ml-2 text-gray-700 leading-tight focus:border-ws-orange focus:ring-ws-orange focus:outline-none focus:shadow-outline"
                                    id="pickupNim"
                                    type="text"
                                    placeholder="13218000"
                                    name="pickupNim"
                                    value={formData.pickupNim}
                                    onChange={(e) => onChange(e)}
                                />
                                {error.pickupNim && (
                                    <span className="text-sm text-red-600 mt-1 ml-2">{error.pickupNim}</span>
                                )}
                            </div>

                            <button onClick={(e) => { onEdit(e) }} className=" bg-ws-orange text-slate-700 hover:bg-orange-300 text-xl font-bold py-2 px-4 rounded-lg w-auto mx-auto mt-4">
                                {loading ? <div className="flex flex-row">
                                    <svg className='w-4 animation animate-spin' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill='currentColor' d="M304 48C304 74.51 282.5 96 256 96C229.5 96 208 74.51 208 48C208 21.49 229.5 0 256 0C282.5 0 304 21.49 304 48zM304 464C304 490.5 282.5 512 256 512C229.5 512 208 490.5 208 464C208 437.5 229.5 416 256 416C282.5 416 304 437.5 304 464zM0 256C0 229.5 21.49 208 48 208C74.51 208 96 229.5 96 256C96 282.5 74.51 304 48 304C21.49 304 0 282.5 0 256zM512 256C512 282.5 490.5 304 464 304C437.5 304 416 282.5 416 256C416 229.5 437.5 208 464 208C490.5 208 512 229.5 512 256zM74.98 437C56.23 418.3 56.23 387.9 74.98 369.1C93.73 350.4 124.1 350.4 142.9 369.1C161.6 387.9 161.6 418.3 142.9 437C124.1 455.8 93.73 455.8 74.98 437V437zM142.9 142.9C124.1 161.6 93.73 161.6 74.98 142.9C56.24 124.1 56.24 93.73 74.98 74.98C93.73 56.23 124.1 56.23 142.9 74.98C161.6 93.73 161.6 124.1 142.9 142.9zM369.1 369.1C387.9 350.4 418.3 350.4 437 369.1C455.8 387.9 455.8 418.3 437 437C418.3 455.8 387.9 455.8 369.1 437C350.4 418.3 350.4 387.9 369.1 369.1V369.1z" />
                                    </svg>
                                    <span className='ml-2'>
                                        Processing...
                                    </span></div> : "Pickup"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-30 fixed inset-0 z-40 bg-black"></div>
        </>
    );
}
interface PickupEditModalProps {
    formData: Rent;
    setFormData: Function;
    setShowModal: Function;
    setActionResult: Function;
    refreshData: Function;
}

export default PickupEditModal;