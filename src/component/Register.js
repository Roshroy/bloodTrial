import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Stack,
  Grid,
  Paper,
  InputLabel,
  Box,
  FormControl,
} from "@mui/material";
import { Link } from "react-router-dom";
import { createTheme } from "@mui/material";
import { StyledComponentProps, styled, Input } from "@mui/material";


// const useStyles = styled((theme) => ({
//   formControl: {
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   label: {
//     marginRight: theme.spacing(2),
//   },
// }));

const Label = styled(InputLabel)({
    marginRight: '50px',
    marginLeft: '80px',// Adjust the margin as needed
    display: 'flex',
    alignItems: 'center',
  });

const Register = () => {
//   const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(firstName, lastName, email, dateOfBirth, password);
  }

  // const headerStyle={}
  const paperStyle = { padding: "30px 20px", width: 1326, margin: "20px auto" };
  return (
    <>
      <React.Fragment>
        <Grid>
          <Paper elevation={10} style={paperStyle}>
            <Grid>
              <h2>Register As Donor</h2>
            </Grid>
            {/* <Box
           component="form"
           sx={{
             '& .MuiTextField-root': { m: 1, width: '25ch' },
           }}
           display="flex" flexDirection="column" gap={16}
           noValidate
           autoComplete="off"
            > */}
            
            <form onSubmit={handleSubmit} action={<Link to="/login" />}>
            <Box display="flex" flexDirection="column" gap={16} >
            {/* <div> */}
              <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
               
              <Label htmlFor="input-field">Full Name</Label>
             
                <TextField
                  id="outlined-controlled"
                //   sx={{
                //     width: { sm: 200, md: 460 }
                // }}
                style = {{width: 460,height: 58}}
                  type="text"
                  variant="outlined"
                  color="secondary"
                  label="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                //   sx={{ mb: 102 }}
                //   fullWidth
                  required
                />
                
            
                <TextField
                //   sx={{
                //     width: { sm: 200, md: 468 }
                // }}
                style = {{width: 460,height: 58}}
                  type="text"
                  variant="outlined"
                  color="secondary"
                  label="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                //   fullWidth
                  required
                />
        
                
              </Stack>
              </Box>
              {/* </div> */}
              <TextField
                type="email"
                variant="outlined"
                color="secondary"
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                fullWidth
                required
                sx={{ mb: 4 }}
              />
              <TextField
                type="password"
                variant="outlined"
                color="secondary"
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                fullWidth
                sx={{ mb: 4 }}
              />
              <TextField
                type="date"
                variant="outlined"
                color="secondary"
                label="Date of Birth"
                onChange={(e) => setDateOfBirth(e.target.value)}
                value={dateOfBirth}
                fullWidth
                required
                sx={{ mb: 4 }}
              />
              <Button variant="outlined" color="secondary" type="submit">
                Register
              </Button>
            </form>
            <small>
              Already have an account? <Link to="/login">Login Here</Link>
            </small>
           
          </Paper>
        </Grid>
      </React.Fragment>
    </>
  );
};

export default Register;
