import { Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Article from './components/article/Article';
import Login from './components/auth/Login';
import PrivateRoute from './components/auth/PrivateRoute';
import Register from './components/auth/Register';
import ArticleDashboard from './components/dashboard/articlelist/ArticleDashboard';
import Pickup from './components/dashboard/pickup/Pickup';
import RentLog from './components/dashboard/rentlog/RentLog';
import Return from './components/dashboard/return/Return';
import ShopDashboard from './components/dashboard/shoplist/ShopDashboard';
import ToolDashboard from './components/dashboard/toollist/ToolDashboard';
import Landing from './components/landing/Landing';
import NotFound from './components/NotFound';
import Project from './components/project/Project';
import Rent from './components/rent/Rent';
import { Admin } from './components/rent/rent.types';
import Shop from './components/shop/Shop';
import { jwtValidate } from './utils/jwtvalidator';

const App = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(true);
  const [admin, setAdmin] = useState<Admin | null>(null);
  const [isAuth, setIsAuth] = useState<boolean>(true);
  const authAdmin = async () => {
    // Check auth, if all passed then isAuth true
    const token = localStorage.getItem('token');
    if (token) {
      const { isAuth, adminData } = jwtValidate(token);
      setIsAuth(isAuth);
      setAdmin(adminData);
    }
    else {
      setIsAuth(false);
      setAdmin(null);
    }
    setLoading(false);
  }
  useEffect(() => {
    authAdmin();
  }, []);
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/project" element={<Project />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/article" element={<Article />} />
          <Route path="/admin/" element={<Login />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/register" element={<Register />} />
          <Route path="/admin/pickup" element={<PrivateRoute element={Pickup} admin={admin} selected='pickup' isAuth={isAuth} loading={loading} />} />
          <Route path="/admin/return" element={<PrivateRoute element={Return} admin={admin} selected='return' isAuth={isAuth} loading={loading} />} />
          <Route path="/admin/log" element={<PrivateRoute element={RentLog} admin={admin} selected='log' isAuth={isAuth} loading={loading} />} />
          <Route path="/admin/tool" element={<PrivateRoute element={ToolDashboard} admin={admin} selected='tool' isAuth={isAuth} loading={loading} />} />
          <Route path="/admin/shop" element={<PrivateRoute element={ShopDashboard} admin={admin} selected='shop' isAuth={isAuth} loading={loading} />} />
          <Route path="/admin/article" element={<PrivateRoute element={ArticleDashboard} admin={admin} selected='article' isAuth={isAuth} loading={loading} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Fragment>
  );
};

export default App;
