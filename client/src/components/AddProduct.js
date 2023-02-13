import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import productService from "../Service/productService";

const AddProduct = () => {
  const [selectedFiles, setSelectedFiles] = useState(undefined);
  const [currentFile, setCurrentFile] = useState(undefined);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");

  const [fileInfos, setFileInfos] = useState([]);

  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [category, setCategory] = useState();
  const [description, setDescription] = useState();
  const [rating, setRating] = useState();

  const navigate=useNavigate()

 

  useEffect(() => {
    /* ServiceUpload.getFiles().then((response) => {
      setFileInfos(response.data);
    });*/
  }, []);

  const selectFile = (event) => {
    setSelectedFiles(event.target.files);
  };

  const upload = () => {
    let currentFile = selectedFiles[0];
    let  productInfo={title,price,category,description,rating}
    setProgress(0);
    setCurrentFile(currentFile);
       
      productService.addProduct(currentFile,productInfo, (event) => {
      setProgress(Math.round((100 * event.loaded) / event.total));
    })
      .then((response) => {
        setMessage(response.data.message);
        
      })
      .then((files) => {
        setFileInfos(files.data);
      })
      .catch(() => {
        setProgress(0);
        setMessage("Could not upload the file!");
        setCurrentFile(undefined);
      });

    setSelectedFiles(undefined);
    navigate(`/products`)
    
    
  };

  return (
    <div className="container w-50">
          <h5 className="text-center fw-bold m-2">  Add Product</h5>   
      {currentFile && (
        <div className="progress">
          <div
            className="progress-bar progress-bar-info progress-bar-striped"
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: progress + "%" }}
          >
            {progress}%
          </div>
        </div>
      )}
      <div className="text-center">
        <div className="m-2">
          <input
            type="text"
            className="form-control"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="title"
          />
        </div>

        <div className="m-2">
          <input
            type="text"
            className="form-control"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            placeholder="description"
          />
        </div>

        <div className="m-2">
          <input
            type="text"
            className="form-control"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            placeholder="category"
          />
        </div>

        <div className="m-2">
          <input
            type="text"
            className="form-control"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            placeholder="price"
          />
        </div>

        <div className="m-2">
          <input
            type="text"
            className="form-control"
            onChange={(e) => {
              setRating(e.target.value);
            }}
            placeholder="rating"
          />
        </div>

        <div className="m-2">
          <input type="file" onChange={selectFile} />
        </div>
        <button
          className="btn btn-success m-2"
          disabled={!selectedFiles}
          onClick={upload}
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
