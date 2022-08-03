import { useDispatch } from 'react-redux'
import { toggleMenu } from '../../store/slices/ui'

const NavBar = () => {
    const dispatch = useDispatch()

    return (
        <>
            <div className="grid grid-cols-2 gap-6 bg-white shadow-lg rounded-2xl py-2 px-4">
                <div className="col-span-1">
                    <div className="rutas">
                        <div className="flex items-center space-x-2 text-sm font-opensas">
                            <span className='text-gray-500 opacity-40'>Pages</span>
                            <span>/</span>
                            <span className='text-salte-700 text-xs'>Dashboader</span>
                        </div>
                        <span className='font-bold font-opensas text-base text-salte-700 leading-7'>Dashboader</span>
                    </div>
                </div>
                <div className="col-span-1 flex items-center justify-end">
                    <ul className='flex space-x-3 sm:space-x-6 '>
                        <li className='hidden sm:inline'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                            </svg>
                        </li>
                        <li>
                            <a className='flex items-center space-x-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="fill-green-300 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" fillRule="evenodd" />
                                </svg>
                                <span className='font-semibold font-opensas text-sm hidden sm:flex'>Marcos .R</span>
                            </a>
                        </li>
                        <div className="xl:hidden flex">
                            <button onClick={() => dispatch(toggleMenu())}>
                                <svg className="h-5 w-5 text-black stroke-1" fill="none" strokeLinecap="round"
                                    strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default NavBar;