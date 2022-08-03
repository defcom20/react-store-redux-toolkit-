import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { toggleConfigDesign } from '../../../store/slices/ui'

const ModalConfig = () => {

    const { isConfigDesign } = useSelector(state => state.ui)
    const dispatch = useDispatch()

    const isOpen = true
    const handleOpenClick = () => { }

    return (
        <>
            <div className={`absolute shadow-lg inset-y-0 my-2 right-0 bg-white rounded-2xl ${isConfigDesign ? '' : 'hidden'} `}>
                <div className="grid grid-cols-1 gap-4">
                    <div className="p-4 space-y-8 font-opensas">
                        <div className="px-6">
                            <div className="flex justify-between items-center">
                                <h5 className="font-semibold text-gray-600 font-opensas">Soft UI configuracion</h5>
                                <svg onClick={() => dispatch(toggleConfigDesign())} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <p className="text-xs">Vea nuestras opciones de tablero.</p>
                        </div>
                        <div className="space-y-2 font-opensas px-6">
                            <div className="mt-4">
                                <h6 className="mb-0 text-sm font-bold text-purple-400">Sidenav</h6>
                                <p className="leading-normal text-xs">Elija entre 2 tipos de página diferentes.</p>
                            </div>
                            <div className="flex items-center justify-center text-xs space-x-2">
                                <button className={`w-full ${isOpen ? 'side-btn-hover' : 'side-btn-config'}`} onClick={handleOpenClick}>
                                    Transaparente
                                </button>
                                <button className={`w-full ${isOpen ? 'side-btn-config' : 'side-btn-hover'}`} onClick={handleOpenClick}>
                                    White
                                </button>
                            </div>
                        </div>
                        <div className="px-6">
                            <div className="mb-2">
                                <h6 className="mb-0 text-sm font-bold text-purple-400">Navbar Fixed</h6>
                                <p className="leading-normal text-xs">Cambiar el menu pegado</p>
                            </div>
                            <label className="inline-flex relative items-center mr-5 cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                                {/* <span class="ml-3 text-xs font-medium text-gray-400 dark:text-gray-300">Activo</span> */}
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ModalConfig;