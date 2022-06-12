import { async } from "@firebase/util";
import axios from "axios";
import React, { useState } from "react";

import "../App.css";

function Add() {
  const [image, setimage] = useState(null);
  const [name, setname] = useState("");
  const [category, setcategory] = useState("");
  const [description, setdescription] = useState("");

  const AddProd = async () => {
    let formfield = new FormData();

    formfield.append("name", name);
    formfield.append("category", category);
    formfield.append("description", description);

    if (image !== null) {
      formfield.append("image", image);
    }

    await axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/",
      data: formfield,
    }).then((response) => alert("data is posted go to home-page" ));

    setimage(null);
    setcategory("");
    setdescription("");
    setname("");
  };

  return (
    <div>
      <div className="container">
        <div class="mb-3">
          <label for="formFile" class="form-label"></label>
          <input
            class="form-control"
            type="file"
            id="formFile"
            name="image"
            onChange={(e) => setimage(e.target.files[0])}
          />
        </div>

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            name="name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Description
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="2"
            name="description"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          ></textarea>
        </div>

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            catogory
          </label>
          <input
            type="text"
            class="form-control"
            name="catogory"
            value={category}
            onChange={(e) => setcategory(e.target.value)}
          />
        </div>

        <button onClick={AddProd} type="button" className="btn btn-success">
          Success
        </button>

        {/* <button onClick={AddProd} type="button" className="btn btn-success">Success</button> */}
      </div>
    </div>
  );
}

export default Add;
