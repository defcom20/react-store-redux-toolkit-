import { NavLink as NavLinkReactRouter } from 'react-router-dom'
const NavLink = ({to, children}) => {
    const style = 'block py-1 px-4 rounded-md'
    return (
        <NavLinkReactRouter to={to} className={({ isActive }) =>
            isActive ? `${style} bg-white` : `${style} hover:text-white`
        }>
            {children}
        </NavLinkReactRouter>
    );
}

export default NavLink;