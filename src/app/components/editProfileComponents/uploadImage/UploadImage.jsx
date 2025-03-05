import React, { useState, useRef } from "react";
import "./uploadImage.css";
import Image from "next/image";
import AvatarEditor from "react-avatar-editor";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const UploadImage = ({ profilePic, setProfilePic }) => {
  const [previewImage, setPreviewImage] = useState("/profilePic.png");
  const [selectedImage, setSelectedImage] = useState(null);
  const [buttonText, setButtonText] = useState("Upload Picture");
  const [scale, setScale] = useState(1);
  const editorRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreviewImage(URL.createObjectURL(file));
      setButtonText("Adjust & Save");
    }
  };

  const handleScaleChange = (event) => {
    const scaleValue = parseFloat(event.target.value);
    setScale(scaleValue);
  };

  const handleUpload = async () => {
    if (!editorRef.current) {
      alert("No image selected!");
      return;
    }
    editorRef.current.getImageScaledToCanvas().toBlob(async (blob) => {
      if (blob) {
        const formData = new FormData();
        formData.append("file", blob, selectedImage.name);
        try {
          const accessToken = Cookies.get("accessToken");
          if (!accessToken) {
            console.error("No access token found in cookies");
            return;
          }
          const response = await axios.post(
            "https://api.urido.co.uk/user/update-profile-pic",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
          setProfilePic(response.data.data.profilePicUrl);
          toast.success("Your Booking Is Done!");
          setButtonText("Upload Picture");
          setSelectedImage(null);
        } catch (error) {
          console.error("Error uploading image:", error);
          toast.error("Image upload failed!");
        }
      }
    });
  };

  return (
    <div className="editProfile-imageBox">
      {buttonText === "Adjust & Save" ? (
        <div className="editor-container">
          <AvatarEditor
            ref={editorRef}
            image={previewImage}
            width={180}
            height={180}
            border={50}
            borderRadius={100}
            color={[255, 255, 255, 0.6]}
            scale={scale}
            rotate={0}
            style={{ backgroundColor: "rgb(217, 217, 217)" }}
          />
          <input
            type="range"
            value={scale}
            min="1"
            max="3"
            step="0.1"
            onChange={handleScaleChange}
            className="scale-slider"
          />
        </div>
      ) : (
        <Image
          src={profilePic ? profilePic : previewImage}
          width={200}
          height={200}
          alt="Profile Picture"
          className="editProfile-image"
        />
      )}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: "none" }}
        id="file-input"
      />
      <button
        className="editProfile-uploadButton"
        onClick={() => {
          if (buttonText === "Upload Picture") {
            document.getElementById("file-input").click();
          } else {
            handleUpload();
          }
        }}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default UploadImage;
