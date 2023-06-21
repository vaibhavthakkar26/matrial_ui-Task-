import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { getProductList } from "../../service/api.service";

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
  
  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 }
  ];

function ProductList() {
  const [productsList,setProductsList] = useState([]);

  useEffect(()=>{
    productListHandler();
  },[]);


  const productListHandler = async () =>{
    const productList = await getProductList();
    console.log("productList",productList);
    setProductsList(productList.data.products);
  }
  {console.log("rows",productsList)}
  return (
    <Box height={"600"} width={"100%"} mt={10}>
      <Box display={"flex"} justifyContent={"end"} marginBottom={2}>
          <Button variant="outlined"> Add product </Button>
      </Box>
      <DataGrid
        rows={productsList}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        // checkboxSelection
        onRowClick={(rows) =>console.log("id",rows)}
      />
    </Box>
  );
}

export default ProductList;
