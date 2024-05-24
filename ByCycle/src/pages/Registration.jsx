import { useState } from "react";
import { useNavigate } from "react-router";
import registerImage from "../assets/images/registration-image.jpg";
import Button from "../components/Button";

function Registration() {
  const [data, setData] = useState({
    username: "",
    birthDate: "",
    usermail: "",
    password: "",
    passwordConf: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }

  // Function to handle click event and scroll to the top of the page
  function handleTopPage() {
    window.scrollTo({ top: 0 });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Controllo se la data di nascita è maggiore della data odierna
    const inputDate = new Date(data.birthDate);
    const today = new Date();

    if (inputDate >= today) {
      console.log("La data di nascita deve essere precedente a oggi.");
      alert("La data di nascita deve essere precedente a oggi.");
      return;
    }

    //controlla password se corrisponde
    if (data.password !== data.passwordConf) {
      console.log("Password doesn't match.Please correct");
      alert("Password doesn't match. Please correct");
      return; // Interrompi la procedura di registrazione
    }

    // Check if username or email already exists in localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];
    const isUsernameTaken = users.some(
      (user) => user.username === data.username
    );
    const isEmailTaken = users.some((user) => user.usermail === data.usermail);

    if (isUsernameTaken || isEmailTaken) {
      console.log("Username or email already in use. Please correct.");
      alert("Username or email already in use. Please correct.");
      return;
    }

    // Simulate user registration
    users.push({
      username: data.username,
      birthdate: data.birthDate,
      usermail: data.usermail,
      password: data.password,
    });

    localStorage.setItem("users", JSON.stringify(users));
    alert(`User ${data.username} registered successfully`);
    navigate("/");
    handleTopPage();

    window.location.reload();
  }

  return (
    <div className="w-full h-full bg-white-A700_01">
      <div className="h-full flex flex-col items-center justify-between gap-5 md:flex-row-reverse">
        <div className="flex w-full flex-col gap-8 bg-register-bg bg-cover md:bg-none md:w-[48%]">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-[31px] self-stretch p-[31px] lg:p-0 lg:px-10"
          >
            <h1 className="text-white text-center font-semibold drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] md:drop-shadow-none md:text-2xl md:text-start md:text-[#111827]">
              Register to our community
            </h1>
            <div className="flex flex-col items-start gap-3.5 ">
              <label
                htmlFor="username"
                className="text-white font-semibold drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] md:drop-shadow-none md:text-[#111827]"
              >
                Username
              </label>
              <input
                className="w-full p-[10px] border border-gray-300 rounded-3xl"
                type="text"
                name="username"
                id="username"
                value={data.username}
                onChange={handleChange}
                required
                autoComplete="on"
              />
            </div>
            <div className="flex flex-col items-start gap-3.5">
              <label
                htmlFor="birthDate"
                className="text-white font-semibold drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] md:drop-shadow-none md:text-[#111827]"
              >
                Birth Date
              </label>
              <input
                className="w-full p-[10px] border border-gray-300 rounded-3xl"
                type="date"
                name="birthDate"
                id="birthDate"
                value={data.birthDate}
                onChange={handleChange}
                required
              />
            </div>
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
                id="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col items-start gap-3.5">
              <label
                htmlFor="passwordConf"
                className="text-white font-semibold drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] md:drop-shadow-none md:text-[#111827]"
              >
                Confirm Password
              </label>
              <input
                className="w-full p-[10px] border border-gray-300 rounded-3xl"
                type="password"
                id="passwordConf"
                name="passwordConf"
                value={data.passwordConf}
                onChange={handleChange}
                required
              />
            </div>
            <Button innerText="Submit" className="self-center md:self-end" />
          </form>
        </div>
        <div className="h-screen w-full gap-[47px] hidden md:w-[48%] md:block lg:w-1/2">
          <img
            alt="Registration"
            src={registerImage}
            className="inset-0 w-full h-full overflow-hidden object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Registration;
