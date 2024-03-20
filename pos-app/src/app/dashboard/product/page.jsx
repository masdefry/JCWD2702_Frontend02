'use client';
import HeaderDashboard from "~/components/cores/HeaderDashboard";
import { useCreateProduct } from "~/api/useCreateProduct";
import { useRef } from "react";

const ProductPage = () => {
    const { handleCreateProduct } = useCreateProduct()
    const name = useRef()
    const price = useRef()
    const description = useRef()
    const imageUrl = useRef()
    const category = useRef()

    return(
        <div>
            <HeaderDashboard 
                breadcumbsLink='Dashboard / Product'
                title='Create Product'
            />
            <div className="px-14 py-10">
                <div className="w-full flex flex-col gap-3">
                    <div className="flex gap-7">
                        <div className="flex flex-col w-full">
                            <label>
                                Name
                            </label>
                            <input 
                                ref={name}
                                className="input border border-gray-300 w-full py-3 px-3 rounded-md"
                                placeholder="Type Product Name"
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <label>
                                Price
                            </label>
                            <input 
                                ref={price}
                                className="input border border-gray-300 w-full py-3 px-3 rounded-md"
                                placeholder="Type Product Price"
                            />
                        </div>
                    </div>
                    <div className="flex gap-7">
                        <div className="flex flex-col w-full">
                            <label>
                                Image Url
                            </label>
                            <input 
                                ref={imageUrl}
                                className="input border border-gray-300 w-full py-3 px-3 rounded-md"
                                placeholder="Type Product Image"
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <label>
                                Descrption
                            </label>
                            <input 
                                ref={description}
                                className="input border border-gray-300 w-full py-3 px-3 rounded-md"
                                placeholder="Type Product Price"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col w-full">
                        <label>
                            Category
                        </label>
                        <select ref={category} className="input border border-gray-300 w-full py-3 px-3 rounded-md">
                            <option>
                                Choose Category
                            </option>
                            <option value="food">
                                Food
                            </option>
                            <option value="drink">
                                Drink
                            </option>
                        </select>
                    </div>
                    <button onClick={() =>  handleCreateProduct({name, price, description, imageUrl, category})} className="btn bg-orange-500 text-white w-full py-3 rounded-md hover:bg-black">
                        Create Product
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductPage;