import { Link } from "react-router-dom";
import wslogo from '../assets/img/wslogo.png'

const Footer = (): JSX.Element => (
  <footer className="bg-gray-100 text-center lg:text-left static bottom-0">
    <div className="flex flex-col max-w-7xl justify-center items-center mx-auto">
      <div className="flex flex-row justify-between items-center w-full">

        <div className="hidden md:block w-5/12 font-sans font-semibold justify-start">
          <h2 className="text-gray-700 text-2xl text-left hover:text-ws-orange hover:pointer ml-4">
            <Link to='/'>WorkshopHME</Link></h2>
          <ul className="list-none justify-start text-left">
            <li className="my-2 text-gray-700 hover:text-ws-orange hover:pointer ml-4">
              <Link to='/rent'>Rent</Link>
            </li>
            <li className="my-2 text-gray-700 hover:text-ws-orange hover:pointer ml-4">
              <Link to='/project'>Project</Link>
            </li>
            <li className="my-2 text-gray-700 hover:text-ws-orange hover:pointer ml-4">
              <Link to='/shop'>Shop</Link>
            </li>
            <li className="my-2 text-gray-700 hover:text-ws-orange hover:pointer ml-4">
              <Link to='/article'>Article</Link>
            </li>
          </ul>
        </div>
        <div className="mx-auto mt-4 mb-3 w-2/12 font-sans font-semibold justify-center">
          <img className='w-24 mx-auto mb-5' src={wslogo} alt='WorkshopHME' />
          <div className="flex justify-center">
            <a href="https://www.instagram.com/wshmeitb/" rel="noopener noreferrer" target={'_blank'} className="mr-6 text-gray-600">
              <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram"
                className="w-8 hover:text-ws-orange" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                </path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/workshop-hmeitb/about/" rel="noopener noreferrer" target={'_blank'} className="mr-6 text-gray-600">
              <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in"
                className="w-8 hover:text-ws-orange" role="img" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512">
                <path fill="currentColor"
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                </path>
              </svg>
            </a>
            <a href="mailto:workshopitb@gmail.com" className="text-gray-600">
              <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in"
                className="w-8 hover:text-ws-orange" role="img" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512">
                <path fill="currentColor" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="hidden md:block w-0 md:w-5/12 font-sans mt-3 justify-end text-right">
          <div className="flex flex-row justify-end mb-2">
            <div className="flex flex-col justify-end">
              <h2 className="text-md font-semibold">Project Manager</h2>
              <p className="text-sm">Gotawa Aryo Prakoso (085878502837)</p>
              <p className="text-sm">ID LINE : gotawa_aryo</p>
            </div>
            <a href="https://api.whatsapp.com/send?phone=085878502837" rel="noopener noreferrer" target={'_blank'} className="text-gray-600 my-auto">
              <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in"
                className="mx-3 w-10 hover:text-ws-orange" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>
            </a>
          </div>
          <div className="flex flex-row justify-end mb-2">
            <div className="flex flex-col justify-end">
              <h2 className="text-md font-semibold">Chairman</h2>
              <p className="text-sm">Owen Limvin (082268006052)</p>
              <p className="text-sm">ID LINE: 929owen929</p>
            </div>
            <a rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=082268006052" target={'_blank'} className="text-gray-600 my-auto">
              <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in"
                className="mx-3 w-10 hover:text-ws-orange" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>
            </a>
          </div>
          <div className="flex flex-row justify-end mb-2">
            <div className="flex flex-col justify-end">
              <h2 className="text-md font-semibold">Address</h2>
              <p className="text-sm">Labtek VIII Achmad Bakrie, ITB,</p>
              <p className="text-sm">Lb.Siliwangi, Kec. Coblong,</p>
              <p className="text-sm">Kota Bandung, Jawa Barat, 40132 </p>
            </div>
            <a rel="noopener noreferrer" href="https://www.google.com/maps/dir//Labtek+VIII+Achmad+Bakrie+Bandung+Institute+of+Technology+Lebak+Siliwangi+Coblong,+Bandung+City,+West+Java+40132/@-6.8905954,107.610576,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x2e68e6576b8e4a93:0x7f724c692aa6bfeb!2m2!1d107.610576!2d-6.8905954" target={'_blank'} className="text-gray-600 my-auto">
              <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in"
                className="mx-3 w-10 hover:text-ws-orange" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path fill='currentColor' d="M408 120C408 174.6 334.9 271.9 302.8 311.1C295.1 321.6 280.9 321.6 273.2 311.1C241.1 271.9 168 174.6 168 120C168 53.73 221.7 0 288 0C354.3 0 408 53.73 408 120zM288 152C310.1 152 328 134.1 328 112C328 89.91 310.1 72 288 72C265.9 72 248 89.91 248 112C248 134.1 265.9 152 288 152zM425.6 179.8C426.1 178.6 426.6 177.4 427.1 176.1L543.1 129.7C558.9 123.4 576 135 576 152V422.8C576 432.6 570 441.4 560.9 445.1L416 503V200.4C419.5 193.5 422.7 186.7 425.6 179.8zM150.4 179.8C153.3 186.7 156.5 193.5 160 200.4V451.8L32.91 502.7C17.15 508.1 0 497.4 0 480.4V209.6C0 199.8 5.975 190.1 15.09 187.3L137.6 138.3C140 152.5 144.9 166.6 150.4 179.8H150.4zM327.8 331.1C341.7 314.6 363.5 286.3 384 255V504.3L192 449.4V255C212.5 286.3 234.3 314.6 248.2 331.1C268.7 357.6 307.3 357.6 327.8 331.1L327.8 331.1z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="text-gray-700 text-center p-2">
        <p className="my-1">Created by <span className="text-gray-800 hover:text-ws-orange hover:pointer">
          <a href='https://www.linkedin.com/in/davidfauzi' target='_blank' rel="noopener noreferrer">David Fauzi</a></span> </p>
        <p>© 2022 Workshop HME. All Rights Reserved.</p>
      </div>
    </div>

  </footer>
);

export default Footer;
