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

            alert('Success')
        } catch (error) {
            alert(error)
        }finally{
            setIsLoading(false)
        }
    }

    return {
        handleCreateAdmin,
        isLoading
    }

}