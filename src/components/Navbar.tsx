import { Link } from "react-router-dom";
import { useState } from "react";
import wslogo from '../assets/img/wslogo.png'

const NavBar = ({ selected }: NavBarProps): JSX.Element => {
  const [dropdown, setDropdown] = useState<string>("hidden");
  const toggleDropdown = () => {
    if (dropdown === "visible") {
      setDropdown("hidden");
    } else {
      setDropdown("visible");
    }
  };
  const navState = {
    home: (selected === 'home') ? 'text-ws-orange' : 'text-gray:700',
    rent: (selected === 'rent') ? 'text-ws-orange' : 'text-gray:700',
    project: (selected === 'project') ? 'text-ws-orange' : 'text-gray:700',
    shop: (selected === 'shop') ? 'text-ws-orange' : 'text-gray:700',
    article: (selected === 'article') ? 'text-ws-orange' : 'text-gray:700',
  }
  return (
    <>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 mx-0 w-full rounded dark:bg-gray-800">
        <div className="container font-sans flex flex-wrap justify-between items-center mx-auto max-w-none">
          <Link to="/">
            <p className="flex items-center ml-2">
              <img className='h-10 mr-2' src={wslogo} alt='WorkshopHME' />
              <span className="self-center text-xl text-gray-800 font-sans font-semibold whitespace-nowrap dark:text-white mx-2">
                WorkshopHME
              </span>
            </p>
          </Link>
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="inline-flex items-center w-10 p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={() => {
              toggleDropdown();
            }}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
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

          <div className="hidden w-full md:block md:w-auto mr-4" id="mobile-menu">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <p
                  className={`block py-2 pr-4 pl-3 ${navState.home} border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-ws-orange md:p-0`}
                  aria-current="page"
                >
                  <Link to='/'>
                    Home
                  </Link>
                </p>
              </li>
              <li>
                <p
                  className={`block py-2 pr-4 pl-3 ${navState.rent} border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-ws-orange md:p-0`}
                >
                  <Link to='/rent'>
                    Rent
                  </Link>
                </p>
              </li>
              <li>
                <p
                  className={`block py-2 pr-4 pl-3 ${navState.project} border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-ws-orange md:p-0`}
                >
                  <Link to='/project'>
                    Project
                  </Link>
                </p>
              </li>
              <li>
                <p
                  className={`block py-2 pr-4 pl-3 ${navState.shop} border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-ws-orange md:p-0`}
                >
                  <Link to='/shop'>
                    Shop
                  </Link>
                </p>
              </li>
              <li>
                <p
                  className={`block py-2 pr-4 pl-3 ${navState.article} border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-ws-orange md:p-0`}>
                  <Link to="/article">
                    Article
                  </Link>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <section className={`md:hidden ${dropdown}`}>
          <div className="flex-grow border-t border-gray-400 w-full my-4"></div>
          <div className={`flex justify-start duration-100 ml-4`}>
            <ul className="flex flex-col items-start justify-between min-h-[250px] text-left ml-2">
              <li className="border-b border-gray-400 hover:border-ws-orange my-2 uppercase">
                <p
                  onClick={() => {
                    toggleDropdown();
                  }}
                  className="hover:text-ws-orange"
                >
                  <Link to='/'>
                    Home
                  </Link>
                </p>
              </li>
              <li className="border-b border-gray-400 hover:border-ws-orange my-2 uppercase">
                <p
                  onClick={() => {
                    toggleDropdown();
                  }}
                  className="hover:text-ws-orange my-1"
                >
                  <Link to='/rent'>
                    Rent
                  </Link>
                </p>
              </li>
              <li className="border-b border-gray-400 hover:border-ws-orange my-2 uppercase">
                <p
                  onClick={() => {
                    toggleDropdown();
                  }}
                  className="hover:text-ws-orange my-1"
                >
                  <Link to='/project'>
                    Project
                  </Link>
                </p>
              </li>
              <li className="border-b border-gray-400 hover:border-ws-orange my-2 uppercase">
                <p
                  onClick={() => {
                    toggleDropdown();
                  }}
                  className="hover:text-ws-orange my-1"
                >
                  <Link to='/shop'>
                    Shop
                  </Link>
                </p>
              </li>
              <li className="border-b border-gray-400 hover:border-ws-orange my-2 uppercase">
                <p
                  onClick={() => {
                    toggleDropdown();
                  }}
                  className="hover:text-ws-orange my-1"
                >
                  <Link to='/article'>
                    Article
                  </Link>
                </p>
              </li>
            </ul>
          </div>
        </section>
      </nav>
    </>
  );
};

interface NavBarProps {
  selected: string;
}

export default NavBar;
