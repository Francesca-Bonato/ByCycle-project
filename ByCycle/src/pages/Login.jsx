import { useState } from "react";
import { useNavigate } from "react-router";
import { Form, Button, Container, Row, Col } from "../bootstrapImports";

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
    <Container fluid className="p-3 my-5">
      <Row>
        <Col col="10" md="6">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            class="img-fluid"
            alt="Phone image"
          />
        </Col>

        <Col col="4" md="6">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                wrapperClass="mb-4"
                label="Email address"
                id="formControlLg"
                type="email"
                size="lg"
                placeholder="Enter email"
                onSubmit={handleSubmit}
              />
              <Form.Text className="text-muted">
                We&apos;ll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                wrapperClass="mb-4"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group
              className="d-flex justify-content-between mx-4 mb-4"
              controlId="formBasicCheckbox"
            >
              <Form.Check
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Remember me"
              />
              <a href="!#">Forgot password?</a>
            </Form.Group>
            <Button className="mb-4 w-100" size="lg">
              Sign In
            </Button>
            <div className="divider d-flex align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0">OR</p>
            </div>

            <button
              className="mb-4 w-100"
              size="lg"
              style={{ backgroundColor: "#3b5998" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
              </svg>
              Continue with facebook
            </button>

            <button
              className="mb-4 w-100"
              size="lg"
              style={{ backgroundColor: "#55acee" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2em"
                height="1.2em"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z"
                />
              </svg>
              Continue with X
            </button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
