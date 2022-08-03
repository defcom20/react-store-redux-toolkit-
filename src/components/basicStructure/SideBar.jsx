import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { toggleConfigDesign, toggleMenu } from '../../store/slices/ui'
import NavLink from "../widget/link/NavLink";

import useBreakpoints from '../../customHooks/useBreakpoint'

const SideBar = () => {
    const point = useBreakpoints();
    const dispatch = useDispatch()

    const [isOpen, setIsOpen] = useState(false);

    const arrayList = [
        { id: 1, name: 'Table', path: 'table' },
        { id: 2, name: 'Billing', path: 'billing' },
        { id: 3, name: 'Virtual Reality', path: 'virtual-reality' },
    ]

    const arrayListOtro = [
        { id: 1, name: 'Card go', path: 'card-go' },
        { id: 2, name: 'Datacenter', path: 'datacenter' },
        { id: 3, name: 'Machine', path: 'machine' },
        { id: 4, name: 'Studen', path: 'studen' },
        { id: 5, name: 'Bunnese', path: 'bunnese' },
    ]

    let subPath = location.pathname.split('/')[1];

    const handleCloseMenu = () => {
        if (point < '1280') {
            dispatch(toggleMenu())
        }
    }

    return (
        <>
            <div className="h-19.5">
                <div className='absolute top-0 right-0 p-2 opacity-50 cursor-pointer fas fa-times text-slate-400 xl:hidden'>
                    <svg onClick={() => dispatch(toggleMenu())} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </div>
                <Link to="/" className="block py-4 m-0 text-size-sm text-slate-700 text-center">
                    <img src="/img/logo-ct.png" className="inline h-full max-w-full transition-all duration-200 max-h-8" alt="main_logo" />
                    <span className="ml-3 font-semibold font-opensas transition-all duration-200 text-sm">Soft UI Dashboard</span>
                </Link>
            </div>
            <hr className="h-px bg-gradient-to-r from-indigo-500 w-[80%] mx-auto" />
            <div className="style-scrollbar items-center block w-auto max-h-screen overflow-hidden hover:overflow-auto h-sidenav grow mt-6">
                <ul className='flex flex-col space-y-6 px-5'>
                    <li className={`${isOpen ? 'bg-white shadow-lg shadow-violet-200 rounded-lg' : ''} `}>
                        <Link to={`/${subPath}`} className='flex space-x-3' onClick={handleCloseMenu}>
                            <div className="bg-gradient-to-r from-pink-500 to-violet-700 p-2 rounded-lg shadow-md shadow-indigo-600">
                                <img src="/img/home.svg" className='w-3 h-3' />
                            </div>
                            <div className="flex items-center">
                                <span className={`font-semibold font-opensas text-sm ${isOpen ? 'text-violet-600' : 'text-gray-500'} `} >Dashboard</span>
                            </div>
                        </Link>
                    </li>
                    {
                        arrayList.map((item, index) => {
                            return (
                                <li key={index}>
                                    <div className='flex items-center space-x-3'>
                                        <div className={`p-2 shadow-md rounded-lg ${isOpen ? 'bg-white shadow-violet-300' : 'bg-gray-200'}`} >
                                            <img src="/img/icon_demo.svg" className='w-3 h-3' />
                                        </div>
                                        <NavLink to={item.path} className="flex items-center">
                                            <span className='font-opensas text-sm leading-6'> {item.name} </span>
                                        </NavLink>
                                    </div>
                                </li>
                            )
                        })
                    }
                    <li className='-px-5'>
                        <span className="text-gray-400 font-bold font-opensas text-sm leading-4">ACCOUNT PAGES</span>
                    </li>
                    {
                        arrayListOtro.map((item, index) => {
                            return (
                                <li key={index}>
                                    <div className='flex items-center space-x-3'>
                                        <div className={`p-2 shadow-md rounded-lg ${isOpen ? 'bg-white shadow-violet-300' : 'bg-gray-200'}`} >
                                            <img src="/img/icon_demo.svg" className='w-3 h-3' />
                                        </div>
                                        <NavLink to={item.path} className="flex items-center">
                                            <span className='font-opensas text-sm leading-6'> {item.name} </span>
                                        </NavLink>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <hr className="h-px bg-gradient-to-r from-indigo-500 w-[70%] mx-auto" />
            <div className="flex items-end justify-center py-2">
                <button className="px-6 bg-gradient-to-r from-pink-500 to-violet-700 flex items-center justify-center space-x-2 text-white py-2 rounded-lg font-opensas text-xs" onClick={() => dispatch(toggleConfigDesign())}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                    </svg>
                    <span>Configuracion</span>
                </button>
            </div>
        </>
    );
}

export default SideBar;