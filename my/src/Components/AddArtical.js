// import { Timestamp, snapshot} from "firebase/firestore";
// import {Snapshot} from "firebase/firestore";
// import React,{useState} from "react";
// import "../App.css"
// import { ref, uploadBytesResumable} from "firebase/storage";
// import { storage } from "../Firebase";

// export default function AddArtical() {

//   const [formdata, setformdata] =useState({
//     name: "",
//     description: "",
//     image: "",
//     cd: Timestamp.now().toDate(),
//   });

//   const handleChange=(e)=>{
//     setformdata({...formdata,[e.target.name]: e.target.value})
//   }

//   const handleImageChange=(e)=>{
//     setformdata({...formdata, image:e.target.files[0]})
//   };

//   const handleSubmit=()=>{
//     if(!formdata.title || !formdata.description || formdata.image){
//       alert('please fill the data');
//       return;
//     }
//     const storageref = ref(storage, `/images/${Date.now()}${formdata.image.name}`);
//     const uploadImage = uploadBytesResumable(storageref, formdata.image)

//     uploadImage.on("state_changed" (snapshot)=>{
//       const progresspercent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
//     },)
//   }
//   return (
//     <div className="border p-3 mt-3 bg-light " style={{ position: "fixed" }}>
//       <h3>create your blog</h3>
//       <lable>Title</lable>
//       <input type="text" name="name" className="form-control" value={formdata.name} onChange={(e)=>handleChange(e)} ></input>

//       {/* description */}

//       <lable htmlFor=""> Description</lable>
//       <textarea name="description" className="form-control" value={formdata.description}  onChange={(e)=>handleChange(e)}></textarea>

//       {/* image */}

//       <lable htmlFor="">image_url</lable>
//       <input
//         type="file"
//         name="image_url"
//         accept="image/*"
//         className="form-control"
//         placeholder="try to upload all horizantal images"
//         onChange={(e)=>handleImageChange(e)}
//       ></input>

//       <button className="form-control btn-primary mt-2" onClick={handleSubmit}>upload</button>
//     </div>
//   );
// }
