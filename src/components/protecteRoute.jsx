import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import LoadingPage from "./widget/loading/LoadingPage";

// const dataRes = null

// const useAuth = async () => {
//     const { isAuthenticated, user } = useSelector(state => state.auth)
//     let resFoo = false

//     await fetch('https://laravel-api-v1.herokuapp.com/api/user', {
//         headers: { Accept: 'application/json', Authentication: 'Bearer Token' }
//     })
//         .then((res) => {
//             if (res.ok) return res.json();
//             else throw new Error("Status code error :" + res.status)
//         })
//         .then(data => {
//             console.log("Bien", data)
//             return true
//         })
//         .catch(err => {
//             console.log("ajja", err)
//             resFoo = false
//         })
//     return resFoo
// }

const ProtecteRoute = ({ children }) => {
    const { isAuthenticated, isLoader } = useSelector(state => state.auth)
    const location = useLocation();
    if (isLoader) {
        return <LoadingPage />
    } else {
        return isAuthenticated ? (children) : (<Navigate to="/login" replace state={{ path: location.pathname }} />);
    }
}

export default ProtecteRoute;