import { Box, TextField } from "@mui/material";
import React from "react";

function Product() {
  return (
    <>
      <Box mt={5} display={"grid"} gap={4}>
      <Box display={"flex"} justifyContent={"space-between"}>
           <Box> 
              <img src={"https://i.dummyjson.com/data/products/11/1.jpg"} width={100} height={100}/>
           </Box>
           <Box> 
              <img src={"https://i.dummyjson.com/data/products/11/1.jpg"} width={100} height={100}/>
           </Box>
           <Box> 
              <img src={"https://i.dummyjson.com/data/products/11/1.jpg"} width={100} height={100}/>
           </Box>
           <Box> 
              <img src={"https://i.dummyjson.com/data/products/11/1.jpg"} width={100} height={100}/>
           </Box>
      </Box>
      <Box display={"flex"} flexWrap={"wrap"} gap={2}>
        <Box width={"48%"}>
          <TextField
            label="description"
            name="description"
            variant="outlined"
            fullWidth
            //   error={formik.touched.description && formik.errors.description}
            //   {...formik.getFieldProps("description")}
          />
        </Box>

        <Box width={"48%"}>
          <TextField
            label="description"
            name="description"
            variant="outlined"
            fullWidth
            //   error={formik.touched.description && formik.errors.description}
            //   {...formik.getFieldProps("description")}
          />
        </Box>

        <Box width={"48%"}>
          <TextField
            label="description"
            name="description"
            variant="outlined"
            fullWidth
            //   error={formik.touched.description && formik.errors.description}
            //   {...formik.getFieldProps("description")}
          />
        </Box>


        <Box width={"48%"}>
          <TextField
            label="description"
            name="description"
            variant="outlined"
            fullWidth
            //   error={formik.touched.description && formik.errors.description}
            //   {...formik.getFieldProps("description")}
          />
        </Box>
      </Box>
      </Box>
    </>
  );
}

export default Product;
