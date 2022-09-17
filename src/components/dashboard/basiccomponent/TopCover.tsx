import wslogo from '../../../assets/img/wslogo.png'

const TopCover = ({ title, desc }: TopCoverProps): JSX.Element => {
    const backStyle = {
        backgroundImage: "url('/images/bgadmin.jpg')",
        backgroundColor: "#cccccc",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    };
    return (
        <>
            <div className="h-[350px]" style={backStyle}>
                <div className="flex flex-col bg-black/60 px-14 py-14 font-sans justify-start h-full">
                    <img className='h-36 shadow-xl mr-auto mb-5' src={wslogo} alt='WorkshopHME' />
                    <h1 className="ml-4 mb-2 pt-2 shadow-xl text-4xl text-left font-bold tracking-tight text-white dark:text-white">
                        {title}
                    </h1>
                    <p className="ml-4 mb-3 shadow-xl text-white dark:text-gray-400 text-left text-xl">
                        {desc}
                    </p>
                </div>
            </div>
        </>
    )
}

interface TopCoverProps {
    title: string;
    desc: string;
}

export default TopCover;