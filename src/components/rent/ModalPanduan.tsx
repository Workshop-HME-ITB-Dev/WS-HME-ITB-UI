const ModalPanduan = ({ showModal, setShowModal }: ModalPanduanProps): JSX.Element => {

    return (
        <>
            {showModal && <> <div className="justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none mx-4">
                <div className="relative w-auto my-6 mx-auto max-w-xl bg-red-200">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-3 border-b border-solid border-slate-200">
                            <h2 className="text-2xl font-semibold">Panduan Peminjaman</h2>
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
                        <div className="relative px-3 mb-10 flex-auto my-2">
                            <h2 className="font-sans text-xl text-semibold text-gray-900">
                                SOP Peminjaman Barang
                            </h2>
                            <ol className="my-2 text-justify list-decimal px-6">
                                <li className="text-md">Membuka website <a className="hover:text-blue-500" href="https://workshophme.com/rent">https://workshophme.com/rent</a> </li>
                                <li className="text-md">Mengisi Form Peminjaman Alat dengan mengisi data diri, waktu peminjaman, waktu pengembalian, dan memilih barang yang ingin dipinjam beserta jumlahnya</li>
                                <li className="text-md">Setelah memverifikasi seluruh masukan pada form, tekan tombol Submit</li>
                                <li className="text-md">Datang ke Sekre WS {`(${"Basement Labtek 8"})`} sesuai dengan tanggal dan waktu peminjaman </li>
                                <li className="text-md">Serahkan KTM atau tanda pengenal lain kepada Kru WS</li>
                                <li className="text-md">Terima barang yang dipinjam</li>
                            </ol>
                            <h2 className="font-sans text-xl text-semibold text-gray-900 mt-4">
                                SOP Pengembalian Barang
                            </h2>
                            <ol className="my-2 text-justify list-decimal px-6">
                                <li className="text-md">Datang ke Sekre WS {`(${"Basement Labtek 8"})`} sesuai dengan tanggal dan waktu pengembalian  </li>
                                <li className="text-md">Serahkan barang pinjaman kepada Kru WS</li>
                                <li className="text-md">Lakukan pembayaran secara Cash</li>
                                <li className="text-md">Minta kembali KTM atau kartu tanda pengenal yang diserahkan saat meminjam barang </li>
                            </ol>
                            <h2 className="font-sans text-xl text-semibold text-gray-900 mt-4">
                                Keterangan dan Informasi Lainnya
                            </h2>
                            <ol className="my-2 text-justify list-disc px-6">
                                <li className="text-md">Diharapkan untuk datang untuk mengambil barang pinjaman serta mengembalikan barang pinjaman dengan tepat waktu</li>
                                <li className="text-md">Toleransi keterlambatan peminjaman adalah 1 jam dari waktu yang telah ditentukan, lewat dari 1 jam maka akan dikenakan biaya denda sebesar tarif harga peminjaman normal</li>
                                <li className="text-md">Jika tidak ditemui Kru WS pada Sekre WS, hubungi nomor yang tertera pada website</li>
                                <li className="text-md">Jika harga peminjaman dengan tarif per jam lebih mahal dari tarif per hari, maka akan langsung dikenakan tarif per hari {'Misalkan pinjam 1 hari 11 jam, jika tarif pinjam 11 jam lebih mahal dibandingkan tarif per harinya, maka total pembayaran langsung menjadi 2 hari (lebih murah)'}</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>}
        </>
    );
}

interface ModalPanduanProps {
    showModal: boolean;
    setShowModal: Function;
}

export default ModalPanduan;