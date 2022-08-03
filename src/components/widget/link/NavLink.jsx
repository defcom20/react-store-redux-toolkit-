import { NavLink as NavLinkReactRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../../../store/slices/ui'
import useBreakpoints from '../../../customHooks/useBreakpoint'

const NavLink = ({ to, children }) => {
    const point = useBreakpoints();
    const dispatch = useDispatch()

    const handleCloseMenu = () => {
        if (point < '1280') {
            dispatch(toggleMenu())
        }
    }

    return (
        <NavLinkReactRouter to={to} className={({ isActive }) =>
            isActive ? 'text-purple-600 font-medium' : 'hover:text-purple-400 text-gray-500'
        } onClick={handleCloseMenu}>
            {children}
        </NavLinkReactRouter>
    );
}

export default NavLink;