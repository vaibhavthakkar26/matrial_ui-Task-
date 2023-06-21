import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { getProductList } from "../../service/api.service";
import {useNavigate} from "react-router-dom"

const columns = [
    { field: "id", headerName: "id", width: 100 },
    { field: "title", headerName: "title", width: 160 },
    { field: "category", headerName: "category", width: 160 },
    {
      field: "price",
      headerName: "price",
      type: "number",
      width: 100
    },
    {
      field: "discountPercentage",
      headerName: "discountPercentage",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 130,
      // valueGetter: (params) =>
      //   `${params.row.firstName || ""} ${params.row.lastName || ""}`
    },
    {
      field: "rating",
      headerName: "rating",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 140,
      // valueGetter: (params) =>
      //   `${params.row.firstName || ""} ${params.row.lastName || ""}`
    },
    {
      field: "stock",
      headerName: "stock",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 140
    },{
      field: "brand",
      headerName: "brand",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 150
    }
  ];
  
function ProductList() {
  const navigate = useNavigate();
  const [productsList,setProductsList] = useState([]);

  useEffect(()=>{
    productListHandler();
  },[]);


  const productListHandler = async () =>{
    const productList = await getProductList();
    console.log("productList",productList);
    setProductsList(productList.data.products);
  };

  const productAddHandler = () =>{
      navigate("/add-product")
  };

  return (
    <Box height={"600"} width={"100%"}>
      <Box display={"flex"} justifyContent={"end"} marginBottom={2}>
          <Button variant="outlined" onClick={productAddHandler}> Add product </Button>
      </Box>
      <DataGrid
        rows={productsList}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        onRowClick={(rows) => navigate(`/view-product/${rows.id}`)}
      />
    </Box>
  );
}

export default ProductList;
