import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../App.css";
function Proupdate() {
  const [image, setimage] = useState(null);
  const [name, setname] = useState("");
  const [category, setcategory] = useState("");
  const [description, setdescription] = useState("");

  const { id } = useParams();

  const loadProd = async () => {
    const { data } = await axios.get(`http://127.0.0.1:8000/api/${id}`);
    // console.log(data);
    setimage(data.image);
    setname(data.name);
    setcategory(data.category);
    setdescription(data.description);
  };

  useEffect(() => {
    loadProd();
  }, []);

  const AddProd = async () => {
    let formfield = new FormData();

    formfield.append("name", name);
    formfield.append("category", category);
    formfield.append("description", description);

    if (image !== null) {
      formfield.append("image", image);
    }
    await axios({
      method: "PUT",
      url: `http://127.0.0.1:8000/api/${id}/`,
      data: formfield,
    }).then((response) => alert("your data is updated "));

    setimage(null);
    setcategory("");
    setdescription("");
    setname("");
  };

  return (
    <div>
      <div className="container">
        <div className="mb-3">
          <img id="ims" src={image}></img>
          <label for="formFile" className="form-label"></label>
          <input
            className="form-control"
            type="file"
            id="formFile"
            name="image"
            onChange={(e) => setimage(e.target.files[0])}
          />
        </div>

        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="2"
            name="description"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          ></textarea>
        </div>

        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            catogory
          </label>
          <input
            type="text"
            className="form-control"
            name="catogory"
            value={category}
            onChange={(e) => setcategory(e.target.value)}
          />
        </div>
        <a href="/">
          <button onClick={AddProd} type="button" className="btn btn-success">
            Success
          </button>
        </a>

        {/* <button onClick={AddProd} type="button" className="btn btn-success">Success</button> */}
      </div>
    </div>
  );
}

export default Proupdate;
