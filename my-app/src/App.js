import "./App.css";
import AddProduct from "./components/AddProduct";
import Layout from "./components/Layout";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout> 
            <ProductList/>
          </Layout>} />
          <Route path="/add-product" element={<Layout> <AddProduct/> </Layout>}/>
          <Route path="/view-product/:id" element={<Layout> <ProductDetails/> </Layout>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
