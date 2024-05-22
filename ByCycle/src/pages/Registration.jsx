import { useState } from "react";
import { useNavigate } from "react-router";
import registerImage from "../assets/images/registration-image.jpg";
import Button from "../components/Button";
import { users } from "/src/users";

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

  function handleRegister(
    username,
    birthDate,
    usermail,
    password,
    passwordConf
  ) {
    return new Promise((resolve, reject) => {
      //Simuliamo il ritardo nell'interrogazione del server affinchè recuperi i dati dell'utente dal database:
      setTimeout(() => {
        if (
          username !== "" &&
          birthDate !== "" &&
          usermail !== "" &&
          password !== "" &&
          passwordConf !== ""
        ) {
          const realData = {
            username: username,
            birthdate: birthDate,
            usermail: usermail,
            password: password,
            role: "User",
          };

          const token =
            "LBJimGWT7oxHtJfVFez4dbKyL3eYcKTJh2FrpwlIAQtqYysLQHziFqEVz676IeoX";
          //I dati dell'utente vengono restituiti dal metodo handleRegister:
          resolve({
            data: realData,
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

    //controlla password se corrisponde
    if (data.password !== data.passwordConf) {
      console.log("Password doesn't match.Please correct");
      alert("Password doesn't match. Please correct");
      // Aggiungi qui la logica per visualizzare un messaggio di errore all'utente
      return; // Interrompi la procedura di registrazione
    }



    /////////////////
    /*  LOGICA CON LOCALSTORAGE */

    /*   // Controlla se il nome utente o l'email sono già presenti nel file Users
   
    const isUsernameTaken = users.some(
      (user) => user.username === data.username
    );
    const isEmailTaken = users.some((user) => user.usermail === data.usermail);

    if (isUsernameTaken || isEmailTaken) {
      console.log("Username or email already in use. Please correct.");
      alert("Username or email already in use. Please correct.");
      return; // Interrompi la procedura di registrazione
    } */

    //////////////////
    


    /////////////
    /* LOGICA CON FILE USERS.JS */
    
    // Controlla se email o username sono già presenti nell'array `users`
    const isEmailTaken = users.some((user) => user.usermail === data.usermail);
    const isNameTaken = users.some((user) => user.username === data.username);

    if (isEmailTaken || isNameTaken) {
      console.log(
        "Email or Username already in use. Please register with different datas."
      );
      alert(
        "Email or Username already in use. Please register with different datas."
      );
      return; // Interrompi la procedura di registrazione
    }

    // Aggiungi i dati dell'utente all'array `users`
    users.push(data);
    console.log("User registered successfully");
    alert("User registered successfully");
    navigate("/profile");

    //////////////

    console.log(data);
    //Al submit del form, chiamiamo il metodo handleRegister, il quale restituisce userData:
    handleRegister(
      data.username,
      data.birthDate,
      data.usermail,
      data.password,
      data.passwordConf
    )
      .then((response) => {
        console.log(response);
        //Trasformiamo i dati utente ricevuti in una stringa prima di salvarlo nel local storage:
        const responseToString = JSON.stringify(response.data);
        localStorage.setItem(data.username, responseToString);
        localeStorege.setItem("user", data.username);
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
            alt=""
            src={registerImage}
            className="inset-0 w-full h-full overflow-hidden object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Registration;
