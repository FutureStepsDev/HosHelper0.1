import React, { useState } from "react";
import "./AddMedication.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchMedication } from "./Features/Medication";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { Image } from "cloudinary-react";

const cloudinaryUploadPreset = "samisa";
const cloudinaryCloudName = "dmefds9ta";

const AddMedication = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [descr, setDescr] = useState("");
  const [price, setPrice] = useState(0);
  const user = useSelector((state) => state.user.data.data);
  console.log(user);
  const userId = user.id;
  console.log("userId", userId);
  const prod = useSelector((state) => state.updates.data);
  console.log("idProduct", prod.id);

  const handleCloudinaryUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", cloudinaryUploadPreset);

    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${cloudinaryCloudName}/image/upload`,
      formData
    );

    return response.data.secure_url;
  };

  const handleUpdate = async () => {
    const medication = {};
    if (image) {
      const imageUrl = await handleCloudinaryUpload(image);
      medication.image = imageUrl;
    }
    if (name !== "") {
      medication.name = name;
    }
    if (descr !== "") {
      medication.description = descr;
    }
    if (price !== 0) {
      medication.price = price;
    }
    if (userId) {
      medication.PharmacyId = userId;
    }

    axios
      .put(`http://localhost:7000/api/updateProduct/${prod.id}`, medication)
      .then((response) => {
        console.log("done");
        dispatch(fetchMedication());
        navigate("/profile");
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = async () => {
    const medication = {};
    if (image) {
      const imageUrl = await handleCloudinaryUpload(image);
      medication.image = imageUrl;
    }
    if (name !== "") {
      medication.name = name;
    }
    if (descr !== "") {
      medication.description = descr;
    }
    if (price !== 0) {
      medication.price = price;
    }
    if (userId) {
      medication.PharmacienId = userId;
    }

    axios
      .post("http://localhost:7000/api/createProduct", medication)
      .then((response) => {
        console.log("done");
        navigate("/pharmacystore");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="contain">
      <div className="formContainer">
        <form>
          {image && (
            <Image
              cloudName={cloudinaryCloudName}
              publicId={image.name}
              width="150"
              crop="scale"
            />
          )}
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          <br />
          <input
            type="text"
            placeholder="description du produit"
            onChange={(e) => {
              setDescr(e.target.value);
            }}
          />
          <br />
          <input
            type="text"
            placeholder="nom"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br />
          <input
            type="number"
            placeholder="prix"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </form>
        <button onClick={handleSubmit}>add medication</button>
        <button onClick={handleUpdate}>update</button>
      </div>
    </div>
  );
};

export default AddMedication;
