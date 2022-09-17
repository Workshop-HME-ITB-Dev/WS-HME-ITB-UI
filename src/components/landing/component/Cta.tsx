import { Link } from 'react-router-dom';

const Cta = (): JSX.Element => {
    return (<>
        <div className="h-auto" style={backStyle}>
            <div className=" bg-black/60 h-full w-full px-14 py-2 font-sans ">
                <div className='flex flex-wrap max-w-7xl justify-center mx-auto'>
                    <div className='flex flex-col mr-16 justify-center'>
                        <p className="ml-4 mb-2 pt-2 shadow-xl text-4xl text-left font-bold tracking-tight text-gray-50">
                            Murah.
                        </p>
                        <p className="ml-4 mb-2 pt-2 shadow-xl text-4xl text-left font-bold tracking-tight text-ws-orange">
                            Lengkap.
                        </p>
                        <p className="ml-4 mb-2 pt-2 shadow-xl text-4xl text-left font-bold tracking-tight text-gray-50">
                            Berkualitas.
                        </p>
                    </div>
                    <div className='flex flex-row justify-center items-center mb-6'>
                        <Link to='/rent'>
                            <button className="ml-4 mt-4 mx-8 bg-ws-orange text-gray-800 hover:text-gray-50 text-xl font-bold py-2 px-4 rounded-full">
                                Rent Now
                            </button>
                        </Link>
                        <Link to='/shop'>
                            <button className="ml-4 mt-4 ml-8 bg-ws-orange text-gray-800 hover:text-gray-50 text-xl font-bold py-2 px-4 rounded-full">
                                Shop Now
                            </button>
                        </Link>
                    </div>
                </div>


            </div>
        </div>
    </>);
}
const backStyle = {
    backgroundImage: `url('/images/cta.png')`,
    backgroundColor: "#cccccc",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
};
export default Cta;