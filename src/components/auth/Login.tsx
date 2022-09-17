import { useMutation } from "@apollo/client";
import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { LOGIN_ADMIN } from "../../graphql/adminQuery";
import { LoginAdminInput, LoginAdminResponse } from "../../graphql/adminQuery.types";
import { validateLoginForm } from "../../utils/authFormValidator";
import { jwtValidate } from "../../utils/jwtvalidator";
import TopCover from "../dashboard/basiccomponent/TopCover";
import { ErrorLoginForm, LoginForm } from "./auth.types";

const Login = (): JSX.Element => {
  const [loginAdmin] = useMutation<LoginAdminResponse>(LOGIN_ADMIN);
  const navigate = useNavigate();
  const checkToken = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      const { isAuth } = jwtValidate(token);
      if (isAuth) {
        await new Promise(r => setTimeout(r, 500));
        navigate('/admin/pickup');
      }
    }
  }
  useEffect(() => {
    checkToken();
  }, [])
  const [formData, setFormData] = useState<LoginForm>({
    email: '',
    password: ''
  });
  const [error, setError] = useState<ErrorLoginForm>({
    email: '',
    password: ''
  });
  const [alert, setAlert] = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: any): Promise<any> => {
    e.preventDefault();
    setAlert(null);
    const { error: err, result: res } = validateLoginForm(formData);
    setError(res);
    if (!err) {
      setLoading(true);
      // change with mutation gql
      const variables: LoginAdminInput = {
        email: formData.email,
        password: formData.password
      }
      try {
        const { data: loginData } = await axios.post(process.env.REACT_APP_API_HOST_URL + '/login', variables);
        // if success
        if (loginData.data) {
          await new Promise(r => setTimeout(r, 1500));
          // Set token
          localStorage.setItem('token', loginData.data.token)
          // Add wait for redirecting to login
          navigate('/admin/pickup');
          window.location.reload();
        }
      }
      catch (e: any) {
        setAlert(e.message)
        console.error(e.message);
      }
      await new Promise(r => setTimeout(r, 500));
      setLoading(false);
    }
  }
  return (<div className="flex flex-col h-screen justify-between">
    <TopCover title='Admin Login' desc='Login page for admin dashboard' />
    <div className="flex bg-white h-full">
      <form className="rounded px-6 md:px-20 pt-4 pb-1">
        {/* email */}
        <div className="flex flex-col mb-6 mt-4">
          <label
            className="block text-gray-700 text-md font-bold mb-2 ml-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-80 shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:border-ws-orange focus:ring-ws-orange focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="johndoe@mail.com"
            name="email"
            value={formData.email}
            onChange={(e) => onChange(e)}
          />
          {error.email && (
            <span className="text-sm text-red-600 mt-2">{error.email}</span>
          )}
        </div>
        {/* password */}
        <div className="flex flex-col mb-2">
          <label
            className="block text-gray-700 text-md font-bold mb-2 ml-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="w-80 shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:border-ws-orange focus:ring-ws-orange focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="********"
            name="password"
            value={formData.password}
            onChange={(e) => onChange(e)}
          />
          {error.password && (
            <span className="text-sm text-red-600 mt-2">{error.password}</span>
          )}
        </div>
        <button onClick={(e) => { onSubmit(e) }} className=" bg-ws-orange text-gray-900 hover:bg-amber-200 font-bold py-2 px-4 rounded-lg w-auto mt-6">
          {loading ? <div className='flex flex-row'>
            <svg className='w-5 text-gray-900 animate-spin' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill='currentColor' d="M304 48C304 74.51 282.5 96 256 96C229.5 96 208 74.51 208 48C208 21.49 229.5 0 256 0C282.5 0 304 21.49 304 48zM304 464C304 490.5 282.5 512 256 512C229.5 512 208 490.5 208 464C208 437.5 229.5 416 256 416C282.5 416 304 437.5 304 464zM0 256C0 229.5 21.49 208 48 208C74.51 208 96 229.5 96 256C96 282.5 74.51 304 48 304C21.49 304 0 282.5 0 256zM512 256C512 282.5 490.5 304 464 304C437.5 304 416 282.5 416 256C416 229.5 437.5 208 464 208C490.5 208 512 229.5 512 256zM74.98 437C56.23 418.3 56.23 387.9 74.98 369.1C93.73 350.4 124.1 350.4 142.9 369.1C161.6 387.9 161.6 418.3 142.9 437C124.1 455.8 93.73 455.8 74.98 437V437zM142.9 142.9C124.1 161.6 93.73 161.6 74.98 142.9C56.24 124.1 56.24 93.73 74.98 74.98C93.73 56.23 124.1 56.23 142.9 74.98C161.6 93.73 161.6 124.1 142.9 142.9zM369.1 369.1C387.9 350.4 418.3 350.4 437 369.1C455.8 387.9 455.8 418.3 437 437C418.3 455.8 387.9 455.8 369.1 437C350.4 418.3 350.4 387.9 369.1 369.1V369.1z" />
            </svg>
            <span className='ml-2 text-md'>
              Processing...
            </span>
          </div> : <>Login</>}
        </button>
        {alert && (
          <div
            className="bg-red-100 border mb-3 mt-4 border-red-400 text-red-700 px-4 py-3 rounded relative w-80"
            role="alert"
          >
            <span className="block sm:inline">{alert}</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg
                onClick={() => setAlert(null)}
                className="fill-current h-6 w-6 text-red-500"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </span>
          </div>
        )}
      </form>
    </div>
  </div>);
}
export default Login;
