import { Box, Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { productInitialValues } from "../../Utills/helper";
import { productSchema } from "../../Utills/validation";
import AddImage from "../../assets/images/Add_image.jpg";
import { addProductData } from "../../service/api.service";
import {useNavigate} from "react-router-dom"

function Product({ addProduct, productdata }) {
  let inputRefone;
  let inputRefTwo;
  let inputRefThree;
  let inputRefFour;
  const navigate = useNavigate();
  const [imageOne, setImageOne] = useState("");
  const [displayImageOne, setDisplayImageOne] = useState("");
  const [imageTwo, setImageTwo] = useState("");
  const [displayImageTwo, setDisplayImageTwo] = useState("");
  const [imageThree, setImageThree] = useState("");
  const [displayImageThree, setDisplayImageThree] = useState("");
  const [imageFour, setImageFour] = useState("");
  const [displayImageFour, setDisplayImageFour] = useState("");

  const formik = useFormik({
    initialValues: productInitialValues,
    onSubmit: async (value) => {
      const formData = new FormData();
      formData.append("brand", value.brand);
      formData.append("category", value.category);
      formData.append("discount", value.discount);

      //  when i am add this images to the API they give 500 Internal server
      // Mostly My time was go to set Images and and i faced 3-4 error related to set and display Images (i am used formik so that's)

      // formData.append("image1",imageOne)
      // formData.append("image2",imageTwo)
      // formData.append("image3",imageThree);
      // formData.append("image4",imageFour);
      //

      formData.append("price", value.price);
      formData.append("rating", value.rating);
      formData.append("stock", value.stock);
      formData.append("title", value.title);

      const response = await addProductData(formData);
    },
    validationSchema: productSchema,
  });

  const handleImageOne = (event) => {
    const value = event?.target?.files[0];
    setImageOne(value);
    setDisplayImageOne(URL.createObjectURL(value));
  };

  const handleImageTwo = (event) => {
    const values = event?.target?.files[0];
    setImageTwo(values);
    setDisplayImageTwo(URL.createObjectURL(values));
  };

  const handleImageThree = (event) => {
    const values = event?.target?.files[0];
    setImageThree(values);
    setDisplayImageThree(URL.createObjectURL(values));
  };

  const handleImageFour = (event) => {
    const value = event?.target?.files[0];
    setImageFour(value);
    setDisplayImageFour(URL.createObjectURL(value));
  };

  useEffect(() => {
    if (productdata) {
      singleProductDataHandler();
    }
  }, [productdata]);

  const singleProductDataHandler = () => {
    formik.setValues({
      title: productdata.title,
      category: productdata.category,
      price: productdata.price,
      discount: productdata.discountPercentage,
      rating: productdata.rating,
      stock: productdata.stock,
      brand: productdata.brand,
    });
  };

  return (
    <>
      <Box display={"grid"} gap={4}>
        {productdata?.images.length > 0 ? (
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            flexWrap={"wrap"}
          >
            {productdata?.images.map((res) => {
              return <img src={res} width={100} height={100} />;
            })}
          </Box>
        ) : (
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            flexWrap={"wrap"}
          >
            <Box>
              {formik.values.image1 || displayImageOne ? (
                <img
                  src={formik.values.image1 || displayImageOne}
                  width={100}
                  height={100}
                />
              ) : (
                <>
                  <input
                    hidden={true}
                    ref={(refParam) => (inputRefone = refParam)}
                    type="file"
                    accept="image/*"
                    onChange={handleImageOne}
                  />
                  <img
                    src={AddImage}
                    width={100}
                    height={100}
                    onClick={() => inputRefone.click()}
                  />
                </>
              )}
            </Box>
            <Box>
              {formik.values.image2 || displayImageTwo ? (
                <img
                  src={formik.values.image2 || displayImageTwo}
                  width={100}
                  height={100}
                />
              ) : (
                <>
                  <input
                    hidden={true}
                    ref={(refParam) => (inputRefTwo = refParam)}
                    type="file"
                    accept="image/*"
                    onChange={handleImageTwo}
                  />
                  <img
                    src={AddImage}
                    width={100}
                    height={100}
                    onClick={() => inputRefTwo.click()}
                  />
                </>
              )}
            </Box>
            <Box>
              {formik.values.image3 || displayImageThree ? (
                <img
                  src={formik.values.image3 || displayImageThree}
                  width={100}
                  height={100}
                />
              ) : (
                <>
                  <input
                    hidden={true}
                    ref={(refParam) => (inputRefThree = refParam)}
                    type="file"
                    accept="image/*"
                    onChange={handleImageThree}
                  />
                  <img
                    src={AddImage}
                    width={100}
                    height={100}
                    onClick={() => inputRefThree.click()}
                  />
                </>
              )}
            </Box>
            <Box>
              {formik.values.image4 || displayImageFour ? (
                <img
                  src={formik.values.image4 || displayImageFour}
                  width={100}
                  height={100}
                />
              ) : (
                <>
                  <input
                    hidden={true}
                    ref={(refParam) => (inputRefFour = refParam)}
                    type="file"
                    accept="image/*"
                    onChange={handleImageFour}
                  />
                  <img
                    src={AddImage}
                    width={100}
                    height={100}
                    onClick={() => inputRefFour.click()}
                  />
                </>
              )}
            </Box>
          </Box>
        )}

        <Box display={"flex"} flexWrap={"wrap"} gap={2}>
          <Box width={"48%"}>
            <TextField
              label="title"
              name="title"
              variant="outlined"
              fullWidth
              error={formik.touched.title && formik.errors.title}
              {...formik.getFieldProps("title")}
            />
          </Box>

          <Box width={"48%"}>
            <TextField
              label="category"
              name="category"
              variant="outlined"
              fullWidth
              error={formik.touched.category && formik.errors.category}
              {...formik.getFieldProps("category")}
            />
          </Box>

          <Box width={"48%"}>
            <TextField
              label="price"
              name="price"
              variant="outlined"
              fullWidth
              error={formik.touched.price && formik.errors.price}
              {...formik.getFieldProps("price")}
            />
          </Box>

          <Box width={"48%"}>
            <TextField
              label="discount"
              name="discount"
              variant="outlined"
              fullWidth
              error={formik.touched.discount && formik.errors.discount}
              {...formik.getFieldProps("discount")}
            />
          </Box>

          <Box width={"48%"}>
            <TextField
              label="rating"
              name="rating"
              variant="outlined"
              fullWidth
              error={formik.touched.rating && formik.errors.rating}
              {...formik.getFieldProps("rating")}
            />
          </Box>

          <Box width={"48%"}>
            <TextField
              label="stock"
              name="stock"
              variant="outlined"
              fullWidth
              error={formik.touched.stock && formik.errors.stock}
              {...formik.getFieldProps("stock")}
            />
          </Box>

          <Box width={"48%"}>
            <TextField
              label="brand"
              name="brand"
              variant="outlined"
              fullWidth
              error={formik.touched.brand && formik.errors.brand}
              {...formik.getFieldProps("brand")}
            />
          </Box>
          <Button variant="contained" type="submit" onClick={()=>navigate("/")}>
              Back
          </Button>
          {addProduct && (
            <Button
              variant="contained"
              type="submit"
              onClick={formik.handleSubmit}
            >
              submit
            </Button>
          )}
          
        </Box>
      </Box>
    </>
  );
}

export default Product;
