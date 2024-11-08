import { useNavigate } from "react-router-dom"
import { useUser } from "./useUser"
export const useLogout = () => {
    const { clearAuth } = useUser()
    const navigate= useNavigate()

    const Logout = () => {
        clearAuth()
        navigate('/')
    }

    return { Logout} 
}