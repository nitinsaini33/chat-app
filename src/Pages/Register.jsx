import React from "react";
import { FcGallery } from "react-icons/fc";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firbase";
import { storage } from "../firbase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import "./HomeCommon.css";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firbase";
import { useNavigate, Link } from "react-router-dom";
const Register = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const handelSubmit = async (e) => {
    e.preventDefault();
    
    // console.log(e.target[0].value)
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log("res", res);

      
      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "userChats", res.user.uid), {});
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
            
            navigate("/");
           
          });
        }
      );
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <div className="logo-title">
          <span className="register-main">Real Chat</span>
          <span className="title">Register</span>
        </div>
        <form onSubmit={handelSubmit}>
          <div className="input-fill">

          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <FcGallery className="icon" />
            <span>Add a Img</span>
          </label>

          <button>Sign up</button>
          {err && <span>Something went wrong</span>}
          </div>
        </form>
        <p>
          you do have an account?<Link to="/login">Login</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Register;
