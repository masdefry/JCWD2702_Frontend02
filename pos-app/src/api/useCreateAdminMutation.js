import axios from "axios"
import { useState } from "react"

export const useCreateAdminMutation = () => {
    const [isLoading, setIsLoading] = useState(false)
    
    const handleCreateAdmin = async(values) => {
        try {
            setIsLoading(true)
            await axios.post('http://localhost:5000/admins',{
                values
            })
        } catch (error) {
            
        }finally{
            setIsloading(false)
        }
    }

    return {
        isLoading, 
        handleCreateAdmin,
    }

}