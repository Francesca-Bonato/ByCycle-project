import { useState } from "react";
import { useNavigate } from "react-router";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setData((data) => {
      const name = e.target.name;
      const value = e.target.value;
      return {
        ...data,
        [name]: value,
      };
    });
  }

  function handleLogin(email, password) {
    return new Promise((resolve, reject) => {
      //Simuliamo il ritardo nell'interrogazione del server affinchè recuperi i dati dell'utente dal database:
      setTimeout(() => {
        if (email != "" && password != "") {
          //simuliamo i dati ricevuti dal server:
          const userData = {
            firstname: "Emanuele",
            lastname: "Avitabile",
            ruolo: "Admin",
            email: "emanuele@gmail.com",
          };

          const token =
            "LBJimGWT7oxHtJfVFez4dbKyL3eYcKTJh2FrpwlIAQtqYysLQHziFqEVz676IeoX";
          //I dati dell'utente vengono restituiti dal metodo handleLogin:
          resolve({
            data: userData,
            token: token,
          });
        } else {
          reject(new Error("Credenziali non valide"));
        }
      }, 2000);
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(data);
    //Al submit del form, chiamiamo il metodo handleLogin, il quale restituisce userData:
    handleLogin(data.email, data.password)
      .then((response) => {
        console.log(response);
        //Trasformiamo i dati utente ricevuti in una stringa prima di salvarlo nel local storage:
        const responseToString = JSON.stringify(response.data);
        localStorage.setItem("Utente", responseToString);
        //Salviamo il token ricevuto nel local storage:
        localStorage.setItem("Token", response.token);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <MDBContainer fluid className="p-3 my-5">
      <MDBRow>
        <MDBCol col="10" md="6">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            className="img-fluid"
            alt="Phone image"
          />
        </MDBCol>

        <MDBCol col="4" md="6">
          <form onSubmit={handleSubmit}>
            <MDBInput
              wrapperClass="mb-4"
              label="Email address"
              id="formControlLg"
              type="email"
              size="lg"
              value={data.email}
              onChange={handleChange}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="formControlLg"
              type="password"
              size="lg"
              value={data.password}
              onChange={handleChange}
            />
          </form>

          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckDefault"
              label="Remember me"
            />
            <a href="!#">Forgot password?</a>
          </div>

          <MDBBtn className="mb-4 w-100" size="lg">
            Sign in
          </MDBBtn>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">OR</p>
          </div>

          <MDBBtn
            className="mb-4 w-100"
            size="lg"
            style={{ backgroundColor: "#3b5998" }}
          >
            <MDBIcon fab icon="facebook-f" className="mx-2" />
            Continue with facebook
          </MDBBtn>

          <MDBBtn
            className="mb-4 w-100"
            size="lg"
            style={{ backgroundColor: "#55acee" }}
          >
            <MDBIcon fab icon="twitter" className="mx-2" />
            Continue with twitter
          </MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;
