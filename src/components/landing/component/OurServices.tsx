import feature1 from '../../../assets/img/feature1.png';
import feature2 from '../../../assets/img/feature2.png';
import feature3 from '../../../assets/img/feature3.png';

const OurServices = (): JSX.Element => {
    return (
        <>
            <div className="flex flex-col relative">
                <h1 className="font-sans text-4xl font-semibold text-gray-900 mx-auto mt-4">
                    Our Services
                </h1>
                <div className="flex flex-wrap justify-center items-start mt-4 mb-8 w-full max-w-7xl mx-auto gap-0">
                    <div className="shadow-lg font-sans bg-gray-50 rounded-3xl p-3 basis-1/2 md:basis-3/12">
                        <img className="w-28 mx-auto my-2" src={feature1} alt='WS Rental' />
                        <h2 className="text-xl font-semibold text-center mt-2">Rental</h2>
                        <p className="text-md text-center my-2">Sewa alat elektronik untuk keperluan<br />acara tidak lagi rumit</p>
                    </div>

                    <div className="shadow-lg font-sans bg-gray-50 rounded-3xl mx-10 p-3 my-8 md:mt-24 basis-1/2 md:basis-3/12">
                        <img className="w-28 mx-auto my-2" src={feature2} alt='WS Rental' />
                        <h2 className="text-xl font-semibold text-center mt-2">Shop</h2>
                        <p className="text-md text-center my-2">Lengkapi kebutuhan komponen<br />elektronikmu melalui toko kami</p>
                    </div>
                    <div className="shadow-lg font-sans bg-gray-50 rounded-3xl p-3 basis-1/2 md:basis-3/12">
                        <img className="w-28 mx-auto my-2" src={feature3} alt='WS Rental' />
                        <h2 className="text-xl font-semibold text-center mt-2">Project</h2>
                        <p className="text-md text-center my-2">Percayakan proyekmu kepada<br /> kru Workshop yang berpengalaman</p>
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
                        className="text-gray-50 fill-current"
                        points="2560 0 2560 100 0 100"
                    ></polygon>
                </svg>
            </div>

        </>
    );
}

export default OurServices;