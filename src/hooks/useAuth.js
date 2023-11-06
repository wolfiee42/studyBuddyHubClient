import { useContext } from "react"
import { AuthContxt } from "../Provider/AuthProvider"

const useAuth = () => {
    const auth = useContext(AuthContxt)
    return auth;
}
export default useAuth;