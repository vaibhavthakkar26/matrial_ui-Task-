import { Box, Button, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getProductList } from "../../service/api.service";
import { useNavigate } from "react-router-dom";
import { titlesData } from "../../Utills/helper";

function ProductList() {
  const navigate = useNavigate();
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    productListHandler();
  }, []);

  const productListHandler = async () => {
    const productList = await getProductList(1);
    setProductsList(productList.data.products);
  };

  const productAddHandler = () => {
    navigate("/add-product");
  };

  const paginationHandler = async (event, value) => {
    const paginationApiHandler = await getProductList(value);
    setProductsList(paginationApiHandler.data.products);
  };

  return (
    <Box height={"600"} width={"100%"}>
      <Box display={"flex"} justifyContent={"end"} marginBottom={2}>
        <Button variant="outlined" onClick={productAddHandler}>
          Add product
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {titlesData.map((res) => {
                return <TableCell>{res.name}</TableCell>;
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {productsList.map((row) => (
              <TableRow
                onClick={()=> navigate(`/view-product/${row.id}`)}
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.discountPercentage}</TableCell>
                <TableCell>{row.rating}</TableCell>
                <TableCell>{row.stock}</TableCell>
                <TableCell>{row.brand}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box display={"flex"} justifyContent={"end"} mt={2}>
        <Pagination count={10} onChange={paginationHandler} />
      </Box>


      {/* FIRST I USED THIS DATA GRID FOR DISPLAY DATA AND IMPLEMENT ALL FUNCNALITY AS WELL BUT
         THEY DON`T PROVIDE CUSTOM FUNCANLITY SO NEED TO CHANGE 
      */}

      {/* <DataGrid
        rows={productsList}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        onRowClick={(rows) => navigate(`/view-product/${rows.id}`)}
      /> */}
    </Box>
  );
}

export default ProductList;
