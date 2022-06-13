import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";

import PositionMenu from "./PositionMenu";
import { useSelector } from "react-redux";
import { getUsers} from "../../Redux/Action";
import { useDispatch } from "react-redux";
import PositionMenu2 from "./PositionMenu2";



export default function Navbar() {

 

  const login = useSelector((state) => state.isLogin);
  const naam = useSelector((state)=>state?.user[0]?.name) || '';

  const dispatch = useDispatch();

  React.useEffect(()=>{
    if(localStorage.getItem('user')===null){}
    else {
      dispatch(getUsers(JSON.parse(localStorage.getItem('user'))))
    }
  },[])




  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <div className={styles.firstbox}>          
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <SideBar />
          </IconButton>
            <Link to="/">
                    <img src="data:image/png;base64,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" 
                    height="40px"
              width="120px">

            </img>
            </Link>
            </div>
            <div className={styles.secondbox}>
              
            <Button
              variant="text"
              sx={{ textTransform: "none", color: "white",fontSize:"20px",marginLeft:"30px",}}
            >
              Become Host
            </Button>
            <Button
              variant="text"
              sx={{ textTransform: "none", color: "white",fontSize:"20px",marginLeft:"30px" }}
              component={Link}
              to="/offer"
            >
              ZMS
            </Button>
            {login?
          
          <PositionMenu2 user={naam} />
          
          
          :<>
            <Button
              component={Link}
              to="/login"
              sx={{ color: "white", textTransform: "none",fontSize:"20px",marginLeft:"50px" }}
              color="inherit"
            >
              <b>Login</b>
            </Button>
            <Button
              component={Link}
              to="/signup"
              sx={{
                color: "black",
                backgroundColor: "white",
                textTransform: "none",
              }}
            >
              <b>Sign Up</b>
            </Button>
            </>
          
          }
          </div>
            
        </Toolbar>
      </AppBar>
    </Box>
  );
}
