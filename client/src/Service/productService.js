import axios from "axios";

const PRODUCT_LIST_API_URL = "http://api/products";
const PRODUCT_API_URL = "http://api/product";
const API_URL = "http://api";

class ProductService {
  getProducts() {
    return axios.get(PRODUCT_LIST_API_URL);
  }

  PRODUCT_LIST_API_URL;
  postProducts() {
    return axios.post();
  }

  getProductById(productId) {
    return axios.get(PRODUCT_API_URL + "/" + productId);
  }

  addProduct = (file, productInfo, onUploadProgress) => {
    let formData = new FormData();
    console.log(productInfo);

    formData.append("file", file);
    formData.append("title", productInfo.title);
    formData.append("price", productInfo.price);
    formData.append("category", productInfo.category);
    formData.append("description", productInfo.description);
    formData.append("rating", productInfo.rating);

    console.log(formData);

    return axios.post(API_URL + "/add", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  };
}
export default new ProductService();
