import useAdminStore from "../store/adminStore"

const useAdmin = () => {
    const { data } = useAdminStore()
    return {
        data
    }
}

export default useAdmin