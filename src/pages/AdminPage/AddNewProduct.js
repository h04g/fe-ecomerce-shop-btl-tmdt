import React, { useState } from "react"
import { addNewProductApi } from "../../services/productServices";

const AddNewProduct = (props) => {

    const {show, handleClose, handleUpdateListProducts} = props;
    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");

  

    const handleSaveProducts = async () => {
        let res = await addNewProductApi(title, price, description, category, image);
        console.log('b',res)
        if(res && res.id ) {
            handleClose()
            setTitle('')
            setPrice('')
            setImage('')
            setDescription('')
            setCategory('')
            alert("create new product successfully")
            handleUpdateListProducts({id: res.id, 
              title: res.title, 
              category: res.category,
              description: res.description,
              price: res.price,
              image: res.image
            })
            
        }else{
            alert('something wrong')
        }
        
        console.log('a')
    }
    
    return (
        <>
        {show && (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Add New Product 
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  >
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                <div className="text">Title*</div>
                <input 
                    type="text" 
                    placeholder="Enter product title ..."
                    value={title}
                    onChange={(event)=> setTitle(event.target.value)}
                />
                <div className="text">Description*</div>
                <input 
                    type="text" 
                    placeholder="Enter product description ..."
                    value={description}
                    onChange={(event)=> setDescription(event.target.value)}
                />
                <div className="text">Category*</div>
                <input 
                    type="text" 
                    placeholder="Enter product Category..."
                    value={category}
                    onChange={(event)=> setCategory(event.target.value)}
                />
                <div className="text">Price*</div>
                <input 
                    type="text" 
                    placeholder="Enter product Price ..."
                    value={price}
                    onChange={(event)=> setPrice(event.target.value)}
                />
                
                <div className="text">Image*</div>
                <input 
                    type="text" 
                    placeholder="Enter product Image ..."
                    value={image}
                    onChange={(event)=> setImage(event.target.value)}
                />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={()=>handleClose()}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={()=>handleSaveProducts()}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>)}
          {show && (
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          )}
        </>
    )

}

export default AddNewProduct