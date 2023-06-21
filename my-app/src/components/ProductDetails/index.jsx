import React, { useEffect, useState } from "react";
import Product from "../product";
import { singleProductdata } from "../../service/api.service";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState();

  useEffect(() => {
    if (id) {
      getSingleProductHandler(id);
    }
  }, []);

  const getSingleProductHandler = async (id) => {
    const singleData = await singleProductdata(id);
    console.log("singleData", singleData);
    if (singleData.success) {
      setSingleProduct(singleData.data);
    }
  };

  return <Product productdata={singleProduct} />;
}

export default ProductDetails;
