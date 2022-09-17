import aboutus from '../../../assets/img/aboutus.png'

const AboutUs = (): JSX.Element => {
    return (
        <>
            <div className="flex flex-wrap justify-center items-center font-sans max-w-7xl mx-auto">
                <div className='flex w-full md:w-5/12'>
                    <img className='h-[350px] mx-auto' src={aboutus} alt='About Us' />
                </div>
                <div className='flex flex-col text-center w-full md:w-7/12'>
                    <h1 className='text-4xl font-semibold mt-4 md:my-2'>About Us</h1>
                    <p className='text-md max-w-3xl my-6 text-justify px-6'>Workshop adalah divisi dibawah Himpunan Mahasiswa Elektroteknik (HME ITB) yang berfokus pada bidang elektronik praktis meliputi peminjaman alat, penjualan komponen elektronika, jasa pengerjaan proyek, hingga riset di bidang IT dan elektronika.
                    </p>
                </div>
            </div>
            <svg
                className="overflow-hidden absolute bottom-0"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
            >
                <polygon
                    className="text-ws-orange fill-current"
                    points="2560 0 2560 100 0 100"
                ></polygon>
            </svg>
        </>
    )
}

export default AboutUs;