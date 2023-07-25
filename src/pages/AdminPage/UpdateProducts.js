import { useEffect, useState } from "react";
import { updateProductApi } from "../../services/productServices";

const UpdateProducts = (props) => {

    const {show, handleClose, dataProductEdit , handleEditProductFromModal} = props;

    const [title, setTitle] = useState(dataProductEdit.title);
    const [description, setDescription] = useState(dataProductEdit.description || ""); 
    const [price, setPrice] = useState(dataProductEdit.price || "");
    const [image, setImage] = useState(dataProductEdit.image || "");
    const [category, setCategory] = useState(dataProductEdit.category || "")

    useEffect(() => {
        setTitle(dataProductEdit.title || "");
        setDescription(dataProductEdit.description || "");
        setPrice(dataProductEdit.price || "");
        setImage(dataProductEdit.image || "");
        setCategory(dataProductEdit.category || "");
      }, [dataProductEdit]);

    const handleUpdateProducts = async () => {
        const updatedProduct = {
            ...dataProductEdit,
            title,
            description,
            price,
            image,
            category,
          };
        console.log('sdasdS')
        let res = await updateProductApi(dataProductEdit.id, updatedProduct)
        console.log(res)

        if(res){
            handleClose();
            handleEditProductFromModal(res);
            alert('update Products success')
        }

    }
    
    

    return (
        <>
        {show && (
            <div
            className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-6xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Edit Product 
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
                    onClick={()=>handleUpdateProducts()}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>)}
          {show && (<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>)}

        </>
    )

}

export default UpdateProducts;