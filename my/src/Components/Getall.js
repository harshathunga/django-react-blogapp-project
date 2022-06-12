import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";

import { useParams } from "react-router";

function Getall() {
  const [set, setdata] = useState([]);
 
  const { id } = useParams();
  useEffect(() => {
    const url = "http://127.0.0.1:8000/api/";
    fetch(url)
      .then((resp) => resp.json())
      .then((res) => setdata(res));
  }, []);

  const deletepro = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/api/${id}/`);
    alert("product is deleted refesh the page");
  };

  return (
    <div className="post">
      {set.map((e, key) => (
        <div key={e.id} className="row">

        

          <Card id="alif" style={{ display:"flex",  width: "18rem" }}>
            <Card.Img variant="top" src={e.image} />
            <Card.Body>
              <Card.Title>{e.name}</Card.Title>
              <Card.Text>{e.description}</Card.Text>

              <Link to={`/${e.id}/`} className="btn btn-primary">
                {" "}
                show details
              </Link>
              <a href="/">
            <button
              onClick={() => deletepro(e.id)}
              type="button"
              className="btn btn-danger"
            >
              delete
            </button>
          </a>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default Getall;
