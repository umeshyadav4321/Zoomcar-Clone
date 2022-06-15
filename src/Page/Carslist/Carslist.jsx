import React from 'react'
import { Link } from "react-router-dom";
import { SearchR } from '../../Components/Layout/SearchR.jsx/SearchR';

const Carslist = () => {
  return (
    <div>
       <Link to="/searchR">
        <SearchR/>
      </Link>
      
    </div>
  )
}

export default Carslist