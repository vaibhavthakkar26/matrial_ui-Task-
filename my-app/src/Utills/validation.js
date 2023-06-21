import * as Yup from "yup";

export const productSchema = Yup.object().shape({
  title: Yup.string().required("title is required"),
  category: Yup.string().required("category is required"),
  price: Yup.string().required("price is required"),
  discount: Yup.string().required("discount is required"),
  rating: Yup.string().required(" rating is required"),
  stock: Yup.string().required(" stock is required"),
  brand: Yup.string().required(" brand is required")
  // image1: Yup.string().required("Image is required"),
  // image2: Yup.string().required("Image is required"),
  // image3: Yup.string().required("Image is required"),
  // image4: Yup.string().required("Image is required"),
});
