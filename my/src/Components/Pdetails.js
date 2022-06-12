import axios from "axios";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "../App.css";

function Pdetails() {
  const [product, setproduct] = useState("");
  const { id } = useParams();

  const getsingleProduct = async () => {
    const { data } = await axios.get(`http://127.0.0.1:8000/api/${id}`);

    setproduct(data);
  };
  useEffect(() => {
    getsingleProduct();
  }, []);

  const deletepro = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/api/${id}/`);
    alert("product is deleted refesh the page");
  };

  return (
    <div>
      <div className="single-producty-info">
        <center>
          <h1>Product details</h1>
          <img id="ims" src={product.image} alt={product.name}></img>
          <h4>{product.name}</h4>
          <h4>category:- {product.category}</h4>
          <h4> description:- {product.description}</h4>
          
          <Link to={`/${product.id}/update`} className="btn btn-primary m-2">
            update
          </Link>

          <a href="/">
            <button
              onClick={() => deletepro(product.id)}
              type="button"
              className="btn btn-danger"
            >
              delete
            </button>
          </a>
          {/* <Link to="/" onClick={()=> deletepro(product.id)} className="btn btn-danger m-2">
            delete
          </Link> */}
        </center>
      </div>
    </div>
  );
}

export default Pdetails;
