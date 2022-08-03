import { useEffect, useState } from "react";
import "./AdminMis.container.scss";
import { TextField } from "@mui/material";
import Button from "../../components/button/Button.component";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { app, db } from "../../services/firebase.config";
// import { getFirestore } from "firebase/firestore";
import { collection, getDocs, addDoc } from "firebase/firestore";

function AdminMis() {
  const [navLand, setNavLand] = useState("Dashboard");
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [fees, setFees] = useState("");
  const navigate = useNavigate();

  const auth = getAuth(app);
  // Initialize Cloud Firestore and get a reference to the service
  // const db = getFirestore(app);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Sign-out successful");
        navigate("/loginMis");
      })
      .catch((error) => {
        // An error happened.
        console.log("An error happened");
      });
  };

  // const dataArray = [];

  async function getData() {
    const querySnapshot = await getDocs(collection(db, "users"));
    // const data = querySnapshot.JSON();
    // console.log(querySnapshot);
    setData(querySnapshot.docs.map((doc, i) => ({ ...doc.data() })));
    querySnapshot.forEach((doc) => {
      // const dataObj = JSON.stringify(doc.data());
      const dataObj = doc.data();
      // console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
      // dataArray.push(doc.data());
      // console.log(dataObj);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  const storeData = async () => {
    if (name !== "" && lastName !== "" && startDate !== "" && fees !== "") {
      try {
        const docRef = await addDoc(collection(db, "users"), {
          name: name,
          lastName: lastName,
          startDate: startDate,
          fees: fees,
        });

        console.log("Document written with ID: ", docRef.id);
        alert("Data Stored Successfully!");
        setName("");
        setLastName("");
        setStartDate("");
        setFees("");
        getData();
        setNavLand("Dashboard");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    } else {
      alert("please fill all input fields!!!");
    }
  };

  return (
    <div className="AdminMisContainer">
      <div className="sideNavContainer">
        <h1>diamond gym</h1>
        <div className="navItemsContainer">
          <h4 onClick={() => setNavLand("Dashboard")}>Dashboard</h4>
          <h4 onClick={() => setNavLand("Register")}>Register</h4>
          <h4 onClick={() => logOut()}>logout</h4>
        </div>
      </div>
      <div className="navContainer">
        <div className="overlay">
          {navLand === "Dashboard" ? (
            <div className="dashboardContainer">
              <table cellSpacing={0}>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>LAST NAME</th>
                    <th>START DATE</th>
                    <th>FEES</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((data, i) => {
                    return (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{data.name}</td>
                        <td>{data.lastName}</td>
                        <td>{data.startDate}</td>
                        <td>{data.fees}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : navLand === "Register" ? (
            <div className="registerContainer">
              <div className="misRegisterContainer">
                <h1>MIS REGISTERATION</h1>
                <div className="registerForm">
                  <TextField
                    id="textfield"
                    error={name === "" ? true : false}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    autoComplete="off"
                    // id="outlined-error-helper-text"
                    label="Enter Your name"
                    // helperText="Incorrect user name !!!."
                    type={"text"}
                    fullWidth
                  />
                  <TextField
                    id="textfield"
                    error={lastName === "" ? true : false}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                    autoComplete="off"
                    // id="outlined-error-helper-text"
                    label="Enter Your last name"
                    // helperText="Incorrect Password !!!."
                    type="text"
                    fullWidth
                  />
                  {/* <p onClick={() => setShow((s) => !s)}>show password?</p> */}
                  <TextField
                    id="textfield"
                    error={startDate === "" ? true : false}
                    onChange={(e) => {
                      setStartDate(e.target.value);
                    }}
                    autoComplete="off"
                    // id="outlined-error-helper-text"
                    // label="Enter You"
                    // helperText="Incorrect Password !!!."
                    type="datetime-local"
                    fullWidth
                  />
                  <TextField
                    id="textfield"
                    error={fees === "" ? true : false}
                    onChange={(e) => {
                      setFees(e.target.value);
                    }}
                    autoComplete="off"
                    // id="outlined-error-helper-text"
                    label="Enter Fees Number"
                    // helperText="Incorrect Password !!!."
                    type="number"
                    fullWidth
                    InputProps={{ inputProps: { min: 0, max: 1000 } }}
                  />
                  <Button onClick={() => storeData()}>REGISTER</Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="logoutContainer">logout</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminMis;
