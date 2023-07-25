
import Product from "../../components/Product";
import { debounce } from 'lodash';
import { deleteProductsApi, getAllProductApi } from "../../services/productServices";
import { useEffect, useState } from "react";
import AddNewProduct from "./AddNewProduct";
import UpdateProducts from "./UpdateProducts";

import { ProductContext } from "../../contexts/ProductContext";
import { Link } from "react-router-dom"

const ManageProduct = () => {
    

    const mockProducts = [
        {
          id: 1,
          title: 'Product 1',
          description: 'Product 1 description',
          category: 'Category 1',
          price: 10.99,
          sold:10,
          quantity: 50,
          status: 'Available',
        },
        {
          id: 2,
          title: 'Product 2',
          description: 'Product 2 description',
          category: 'Category 2',
          price: 19.99,
          sold:10,
          quantity: 25,
          status: 'Available',
        },
        // Add more sample product data as needed
      ];
    
    
    const [listProducts, setListProducts] = useState('')
    const [isShowModalAddProduct, setIsShowModalAddProduct] = useState(false)
    const [isShowModalUpdateProduct, setIsShowModalUpdateProduct]= useState(false)
    const [dataProductEdit, setDataProductEdit] = useState({})

    const getAllProducts = async () => {
        let res = await getAllProductApi()
        if (res) {
            setListProducts(res)
        }

        console.log(listProducts)
    }

    const handleDeleteProduct = async (productId) => {
        let res = await deleteProductsApi()
        
        setListProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== productId))
        console.log('Product deleted successfully.');
    }

    const handleUpdateListProducts = (newProduct) => {
        setListProducts([newProduct, ...listProducts])
        console.log(listProducts)
        console.log('1')

    }
    

    const handleEditProductFromModal = (updatedProduct) => {
        setListProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === updatedProduct.id ? updatedProduct : product
          )
        );
    }

    const handleEditProduct = (item) => {
        setDataProductEdit(item)
        setIsShowModalUpdateProduct(true)
    }

    const handleSearch = debounce((event) => {
        let term = event.target.value;
        if (term) {
          let filteredProducts = listProducts.filter((item) =>
            item.title.toLowerCase().includes(term) ||
            item.category.toLowerCase().includes(term)
          );
      
          setListProducts(filteredProducts);
        } else {
          
          getAllProducts(1);
        }

      }, 500);

    
  
    const handleClose = () => {
        setIsShowModalAddProduct(false);
        setIsShowModalUpdateProduct(false);
    }
   useEffect(()=>{
    getAllProducts(1)
    console.log('1')
   },[])

    return (
        <>
            <div className="admin-body">



   <div className="action">
        <div className='find-item'>
            <input className='form-control' 
                // value={searchTerm}
                placeholder='Find Items by Title or Category'
                onChange={(event) => handleSearch(event)} />

    
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setIsShowModalAddProduct(true)}>Add Product</button>
    </div> 
    

   
<div className="table relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Id
                </th>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Description
                </th>
                <th scope="col" className="px-6 py-3">
                    Category
                </th>
                <th scope="col" className="px-6 py-3">
                    Price/Items
                </th>
                <th scope="col" className="px-6 py-3">
                    Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                    Sold
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
        {mockProducts.map((item, index) => {
          return (
            <tr key={`products-${index}`} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <td className="px-6 py-4">{item.id}</td>
              <td className="px-6 py-4">{item.title}</td>
              <td className="px-6 py-4">{item.description}</td>
              <td className="px-6 py-4">{item.category}</td>
              <td className="px-6 py-4">{item.price}</td>
              <td className="px-6 py-4">{item.quantity}</td>
              <td className="px-6 py-4">{item.sold}</td>
              <td className="px-6 py-4">{item.status === 0 ? 'Sold Out!' : 'Available!'}</td>
              <td className="px-6 py-4">
                <button
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  onClick={() => handleEditProduct(item)}
                >
                  Edit
                </button>
                <button
                  key={item.id}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  onClick={() => handleDeleteProduct(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
        <tbody>
            {listProducts ? listProducts.map((item,index)=>{
                return (
                    <tr key={`products-${index}`} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <td className="px-6 py-4">
                        {item.id}
                    </td>
                    <th scope="row" className="px-6 py-4 ">
                       {item.title} 
                    </th>
                    <td className="px-6 py-4">
                        {item.description}
                    </td>
                    <td className="px-6 py-4">
                        {item.category}
                    </td>
                    <td className="px-6 py-4">
                        {item.price}
                    </td>
                    <td className="px-6 py-4">
                        {item.quality}
                    </td>
                    <td className="px-6 py-4">
                        20
                    </td>
                    <td className="px-6 py-4">
                        {item.quality === 0 ? "Sold Out!" : "Avalible!"}
                    </td>
                    <td className="px-6 py-4">
                            <button  
                                className="font-medium 
                                text-blue-600 
                                dark:text-blue-500 
                                hover:underline"
                                onClick={()=>handleEditProduct(item)}>Edit</button> 
                            <button key={item.id}
                                className="font-medium 
                                text-blue-600 
                                dark:text-blue-500 
                                hover:underline"
                               onClick={()=>handleDeleteProduct(item.id)} >Delete</button>
                    </td>
                </tr>
                )
            }) : null}
            
        </tbody>
    </table>
</div>
</div>

<AddNewProduct
    show={isShowModalAddProduct}
    handleClose={handleClose}
    handleUpdateListProducts={handleUpdateListProducts}
/>
<UpdateProducts
    show={isShowModalUpdateProduct}
    handleClose={handleClose}
    dataProductEdit={dataProductEdit}
    handleEditProductFromModal={handleEditProductFromModal}
 />
        </>
    )
}

export default ManageProduct;