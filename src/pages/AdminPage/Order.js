import { Link } from "react-router-dom"

import React, { useContext } from 'react';
import { ProductContext } from "../../contexts/ProductContext";
const Order = () => {

    const orderDetailData = [
        {
          id: 1,
          title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
          quantity: 2,
          price: 25.99,
          buyerInfo: 'John Doe',
          paymentMethod: 'Credit Card',
          note: 'Deliver to back door Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        },
        {
            id: 2,
            title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
            quantity: 2,
            price: 25.99,
            buyerInfo: 'John Doe',
            paymentMethod: 'Credit Card',
            note: 'Deliver to back door Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
          },
          {
            id: 3,
            title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
            quantity: 2,
            price: 25.99,
            buyerInfo: 'John Doe',
            paymentMethod: 'Credit Card',
            note: 'Deliver to back door Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
          },
        {
          id: 4,
          title: 'Product 2',
          quantity: 1,
          price: 19.99,
          buyerInfo: 'Jane Smith',
          paymentMethod: 'PayPal',
          note: '',
        },
        // Add more objects for additional rows
      ];
      const { products, setProducts } = useContext(ProductContext);

      const handleAcceptOrder = (orderId) => {
        
        const updatedProducts = products.map((product) => {
          
          const orderItem = orderDetailData.find((item) => item.productId === product.id);
          if (orderItem) {
            return { ...product, quantity: product.quantity - orderItem.quantity };
          }
          return product;
        });
    
        setProducts(updatedProducts);
      };
    return ( 
        <>
        <div className="admin-body">
        <div className="order">
            <div className="table relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Title
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Quantity
                        </th>
                        <th scope="col" className="px-6 py-3">
                           Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Buyer's Info
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Payment Method
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Note
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {orderDetailData.map((item) => (
                            <tr  className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <td className="px-6 py-4">{item.title}</td>
                            <td className="px-6 py-4">{item.quantity}</td>
                            <td className="px-6 py-4">${item.price.toFixed(2)}</td>
                            <td className="px-6 py-4">{item.buyerInfo}</td>
                            <td className="px-6 py-4">{item.paymentMethod}</td>
                            <td className="px-6 py-4">{item.note}</td>
                                            
                            <td className="px-6 py-4">
                                    <button  
                                        className="font-medium 
                                        text-blue-600 
                                        dark:text-blue-500 
                                        hover:underline"
                                        >Accept</button> 
                                    <button 
                                        className="font-medium 
                                        text-blue-600 
                                        dark:text-blue-500 
                                        hover:underline"
                                        >Deny</button>
                            </td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
        </div>
        </div>
        </>
    )
}

export default Order