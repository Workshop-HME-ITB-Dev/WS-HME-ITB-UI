import ws17 from '../../../assets/img/ws-hme-17.png';

const OurCommitment = (): JSX.Element => {
    return (<>
        <div className="flex flex-wrap justify-center items-center font-sans max-w-7xl mx-auto mt-2 mb-8">
            <div className='flex flex-col text-center w-full md:w-7/12'>
                <h1 className='text-4xl font-semibold mt-4 md:my-2'>Our Commitment</h1>
                <p className='text-md max-w-3xl my-6 text-justify px-14'>Sejak tahun 1973, Kami sudah berpengalaman dalam melaksanakan ratusan proyek dari berbagai klien baik mahasiswa, swasta, organisasi, maupun pemerintah. WS HME berkomitmen untuk terus memberikan yang terbaikbagi pelanggan melalui penyewaan alat, penjualan komponen, dan proyek yang dijalani. Workshop akan terus mengembangkan kemampuan dan kebutuhan Himpunan Mahasiswa Elektroteknik ITB di bidang elektronika praktis.
                </p>
            </div>
            <div className='flex w-full md:w-5/12'>
                <img className='h-[350px] mx-auto rounded-3xl drop-shadow-xl' src={ws17} alt='About Us' />
            </div>
        </div>
    </>);
}

export default OurCommitment;