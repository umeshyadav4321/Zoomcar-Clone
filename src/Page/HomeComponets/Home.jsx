import React from "react";
import style from "./Home.module.css";
import Form from "./Form";


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
