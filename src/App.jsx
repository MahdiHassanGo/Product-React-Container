import { useState } from "react";
import "./App.css";
import AllProducts from "./components/AllProducts/AllProducts";
import CardContainer from "./components/CardContainer/CardContainer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [isActive, setIsActive] = useState({
    cart: true,
    status: "cart",
  });

  const [selectedProducts, setSelectedProducts] = useState([]);
 
 
 const handleSelectedProduct = (product) => {

  const isExist = selectedProducts.find((p)=> p.id ==product.id);


  if(isExist){
alert('already added cannot add anymore');
  }
  else{
    const newProducts = {...selectedProducts,product};
    setSelectedProducts(newProducts);
  }

  
  };

  const handleIsActiveState = (status) => {

    if (status === "cart") {
      setIsActive({
        cart: true,
        status: "cart",
      });
    } else {
      setIsActive({
        cart: false,
        status: "about",
      });
    }
  };

  return (
    <>
      <div className="flex">
        <AllProducts handleSelectedProduct={handleSelectedProduct} />
        {/* Pass isActive to CardContainer as a prop */}
        <CardContainer
          isActive={isActive}
          handleIsActiveState={handleIsActiveState}
        />
      </div>
    </>
  );
}

export default App;
