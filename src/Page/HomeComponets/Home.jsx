import React from "react";
import style from "./Home.module.css";
import sanitized from "../../Photo/sanitized.png";
import tool from "../../Photo/tools.png";
import tools1 from "../../Photo/tools1.png";
import umbreall from "../../Photo/umbreall.png";
import Slider from "./Slider";
// import OurFleetCard from "./OurFleetCard";
import Form from "./Form";
// import HomeBike1 from "../../Photo/homeBike.png";
// import HomeBike2 from "../../Photo/homeBike1.png";
// import HomeBike3 from "../../Photo/homeBike3.png";
// import Senitized from "./Senitized";
// import Line from "./Line";
// import add from "../HomeComponets/icons/add.png";
// import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div >
      <div className={style.landing_container}>
        <div className={style.landing_image}> </div>
        <Form />
      </div>
    
      <div>
      <div className={style.landing_image2}> </div>
      <div className={style.landing_image3}> </div>
      <div className={style.landing_image4}> </div>
      </div>

    </div>

  );
};
export default Home;
