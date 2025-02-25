import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import ProductProvider from './component/ProductContext';  // ✅ Import Provider
import Addcart from './component/Addcart';
import OrderProvider from './component/OrderProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductProvider>  {/* ✅ Use ProductProvider to wrap the app */}
        <Addcart>

        <OrderProvider>
          <App />
          </OrderProvider>
        </Addcart>

      </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();