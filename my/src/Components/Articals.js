import React, { useEffect, useState } from "react";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../Firebase";
import { Col } from "react-bootstrap";
import "../App.css";

export default function Articals() {
  const [articals, setarticals] = useState([]);
  useEffect(() => {
    const articalRef = collection(db, "ARTICALS");
    const search = query(articalRef, orderBy("cd", "desc"));
    onSnapshot(search, (snapshot) => {
      const arytic = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setarticals(arytic);
      console.log(arytic);
    });
  }, []);
  return (
    <div>
      {articals === 0 ? (
        <h3>no articals found</h3>
      ) : (
        articals.map(({ id, title, description, image_url, name, cd }) => (
          <div key={id}>
            {/* <div class="row">
                            <div class="column">
                                <div class="card">
                                    <img id='img' src={image_url}></img>
                                
                                <p>{description}</p>
                                <h3>{name}</h3>
                                </div>
                                <h1>{title}</h1>
                            </div>
                        </div> */}

            <div className="row">
              <Col>
                <div class="card" style={{ width: "18rem" }}>
                  <img src={image_url} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h3>{name}</h3>
                    <p class="card-text">{description}</p>
                    <p>{cd.toDate().toDateString()}</p>
                  </div>
                </div>
              </Col>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
