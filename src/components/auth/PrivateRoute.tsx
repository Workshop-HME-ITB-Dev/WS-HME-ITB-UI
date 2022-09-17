import { Navigate } from "react-router-dom";
import AdminFooter from "../dashboard/basiccomponent/AdminFooter";
import NavAdmin from "../dashboard/basiccomponent/NavAdmin";
import TopCover from "../dashboard/basiccomponent/TopCover";
import { Admin } from "../rent/rent.types";

const PrivateRoute = ({
  element: Element,
  admin,
  selected,
  isAuth,
  loading
}: PrivateRouteProps): JSX.Element => {
  return (
    <>
      {!loading &&
        <>
          {isAuth ?
            <>
              <div className="flex flex-col min-h-screen justify-between overflow-hidden absolute">
                <div className="flex flex-col">
                  <NavAdmin selected={selected} admin={admin} />
                  <TopCover title={coverContent[selected].title} desc={coverContent[selected].desc} />
                  <Element />
                </div>
                <AdminFooter />
              </div>
            </>
            :
            <Navigate to="/admin/login" />
          }
        </>}

    </>
  );
};

interface PrivateRouteProps {
  element: () => JSX.Element;
  admin: Admin | null;
  selected: string;
  isAuth: boolean;
  loading: boolean;
}

export default PrivateRoute;

const coverContent = {
  'article': {
    title: 'Article',
    desc: 'List of Articles from WS medium'
  },
  'pickup': {
    title: 'Pickup',
    desc: 'List of rents that are ready to be picked up'
  },
  'return': {
    title: 'Return',
    desc: 'List of rents that have been picked up and are ready to be returned'
  },
  'log': {
    title: 'Log',
    desc: 'List of all rent logs'
  },
  'tool': {
    title: 'Tools',
    desc: 'List of renting tools'
  },
  'shop': {
    title: 'Shop',
    desc: 'List of products available at WS Store'
  }
}