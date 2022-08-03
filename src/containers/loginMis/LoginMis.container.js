import { TextField } from "@mui/material";
import { useState } from "react";
import "./LoginMis.container.scss";
import Button from "../../components/button/Button.component";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../services/firebase.config";

function LoginMis() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app);

  const submit = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
        navigate("/admin/mis");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        alert("Error (auth/invalid-email)");
      });
  };

  return (
    <div className="misContainer">
      <div className="overlay">
        <h1>GYM MIS LOGIN</h1>
        <div className="loginForm">
          <TextField
            error={email === "" ? true : false}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
            id="outlined-error-helper-text"
            label="Enter Your email"
            // helperText="Incorrect user name !!!."
            type={"text"}
          />
          <TextField
            error={password === "" ? true : false}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
            id="outlined-error-helper-text"
            label="Enter Your Password"
            // helperText="Incorrect Password !!!."
            type={show ? "text" : "password"}
          />
          <p onClick={() => setShow((s) => !s)}>show password?</p>
          <Button onClick={() => submit()}>Login</Button>
        </div>
      </div>
    </div>
  );
}

export default LoginMis;
