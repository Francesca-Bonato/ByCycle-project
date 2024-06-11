import { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router";
import loginImage from "../assets/images/login-image-small.jpg";
import Button from "../components/Button";

const Login = () => {
  const [data, setData] = useState({
    usermail: "",
    password: "",
  });

  const navigate = useNavigate();
  const location = useLocation();

  // Crea un riferimento a un elemento HTML nel DOM
  const [formCompleted, setFormCompleted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Controlla se tutti i campi sono stati compilati
    const allFieldsCompleted = Object.values({
      ...data,
      [name]: value,
    }).every((field) => field.trim() !== "");
    setFormCompleted(allFieldsCompleted);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (data.usermail !== "" && data.password !== "") {
      try {
        const sendData = {
          usermail: data.usermail,
          password: data.password,
        };
        console.log("credenziali corrette");

        const response = await axios.post(
          "http://localhost:4000/login",
          sendData
        );
        console.log(response.data.user);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("token", response.data.token);

        alert(`User ${response.data.user.username} logged in successfully`);
        
        if (location.pathname === "/login") {
          navigate("/profile");
        }

        window.location.reload();
        return;
      } catch (error) {
        console.error(error);
        alert(error.response.data.msg);
      }
    } else {
      console.log("Email or password fields are empty. Please correct.");
      alert("Insert email or password");
    }
  }

  // const handleBlur = () => {
  //   const formFields = Array.from(formRef.current.elements);
  //   const allFieldsCompleted = formFields.every(
  //     (field) => field.value.trim() !== ""
  //   );
  //   setFormCompleted(allFieldsCompleted);
  // };

  return (
    <div className="w-full h-full bg-white-A700_01">
      <div className="h-full flex flex-col items-center bg-login-bg bg-cover bg-bottom md:bg-none justify-between gap-5 md:flex-row-reverse">
        <div className="flex w-full flex-col gap-8 md:w-[48%]">
          <form
            onSubmit={handleSubmit}
            //onBlur={handleBlur}
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
                autoFocus
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
            <Button
              innerText="Log In"
              className="self-center md:self-end"
              disabled={!formCompleted}
            />
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
