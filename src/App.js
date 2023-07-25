import React from 'react';
// import react router dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import pages
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
// import components
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import AdminPage from './pages/AdminPage/AdminPage';
import Order from './pages/AdminPage/Order';
import ManageProduct from './pages/AdminPage/ManageProduct';

const App = () => {
  return (
    <div className='app-container overflow-hidden'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/signin'  element={<SignIn/>}/>
          <Route path='/signup'  element={<SignUp/>}/>
          <Route path='/admin' element={<AdminPage/>}/>
          <Route path='/admin/order' element={<Order/>}/>
          <Route path='/admin/mangeproduct' element={<ManageProduct/>}/>
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
