import { Outlet } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { toggleMenu, setBreakpoint, toggleConfigDesign } from '../../store/slices/ui'
import useBreakpoints from '../../customHooks/useBreakpoint'

import Footer from "../basicStructure/Footer";
import NavBar from "../basicStructure/NavBar";
import SideBar from "../basicStructure/SideBar";
import ModalConfig from "../widget/modal/ModalConfig";
import { useEffect } from 'react';

const Layout = () => {
  
  const { isToggleMenu } = useSelector(state => state.ui)
  const dispatch = useDispatch()
  const point = useBreakpoints()

  useEffect(() => {
    dispatch(setBreakpoint(point))
  }, [point])

  return (
    <>
      <div className="flex p-2 h-screen">
        {/* Modal para configurar UI de la web */}
        <ModalConfig />
        {/* Bloque todo la pantalla cuando se abre el menu en mobil */}
        <div enter-class="opacity-0" enter-active-class="ease-out transition-medium" enter-to-class="opacity-100"
          leave-class="opacity-100" leave-active-class="ease-out transition-medium" leave-to-class="opacity-0">
          <div className={`z-10 fixed inset-0 transition-opacity ${isToggleMenu ? 'xl:hidden' : 'hidden'} `} >
            <div onClick={() => dispatch(toggleMenu())} className="absolute inset-0 bg-violet-800 opacity-50" tabIndex="0"></div>
          </div>
        </div>
        {/* PANEL LEFT */}
        <div className={`hidden xl:inline xl:w-[18%] rounded-2xl p-4 mr-3 bg-white shadow-md`}>
          {/* Menu SIDE para web */}
          <SideBar />
        </div>
        {/* PANEL RIGHT */}
        <div className="w-full xl:w-[82%] bg-white shadow-md rounded-2xl px-3 pt-1 overflow-hidden hover:overflow-auto style-scrollbar-g" onClick={() => dispatch(toggleConfigDesign(true))}>
          {/* Menu NAVBAR para web y mobil */}
          <NavBar />
          <div className="h-body grid grid-cols-1 content-between">
            <div className="mt-2">
              {/* Pagina dinamica */}
              <Outlet />
            </div>
            <div>
              {/* Footer */}
              <Footer />
            </div>
          </div>
        </div>
        {/* Menu SIDE para mobil */}
        <aside className={`p-5 rounded-2xl mr-3 transform top-2 left-2 bottom-2 w-64 bg-white fixed overflow-auto ease-in-out transition-all duration-300 z-30 ${isToggleMenu ? 'translate-x-0' : '-translate-x-full'}`}>
          <SideBar />
        </aside>
      </div>
    </>
  );
}

export default Layout;