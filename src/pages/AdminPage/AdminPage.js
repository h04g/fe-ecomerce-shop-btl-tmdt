
import Product from "../../components/Product";
import { debounce } from 'lodash';
import { deleteProductsApi, getAllProductApi } from "../../services/productServices";
import { useEffect, useState } from "react";
import AddNewProduct from "./AddNewProduct";
import UpdateProducts from "./UpdateProducts";
import { Link } from "react-router-dom"
import Order from "./Order";
import ManageProduct from "./ManageProduct";
const AdminPage = (props) => {
    
    const [showOrderDetail, setShowOrderDetail] = useState(false);
    const [showManageProduct, setShowManageProduct] = useState(true);
    const [buttonClicked, setButtonClicked] = useState('manage')

   const handleOrderDetailClick = () => {
    setShowOrderDetail(true);
    setShowManageProduct(false);
    setButtonClicked('order');
  };
  const handleManageProductClick = () => {
    setShowOrderDetail(false);
    setShowManageProduct(true);
    setButtonClicked('manage');
  };
    return (
        <>

        
        <div className="admin-body">

        <div>
            {/* Buttons to toggle the table visibility */}
            <button
                className={buttonClicked === 'order' ? 'clicked-button' : ''}
                onClick={handleOrderDetailClick}
            >
                Order Detail
            </button>
            <button
                className={buttonClicked === 'manage' ? 'clicked-button' : ''}
                onClick={handleManageProductClick}
            >
                Manage Product
            </button>

            {/* Show the corresponding table based on the state */}
            {showOrderDetail && <Order />}
            {showManageProduct && <ManageProduct />}
        </div>

        </div>
        
    
        
        </>
    )

}

export default AdminPage;