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
} from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/material";
import "./../App.css";
import MenuItem from "@mui/material/MenuItem";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

const Label = styled(InputLabel)({
  marginRight: "20px",
  marginLeft: "10px",
  display: "flex",
  alignItems: "center",
});

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(firstName, lastName, email, dateOfBirth, password);
  }

  const bloodgroup = [
    {
      value: "O positive",
      label: "O +",
    },
    {
      value: "A positive",
      label: "A +",
    },
    {
      value: "AB positive",
      label: "AB +",
    },
    {
      value: "O negative",
      label: "O -",
    },
  ];

  const state1 = [
    {
      value: "Kerala",
      label: "Kerala",
    },
    {
      value: "Tamil Nadu",
      label: "Tamil Nadu",
    },
    {
      value: "Goa",
      label: "Goa",
    },
    {
      value: "Ladakh",
      label: "Ladakh",
    },
  ];

  const district = [
    {
      value: "Ernakulam",
      label: "Ernakulam",
    },
    {
      value: "Kozhikode",
      label: "Kozhikode",
    },
    {
      value: "Malappuram",
      label: "Malappuram",
    },
    {
      value: "Thrissur",
      label: "Thrissur",
    },
  ];

  return (
    <>
      <Grid className="header" maxWidth="xl">
        <h2 className="header1">Register As Donor</h2>
      </Grid>
      <Container maxWidth="xl">
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={10} md={8}>
            <Paper
              elevation={10}
              sx={{ padding: "30px 20px", margin: "20px auto" }}
            >
              <form onSubmit={handleSubmit}>
                <Box display="flex" flexDirection="column" gap={2}>
                  <Stack
                    spacing={2}
                    direction="row"
                    sx={{ marginBottom: 4 }}
                    className="name-fields"
                  >
                    <Grid container>
                      <Grid item xs={3}>
                        <Label htmlFor="input-field">Full Name</Label>
                      </Grid>
                      <Grid item xs={5}>
                        <TextField
                          type="text"
                          variant="outlined"
                          color="secondary"
                          label="First Name"
                          onChange={(e) => setFirstName(e.target.value)}
                          value={firstName}
                          // fullWidth
                          required
                          // sx={{ marginRight: 70 }}
                        />
                      </Grid>
                      <Grid item xs>
                        <TextField
                          type="text"
                          variant="outlined"
                          color="secondary"
                          label="Last Name"
                          onChange={(e) => setLastName(e.target.value)}
                          value={lastName}
                          required
                          // fullWidth
                          // sx={{ marginRight: 70 }}
                        />
                      </Grid>
                    </Grid>
                  </Stack>
                  {/* <Box display="flex" flexDirection="column" gap={2}> */}
                  <Stack
                    spacing={2}
                    direction="row"
                    sx={{ marginBottom: 4 }}
                    className="name-fields"
                  >
                    {/* <Grid Container > */}
                    <Grid item xs={2.75}>
                      <Label htmlFor="input-field">Phone Number</Label>
                    </Grid>
                    <Grid item xs={7.75}>
                      <TextField
                        type="phonenumber"
                        variant="outlined"
                        color="secondary"
                        label="Number"
                        onChange={(e) => setphoneNumber(e.target.value)}
                        value={phoneNumber}
                        required
                        fullWidth
                      />
                    </Grid>
                    {/* </Grid> */}
                  </Stack>
                  <Stack
                    spacing={2}
                    direction="row"
                    sx={{ marginBottom: 4 }}
                    className="name-fields"
                  >
                    {/* <Grid Container> */}
                    <Grid item xs={2.75}>
                      <Label htmlFor="input-field">Email</Label>
                    </Grid>
                    <Grid item xs={5}>
                      <TextField
                        type="email"
                        variant="outlined"
                        color="secondary"
                        label="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                      />
                    </Grid>
                    <Grid item xs={4.35}>
                      <TextField
                        type="password"
                        variant="outlined"
                        color="secondary"
                        label="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                      />
                    </Grid>
                    {/* </Grid> */}
                  </Stack>
                  <Stack
                    spacing={2}
                    direction="row"
                    sx={{ marginBottom: 4 }}
                    className="name-fields"
                  >
                    <Grid item xs={4}>
                      <Label htmlFor="input-field">Address</Label>
                    </Grid>
                    <Grid item xs={5}>
                      <TextField
                        id="outlined-multiline-static"
                        // label="Address"
                        multiline
                        rows={4}
                        defaultValue="Type Here"
                      />
                    </Grid>
                    <Grid Container xs={2}>
                      <Stack
                        spacing={2}
                        direction="row"
                        sx={{ marginBottom: 10 }}
                        className="name-fields"
                      >
                        <Grid item xs={9}>
                          <Label htmlFor="input-field">Age </Label>
                        </Grid>
                      </Stack>
                      <Stack
                        spacing={2}
                        direction="row"
                        sx={{ marginBottom: 9 }}
                        className="name-fields"
                      >
                        <Grid item>
                          <Label htmlFor="input-field">Blood Group</Label>
                        </Grid>
                      </Stack>
                    </Grid>
                    <Grid Container xs={6}>
                      <Stack
                        spacing={2}
                        direction="row"
                        sx={{ marginBottom: 4 }}
                        className="name-fields"
                      >
                        <Grid item xs={10}>
                          <TextField
                            id="outlined-multiline-flexible"
                            // label="Multiline"
                            multiline
                            // maxRows={4}
                          />
                        </Grid>
                      </Stack>
                      <Stack
                        spacing={2}
                        direction="row"
                        sx={{ marginBottom: 4 }}
                        className="name-fields"
                      >
                        <Grid item xs>
                          <TextField
                            id="outlined-select-currency"
                            select
                            label="Select"
                            defaultValue="O positive"
                            helperText="Please select your blood group"
                          >
                            {bloodgroup.map((option) => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))}
                          </TextField>
                        </Grid>
                      </Stack>
                    </Grid>
                  </Stack>
                  <Stack
                    spacing={2}
                    direction="row"
                    sx={{ marginBottom: 4 }}
                    className="name-fields"
                  >
                    <Grid item xs={3.5}>
                      <Label htmlFor="input-field">District</Label>
                    </Grid>
                    <Grid item xs={4.75}>
                      <TextField
                        id="outlined-select-currency-native"
                        select
                        // label="Native select"
                        defaultValue="Ernakulam"
                        SelectProps={{
                          native: true,
                        }}
                        // helperText="Please select your currency"
                      >
                        {district.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid item xs={2}>
                      <Label htmlFor="input-field">State</Label>
                    </Grid>
                    <Grid item xs={5.2}>
                      <TextField
                        id="outlined-select-currency-native"
                        select
                        // label="Native select"
                        defaultValue="Kerala"
                        SelectProps={{
                          native: true,
                        }}
                        // helperText="Please select your currency"
                      >
                        {state1.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </TextField>
                    </Grid>
                  </Stack>
                  <Stack
                    spacing={2}
                    direction="row"
                    sx={{ marginBottom: 4 }}
                    className="name-fields"
                  >
                    <Grid item xs={2.75}>
                      <Label htmlFor="input-field">Pincode</Label>
                    </Grid>
                    <Grid item xs={9.99}>
                      <TextField
                        type="pincode"
                        variant="outlined"
                        color="secondary"
                        // label="Number"
                        // onChange={(e) => setphoneNumber(e.target.value)}
                        // value={phoneNumber}
                        required
                        // fullWidth
                      />
                    </Grid>
                  </Stack>

                  <Stack
                    spacing={2}
                    direction="row"
                    sx={{ marginBottom: 2.5 }}
                    className="name-fields"
                  >
                    <Grid item xs={2.5}>
                      <Label htmlFor="input-field">Last Donation</Label>
                    </Grid>
                    <Grid item xs={7.97}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer
                          components={["DatePicker", "DatePicker"]}
                        >
                          <DatePicker label={'"year"'} openTo="year" />
                          <DatePicker
                            label={'"month"'}
                            openTo="month"
                            views={["year", "month", "day"]}
                          />
                          <DatePicker label={'"day"'} openTo="day" />
                        </DemoContainer>
                      </LocalizationProvider>
                    </Grid>
                  </Stack>
                  {/* <Stack direction="row" spacing={5}>
                    <Grid Container justifyContent="flex-end">
                   
                    </Grid>
                  </Stack> */}
                  <Grid container>
                    <Grid item sm={10.68}>
                      <Box display="flex" justifyContent="flex-end">
                      <Button variant="outlined" startIcon={<TaskAltIcon />}>
                      Submit
                    </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default Register;
