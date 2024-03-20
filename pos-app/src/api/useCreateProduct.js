import axios from 'axios';

export const useCreateProduct = () => {
    
    const handleCreateProduct = async({description, name, price, imageUrl, category}) => {
        try {
            await axios.post('http://localhost:5000/products', {
                description: description.current.value, 
                name: name.current.value,
                imageUrl: imageUrl.current.value, 
                price: price.current.value, 
                category: category.current.value
            })
            alert('Create Product Success!')
        } catch (error) {
            console.log(error)
        }
    }
    
    return {
        handleCreateProduct
    }
}