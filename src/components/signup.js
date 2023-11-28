import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
// import logo from "../assets/logo.png";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import GoogleIcon from '../assets/google.png';
import { Typography } from "@mui/material";
const Signup = () => {
  return (
    
    <div
      style={{
        backgroundColor: "#EEF2F6",
        // minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "500px",
          height: "80vh",
          backgroundColor: "#ffffff",
          borderRadius: "10px",

        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: '20px'
          }}
        >
          {/* <img src={logo} alt="not available" /> */}
          <span style={{ fontWeight: '700', fontSize: '20px' }}>BERRY</span>
        </div>
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <div
            style={{
              fontWeight: "bold",
              color: "#673AB7", fontSize: "23px",
            }}
          >
            Sign up
          </div>

          <div style={{ color: "#929496", marginTop: "10px", fontWeight: '500' }}>
            Enter your Credential to Continue...
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: '20px',
            backgroundColor:'#f8fafc'
          }}
        >
          <Grid container spacing={2} style={{ width: "450px", }}>
            <Grid item xs={12}>
              <Button
                variant="outlined"
                color="primary"
                startIcon={<img src={GoogleIcon} alt="Google" style={{ height: '20px', width: '20px' }} />}
                fullWidth
              >
                Sign Up With Google
              </Button>
            </Grid>
          </Grid>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: '20px'
          }}
        >
          <Grid container spacing={2} style={{ width: "450px" }}>
            <Grid item xs={3}>
              {/* Horizontal line on the left side */}
              <div
                style={{
                  width: "100%",
                  borderBottom: "1px solid #ccc",
                  margin: "15px 8px 0px -8px", // Adjust the margin as needed
                }}
              />
            </Grid>
            <Grid item xs={5}>
              <Button
                variant="outlined"
                style={{ color: 'black', borderColor: '#eef2f6', borderRadius:'20px' }}
                fullWidth
              >
                OR
              </Button>
            </Grid>
            <Grid item xs={3}>
              {/* Horizontal line on the right side */}
              <div
                style={{
                  width: "100%",
                  borderBottom: "1px solid #ccc",
                  margin: "15px -8px 0px 8px", // Adjust the margin as needed
                }}
              />
            </Grid>
          </Grid>
        </div>
        <div>

        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
             marginTop: "20px"
          }}
        >
           <h5 style={{margin:'auto', }}>Sign up with Email address</h5>
          <Grid container spacing={2} style={{ width: "450px", marginTop:"15px" }}>
            {/* <h5 style={{margin:'auto', marginTop:'25px'}}>Sign up with Email address</h5> */}
           
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                size="medium"
                fullWidth
                style={{backgroundColor:'#f8fafc'}}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                size="medium"
                fullWidth
                style={{backgroundColor:'#f8fafc'}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Email Address/UserName"
                variant="outlined"
                size="medium"
                fullWidth
                style={{backgroundColor:'#f8fafc'}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                size="medium"
                fullWidth
                style={{backgroundColor:'#f8fafc'}}
              />
            </Grid>
            <Grid
              item
              xs={12}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label={
                    <Typography variant="body1" sx={{ fontSize: '15px' }}>
                      Agree with <span style={{ textDecoration: 'underline' }}>Terms & Condition</span>
                    </Typography>
                  }
                  sx={{fontSize:'15px'}}
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div style={{ display: "grid" }}>
                {" "}
                <Button style={{ backgroundColor: "#673AB7", color: "#fff" }}>
                  Sign up
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
        <hr style={{marginTop:'15px', color: "#fff" }}/>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // marginTop: '20px',
            backgroundColor:'#f8fafc'
          }}
        >
          <Grid container  style={{ width: "450px", }}>
            <Grid item xs={12}>
              <Button
                fullWidth
                style={{color:'black', fontSize:'13px', textTransform: 'capitalize' }}
              >
               Already have an Account?
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Signup;