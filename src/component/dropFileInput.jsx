import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

import "./drop-file-input.css";

//import { ImageConfig } from "../config/ImageConfig";
import uploadImg from "../assets/cloud-upload-regular-240.png";

const DropFileInput = (props) => {
  const [image, setImage] = useState({ preview: "", raw: "" });
  const [image1, setImage1] = useState({ preview1: "", raw1: "" });


  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  const handleChangeNew = (e) => {
    if (e.target.files.length) {
      setImage1({
        preview1: URL.createObjectURL(e.target.files[0]),
        raw1: e.target.files[0],
      });
    }
  };

  //   const handleUpload = async (e) => {
  //     e.preventDefault();
  //     const formData = new FormData();
  //     formData.append("image", image.raw);

  //     // await fetch("YOUR_URL", {
  //     //   method: "POST",
  //     //   headers: {
  //     //     "Content-Type": "multipart/form-data"
  //     //   },
  //     //   body: formData
  //     // });
  //   };

  const wrapperRef = useRef(null);
  console.log(image);
  console.log(image1);


  //const [fileList, setFileList] = useState([]);

  const onDragEnter = () => wrapperRef.current.classList.add("dragover");

  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");

  const onDrop = () => wrapperRef.current.classList.remove("dragover");

  //   const onFileDrop = (e) => {
  //     const newFile = e.target.files[0];
  //     if (newFile) {
  //       const updatedList = [...fileList, newFile];
  //       setFileList(updatedList);
  //       props.onFileChange(updatedList);
  //     }
  //   };

  //   const fileRemove = (file) => {
  //     const updatedList = [...fileList];
  //     updatedList.splice(fileList.indexOf(file), 1);
  //     setFileList(updatedList);
  //     props.onFileChange(updatedList);
  //   };

  return (
    <>
      {
        <div className="parent">
          <label htmlFor="upload-button">
            {/* {image.preview ? (
              <img src={image.preview} alt="dummy" width="100" height="100" />
            ) : (
              <>
                <span className="fa-stack fa-2x mt-3 mb-2">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fas fa-store fa-stack-1x fa-inverse" />
                </span>
                <h5 className="text-center">Upload your photo</h5>
              </>
            )} */}
            <img src={image.preview} width="200" height="200" />
          </label>
          <input
            type="file"
            id="upload-button"
            style={{ display: "none" }}
            onChange={handleChange}
          />
          <br />
          {/* <button onClick={handleUpload}>Upload</button> */}
        </div>
      }
      <div
        ref={wrapperRef}
        className="drop-file-input"
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <div className="drop-file-input__label">
          <img src={uploadImg} alt="" />
          <p>Drag & Drop your files here</p>
        </div>
        <input type="file" value="" onChange={handleChange} />
      </div>
      <div
        ref={wrapperRef}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <input type="file" value="" onClick={handleChangeNew}/>
      </div>
    </>
  );
};

DropFileInput.propTypes = {
  onFileChange: PropTypes.func,
};

export default DropFileInput;
