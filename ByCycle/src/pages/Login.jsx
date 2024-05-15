import { useState } from "react";
import { useNavigate } from "react-router";
import loginImage from "../assets/images/login-image-small.jpg";
import { Button } from "../components/Button";

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
    <div className="w-full h-screen bg-white-A700_01">
      <div className="h-full flex flex-col items-center justify-between gap-5 md:flex-row">
        
        <div className="flex w-full flex-col gap-8 md:w-[48%] 2xl:text-xl">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-[31px] self-stretch m-4"
          >
             <h1 className=" text-center font-semibold md:text-2xl md:text-start">Log in to start your journey...</h1>
            <div className="flex flex-col items-start gap-3.5">
              <label htmlFor="usermail" className="font-semibold">
                E-mail
              </label>
              <input
                className="w-full p-[10px] border border-gray-300 rounded-3xl"
                type="text"
                name="usermail"
                id="usermail"
                value={data.useremail}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col items-start gap-3.5">
              <label htmlFor="password" className="font-semibold">
                Password
              </label>
              <input
                className="w-full p-[10px] border border-gray-300 rounded-3xl"
                type="text"
                name="password"
                value={data.password}
                onChange={handleChange}
              />
            </div>
            <Button innerText="Log In" className="self-center md:self-end" />
          </form>
        </div>
        <div className="h-full w-full gap-[47px] md:w-[48%] lg:w-1/2">
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
