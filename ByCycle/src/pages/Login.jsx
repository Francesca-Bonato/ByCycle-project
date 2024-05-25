import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import loginImage from "../assets/images/login-image-small.jpg";
import Button from "../components/Button";

const Login = () => {
  const [data, setData] = useState({
    username: "",
    usermail: "",
    password: "",
  });

  const navigate = useNavigate();
  const location = useLocation();

  function handleChange(e) {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Check if user already exists in localStorage
    let userLogged = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email or password already exists in localStorage
    const dataTaken = userLogged.some(
      (user) =>
        user.usermail === data.usermail && user.password === data.password
    );

    if (!dataTaken) {
      console.log("Email or password is incorrect. Please correct.");
      alert("Email or password is incorrect. Please correct.");
      return; // Interrompi la procedura di login
    }

    // Simulate user login
    let userRegistered = userLogged.find(
      (user) =>
        user.usermail === data.usermail && user.password === data.password
    );

    if (userRegistered) {
      let newArr = [];
      // Salva solo i dati necessari in sessionStorage
      newArr.push({
        username: userRegistered.username,
        usermail: userRegistered.usermail,
        password: userRegistered.password,
      });

      sessionStorage.setItem("userLogged", JSON.stringify(newArr));
      alert(`User ${userRegistered.username} logged in successfully`);

      if (location.pathname === "/login") {
        navigate("/profile");
      }

      window.location.reload();
    }
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
