import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const DisplayCarousel = (): JSX.Element => {
    useEffect(() => {
        const id = setInterval(nextPage, 4000);
        return () => {
            clearInterval(id);
        };
    }, []);
    const prevPage = () => {
        setIndex(index => ((index - 1 + 3) % 3));
    }
    const nextPage = () => {
        setIndex(index => ((index + 1) % 3));

    }
    const [index, setIndex] = useState<number>(0);
    return (
        <div className="h-[450px]" style={carouselContent[index].backgroundStyle}>
            <div className="flex flex-col h-full bg-black/60 font-sans justify-start">
                <div className="basis-11/12 flex flex-row">
                    <div className="basis-1/12 flex text-4xl h-full justify-start">
                        <svg onClick={() => { prevPage() }} className="w-6 text-ws-orange text-center my-auto ml-4 hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z" />
                        </svg>
                    </div>
                    <div className="basis-10/12 flex justify-center items-center">
                        <div className="w-full max-w-7xl">
                            <h1 className="ml-4 mb-4 pt-2 text-4xl text-left font-bold tracking-tight text-ws-orange">
                                {carouselContent[index].title}
                            </h1>
                            <p className="ml-4 mb-3 text-white dark:text-gray-400 text-left text-md">
                                {carouselContent[index].desc}
                            </p>
                            <Link to={carouselContent[index].ref}>
                                <button className="ml-4 mt-4 bg-ws-orange text-gray-800 hover:text-gray-50 font-bold py-2 px-4 rounded-full">
                                    {carouselContent[index].button}
                                </button>
                            </Link>

                        </div>
                    </div>
                    <div className="basis-1/12 flex text-4xl text-right h-full justify-end">
                        <svg onClick={() => { nextPage() }} className="w-6 text-ws-orange text-center my-auto mr-4 hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill='currentColor' d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z" />
                        </svg>
                    </div>
                </div>
                <div className="text-4xl flex text-white justify-center">
                    <svg onClick={() => { setIndex(0) }} className={`w-4 ${(index === 0) ? "text-ws-orange" : "text-white"} text-center my-auto mr-4 hover:cursor-pointer`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill='currentColor' d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256z" />
                    </svg>
                    <svg onClick={() => { setIndex(1) }} className={`w-4 ${(index === 1) ? "text-ws-orange" : "text-white"} text-center my-auto mr-4 hover:cursor-pointer`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill='currentColor' d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256z" />
                    </svg>
                    <svg onClick={() => { setIndex(2) }} className={`w-4 ${(index === 2) ? "text-ws-orange" : "text-white"} text-center my-auto mr-4 hover:cursor-pointer`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill='currentColor' d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256z" />
                    </svg>
                </div>

            </div>
        </div>);

}
const backStyle = (path: string) => ({
    backgroundImage: `url('${path}')`,
    backgroundColor: "#cccccc",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
});

const carouselContent = [
    {
        title: 'Make it Real!',
        desc: 'Wujudkan ide proyekmu bersama Workshop HME yang telah berpengalaman dalam mengerjakan proyek-proyek elektronika',
        backgroundStyle: backStyle('/images/bglanding1.png'),
        button: 'Find Out More!',
        ref: '/project',
    },
    {
        title: 'Rent!',
        desc: 'Workshop HME menyediakan penyewaan barang-barang elektronik untuk keperluan penyelenggaraan acara. Pesan sekarang juga melalui website ini.',
        backgroundStyle: backStyle('/images/bglanding2.png'),
        button: 'Rent Now!',
        ref: '/rent',
    },
    {
        title: 'Ws Shop!',
        desc: 'Beli komponen dan kit elektronik melalui Workshop HME. Aman, murah, dan dengan dukungan aftersales yang terpercaya',
        backgroundStyle: backStyle('/images/bglanding3.png'),
        button: 'Buy Now',
        ref: '/shop',
    },

]


export default DisplayCarousel;