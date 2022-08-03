import { useForm } from "react-hook-form";
import { Navigate } from 'react-router-dom'

import { useSelector, useDispatch } from "react-redux";
import { setErrors, setLoader, setUser } from "../store/slices/auth/authSlice";


import loginService from "../services/login";
import LoadingPage from "./widget/loading/LoadingPage";

const Login = () => {

    const { isLoader, isError, isAuthenticated } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        dispatch(setLoader(true))
        try {
            const res = await loginService.login(data)
            dispatch(setUser(res))
            window.localStorage.setItem('user', JSON.stringify(res))
            window.localStorage.setItem('token', JSON.stringify(res.token))
            dispatch(setLoader(false))
        } catch (error) {
            //console.log(error.response.data.message);
            dispatch(setErrors(error.response.data.message[0]))
            dispatch(setLoader(false))
            setTimeout(() => {
                dispatch(setErrors(null))
            }, 5000);
        }
    }

    if (isLoader) {
        return <LoadingPage />
    } else {
        if (isAuthenticated) {
            return <Navigate to="/dashboader" />
        } else {
            return (
                <>
                    <main className="mt-0 transition-all duration-200 ease-soft-in-out ps">
                        <section>
                            <div className="relative flex items-center p-0 overflow-hidden bg-center bg-cover min-h-75-screen">
                                <div className="container z-10">
                                    <div className="flex flex-wrap mt-0 -mx-3">
                                        <div className="flex flex-col w-full max-w-full px-3 mx-auto md:flex-0 shrink-0 md:w-6/12 lg:w-5/12 xl:w-4/12">
                                            <div className="relative flex flex-col min-w-0 mt-32 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border">
                                                <div className="p-6 pb-0 mb-0 bg-transparent border-b-0 rounded-t-2xl">
                                                    <h3 className="relative z-10 font-bold text-red-600">Welcome back</h3>
                                                    <p className="mb-0">Enter your email and password to sign in</p>
                                                    <p className="error-input-text"> {isError} </p>
                                                </div>
                                                <div className="flex-auto p-6">
                                                    <form onSubmit={handleSubmit(onSubmit)}>
                                                        <label className="mb-2 ml-1 font-bold text-size-xs text-slate-700">Usuario</label>
                                                        <div className="mb-4">
                                                            <input type="text" {...register("usuario", {
                                                                required: {
                                                                    value: true,
                                                                    message: "Usuario es requerido"
                                                                }, pattern: {
                                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                                    message: "Usuario no válida"
                                                                }
                                                            })} className="focus:shadow-soft-primary-outline text-size-sm leading-5.6 block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow" placeholder="Usuario" />
                                                            <span className="error-input-text">{errors.usuario?.message}</span>
                                                        </div>
                                                        <label className="mb-2 ml-1 font-bold text-size-xs text-slate-700">Password</label>
                                                        <div className="mb-4">
                                                            <input type="password" {...register("password", {
                                                                required: {
                                                                    value: true,
                                                                    message: "Password es requerido"
                                                                }, minLength: {
                                                                    value: 6,
                                                                    message: "Password debe tener al menos 6 caracteres"
                                                                }, maxLength: {
                                                                    value: 20,
                                                                    message: "Password no debe tener más de 20 caracteres"
                                                                }
                                                            })} className="focus:shadow-soft-primary-outline text-size-sm leading-5.6 block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow" placeholder="Password" />
                                                            <span className="error-input-text">{errors.password?.message}</span>
                                                        </div>
                                                        <div className="text-center">
                                                            <button type="submit" className={`inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150 ${isLoader ? 'cursor-not-allowed' : ''}`} disabled={isLoader}>

                                                                {isLoader ? <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                                </svg> : <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                                                </svg>}

                                                                {isLoader ? "Loading..." : "Sign in"}

                                                            </button>
                                                            {/* <button type="submit" className="bg-gray-800 px-4 py-1 text-white rounded-lg">Sign in</button> */}
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full max-w-full px-3 lg:flex-0 shrink-0 md:w-6/12">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </main>
                </>
            );
        }
    }




}

export default Login;