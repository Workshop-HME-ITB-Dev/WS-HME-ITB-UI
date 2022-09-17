import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Admin } from "../../rent/rent.types";

const NavAdmin = ({ selected, admin }: NavAdminProps): JSX.Element => {
    const navigate = useNavigate();

    const [dropdown, setDropdown] = useState<string>("hidden");
    const toggleDropdown = () => {
        if (dropdown === "visible") {
            setDropdown("hidden");
        } else {
            setDropdown("visible");
        }
    };
    const onLogout = (e: React.MouseEvent<HTMLParagraphElement | MouseEvent>) => {
        e.preventDefault();
        localStorage.removeItem('token');
        navigate('/')
    }
    const menu = {
        pickup: (selected === 'pickup') ? 'text-gray-50' : 'text-gray-900',
        return: (selected === 'return') ? 'text-gray-50' : 'text-gray-900',
        log: (selected === 'log') ? 'text-gray-50' : 'text-gray-900',
        tool: (selected === 'tool') ? 'text-gray-50' : 'text-gray-900',
        shop: (selected === 'shop') ? 'text-gray-50' : 'text-gray-900',
        article: (selected === 'article') ? 'text-gray-50' : 'text-gray-900',
    }
    return (
        <>
            <nav className="bg-ws-orange border-gray-200 px-2 sm:px-4 py-2.5 mx-0 w-screen dark:bg-gray-800">
                <div className="container font-sans flex flex-wrap justify-between items-center mx-auto max-w-none">
                    <button
                        data-collapse-toggle="mobile-menu"
                        type="button"
                        className="inline-flex items-center w-10 p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none"
                        aria-controls="mobile-menu"
                        aria-expanded="false"
                        onClick={() => {
                            toggleDropdown();
                        }}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-6 h-6 text-gray-900"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        <svg
                            className="hidden w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>

                    <div className="hidden w-full md:block md:w-auto mr-4">
                        <ul className="flex flex-col font-sans mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            <li>
                                <p
                                    className={`block ${menu.pickup} text-md border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-50 mx-1 md:p-0`}
                                >
                                    <Link to='/admin/pickup'>
                                        Pickup
                                    </Link>
                                </p>
                            </li>
                            <li>
                                <p
                                    className={`block ${menu.return} text-md border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-50 mx-1 md:p-0`}
                                >
                                    <Link to='/admin/return'>
                                        Return
                                    </Link>
                                </p>
                            </li>
                            <li>
                                <p className={`block ${menu.log} text-md border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-50 mx-1 md:p-0`}
                                >
                                    <Link to='/admin/log'>
                                        Log
                                    </Link>
                                </p>
                            </li>
                            <li>
                                <p className={`block ${menu.tool} text-md border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-50 mx-1 md:p-0`}
                                >
                                    <Link to="/admin/tool">
                                        Tool
                                    </Link>
                                </p>
                            </li>
                            <li>
                                <p className={`block ${menu.shop} text-md border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-50 mx-1 md:p-0`}
                                >
                                    <Link to="/admin/shop">
                                        Shop
                                    </Link>
                                </p>
                            </li>
                            <li>
                                <p className={`block ${menu.article} text-md border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-50 mx-1 md:p-0`}
                                >
                                    <Link to="/admin/article">
                                        Article
                                    </Link>
                                </p>
                            </li>

                        </ul>
                    </div>
                    <div className="hidden w-full md:block md:w-auto mr-4 text-sans">
                        <div className='flex flex-row font-sans text-sm font-medium'>
                            <p className="mx-1 font-sans">
                                {admin ? "Welcome, " + admin.name : ""}
                            </p>
                            <p className="mx-1">|</p>
                            <p className="mx-1 hover:cursor-pointer hover:text-gray-50">
                                <Link to='/'>
                                    Home
                                </Link>
                            </p>
                            <p className="mx-1">|</p>
                            <p onClick={(e) => { onLogout(e) }} className="mx-1 hover:cursor-pointer hover:text-gray-50">Logout</p>
                        </div>


                    </div>
                </div>
                <section className={`md:hidden ${dropdown}`}>
                    <div className="flex-grow border-t border-gray-900 w-full my-4"></div>
                    <div className={`flex justify-start duration-100 ml-4`}>
                        <ul className="flex flex-col items-start justify-between min-h-[250px] text-left ml-2">
                            <li className="border-b border-gray-900 hover:border-gray-50 my-2 uppercase">
                                <p
                                    onClick={() => {
                                        toggleDropdown();
                                    }}
                                    className="hover:text-gray-50 my-1"
                                >
                                    <Link to='/admin/pickup'>
                                        Pickup
                                    </Link>
                                </p>
                            </li>
                            <li className="border-b border-gray-900 hover:border-gray-50 my-2 uppercase">
                                <p
                                    onClick={() => {
                                        toggleDropdown();
                                    }}
                                    className="hover:text-gray-50 my-1"
                                >
                                    <Link to='/admin/return'>
                                        Return
                                    </Link>
                                </p>
                            </li>
                            <li className="border-b border-gray-900 hover:border-gray-50 my-2 uppercase">
                                <p
                                    onClick={() => {
                                        toggleDropdown();
                                    }}
                                    className="hover:text-gray-50 my-1"
                                >
                                    <Link to='/admin/log'>
                                        Log
                                    </Link>
                                </p>
                            </li>
                            <li className="border-b border-gray-900 hover:border-gray-50 my-2 uppercase">
                                <p
                                    onClick={() => {
                                        toggleDropdown();
                                    }}
                                    className="hover:text-gray-50 my-1"
                                >
                                    <Link to='/admin/tool'>
                                        Tool
                                    </Link>
                                </p>
                            </li>
                            <li className="border-b border-gray-900 hover:border-gray-50 my-2 uppercase">
                                <p
                                    onClick={() => {
                                        toggleDropdown();
                                    }}
                                    className="hover:text-gray-50 my-1"
                                >
                                    <Link to='/admin/shop'>
                                        Shop
                                    </Link>
                                </p>
                            </li>
                            <li className="border-b border-gray-900 hover:border-gray-50 my-2 uppercase">
                                <p
                                    onClick={() => {
                                        toggleDropdown();
                                    }}
                                    className="hover:text-gray-50 my-1"
                                >
                                    <Link to='/admin/article'>
                                        Article
                                    </Link>
                                </p>
                            </li>
                        </ul>
                    </div>
                </section>

            </nav>
        </>
    )
}



interface NavAdminProps {
    selected: string;
    admin: Admin | null;
}

export default NavAdmin;