import { useState } from "react";
import { useNavigate } from "react-router";
import loginImage from "../assets/images/login-image-small.jpg";
import Button from "../components/Button";

const Login = () => {
  const [data, setData] = useState({
    usermail: "",
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

  function handleLogin(usermail, password) {
    return new Promise((resolve, reject) => {
      //Simuliamo il ritardo nell'interrogazione del server affinchè recuperi i dati dell'utente dal database:
      setTimeout(() => {
        if (usermail !== "" && password !== "") {
          //simuliamo i dati ricevuti dal server:
          const userData = {
            usermail: usermail,
            password: password,
            role: "User",
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

    // Check if email or password already exists in localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    const dataTaken = users.some(
      (user) =>
        user.usermail === data.usermail && user.password === data.password
    );

    if (!dataTaken) {
      console.log("Email or Password wrong. Please correct.");
      alert("Email or Password wrong. Please correct.");
      return;
    }

    console.log(data);
    //Al submit del form, chiamiamo il metodo handleLogin, il quale restituisce userData:
    handleLogin(data.usermail, data.password)
      .then((response) => {
        console.log(response);

        //Trasformiamo i dati utente ricevuti in una stringa prima di salvarlo nel session storage:
        const responseToString = JSON.stringify(response.data);
        sessionStorage.setItem(data.usermail, responseToString);

        
     /*    //prova controllo
        localStorage.setItem(data.usermail, responseToString); */

        //Salviamo il token ricevuto nel local storage:
        localStorage.setItem("Token", response.token);
        navigate("/profile");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="w-full h-full bg-white-A700_01">
      <div className="h-full flex flex-col items-center bg-login-bg bg-cover bg-bottom md:bg-none justify-between gap-5 md:flex-row-reverse">
        <div className="flex w-full flex-col gap-8 md:w-[48%]">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-[31px] self-stretch m-4"
          >
            <h1 className="text-white text-center font-semibold drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] md:drop-shadow-none md:text-2xl md:text-start md:text-[#111827]">
              Log in to start your journey
            </h1>
            <div className="flex flex-col items-start gap-3.5">
              <label
                htmlFor="usermail"
                className="text-white font-semibold drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] md:drop-shadow-none md:text-[#111827]"
              >
                E-mail
              </label>
              <input
                className="w-full p-[10px] border border-gray-300 rounded-3xl"
                type="email"
                name="usermail"
                id="usermail"
                value={data.usermail}
                onChange={handleChange}
                required
                autoComplete="email"
              />
            </div>
            <div className="flex flex-col items-start gap-3.5">
              <label
                htmlFor="password"
                className="text-white font-semibold drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] md:drop-shadow-none md:text-[#111827]"
              >
                Password
              </label>
              <input
                className="w-full p-[10px] border border-gray-300 rounded-3xl"
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                required
                autoComplete="current-password"
              />
            </div>
            <Button innerText="Log In" className="self-center md:self-end" />
          </form>
        </div>
        <div className="h-full w-full gap-[47px] hidden md:block md:w-[48%] lg:w-1/2">
          <img
            alt=""
            src={loginImage}
            className="inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
