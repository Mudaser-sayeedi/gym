import "./NotFound.container.css";
import NotFoundSvg from "../../assets/icons/undraw_page_not_found.svg";
// import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <img className="nfimg" src={NotFoundSvg} alt="page not exist!" />
      <h1 className="nft">SORYY !!! PAGE NOTE FOUND!</h1>
      {/* <Button id='hbtn' variant="contained">Back to Home</Button> */}
      <button onClick={() => navigate("/")} className="hbtn">
        <h3>Back to Home</h3>
      </button>
    </div>
  );
}

export default NotFound;
