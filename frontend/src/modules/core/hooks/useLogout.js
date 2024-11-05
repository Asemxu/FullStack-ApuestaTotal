import useAuthStore from "../../auth/store/authStore"
import { useNavigate } from "react-router-dom"
export const useLogout = () => {
    const { clearAuth } = useAuthStore()
    const navigate= useNavigate()

    const Logout = () => {
        clearAuth()
        navigate('/')
    }

    return { Logout} 
}