import React from "react";
import { useHistory } from 'react-router-dom';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

function Login() {
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost/toko_online/login.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Lakukan sesuatu jika response sukses
        history.push("/beranda");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard
            className="bg-white my-5 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "500px" }}
          >
            <MDBCardBody className="p-5 w-100 d-flex flex-column">
              <h2 className="fw-bold mb-2 text-center">Sign in</h2>
              <p className="text-white-50 mb-3">
                Please enter your login and password!
              </p>
              <form action="" method="post" onSubmit={handleSubmit}>
                <MDBInput
                  name="username"
                  wrapperClass="mb-4 w-100"
                  label="username"
                  id="formControlLg"
                  type="text"
                  size="lg"
                />
                <MDBInput
                  name="password"
                  wrapperClass="mb-4 w-100"
                  label="password"
                  id="formControlLg"
                  type="password"
                  size="lg"
                />

                <MDBCheckbox
                  name="flexCheck"
                  id="flexCheckDefault"
                  className="mb-4"
                  label="Remember password"
                />

                <MDBBtn type="submit" name="login" size="lg">
                  Login
                </MDBBtn>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
