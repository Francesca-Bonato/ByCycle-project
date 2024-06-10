import { useState } from "react";
import { useNavigate } from "react-router";
import registerImage from "../assets/images/registration-image.jpg";
import Button from "../components/Button";
import axios from "axios";

function Registration() {
  // Hook per gestire la navigazione
  const navigate = useNavigate();

  // Stato per tracciare se il form è stato completato
  const [formCompleted, setFormCompleted] = useState(false);
  // Stato per memorizzare i dati del form
  const [data, setData] = useState({
    username: "",
    birthDate: "",
    usermail: "",
    password: "",
    passwordConf: "",
  });

  console.log(data);
  // Funzione per gestire i cambiamenti nei campi del form
  function handleChange(e) {
    const { name, value } = e.target;

    // Aggiorna i dati del form nello stato
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Controlla se tutti i campi sono stati compilati
    const allFieldsCompleted = Object.values(data).every(
      (field) => field.trim() !== ""
    );
    setFormCompleted(allFieldsCompleted);
  }

  // Funzione per gestire l'invio del form
  async function handleSubmit(e) {
    e.preventDefault();

    /*  CONTROLLO DATI  */
    // Controllo se la data di nascita è successiva alla data odierna
    const inputDate = new Date(data.birthDate);
    const today = new Date();

    if (inputDate >= today) {
      console.log(
        "The date of birth cannot be today or a future date. Please enter a valid birth date."
      );
      alert(
        "The date of birth cannot be today or a future date. Please enter a valid birth date."
      );
      return; // Interrompe la procedura di registrazione
    }

    // Controlla se le password inserite corrispondono
    if (data.password !== data.passwordConf) {
      console.log(
        "Passwords do not match. Please make sure both passwords are identical."
      );
      alert(
        "Passwords do not match. Please make sure both passwords are identical."
      );
      return; // Interrompe la procedura di registrazione
    }

    // Controllo se la password soddisfa i requisiti di sicurezza
    const isValidPassword =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[#@$!%*?&.])[A-Za-z\d#@$.!%*?&]{8,}$/.test(
        data.password
      );
    if (!isValidPassword) {
      console.log("Password does not meet the security requirements.");
      alert(
        "Password must be at least 8 characters long and include: one uppercase letter, one lowercase letter, one number, and one special character (#@$!%*?&.)."
      );
      return; // Interrompe la procedura di registrazione
    }

    /* FINE CONTROLLO DATI */

    //----Invio dei dati al back-end ---
    //Controlla se i campi obbligatori sono stati compilati
    if (data.username !== "" && data.usermail !== "" && data.password !== "") {
      try {
        const sendData = {
          username: data.username,
          birthdate: data.birthDate,
          usermail: data.usermail,
          password: data.password,
          passwordConf: data.passwordConf,
        };

        // Invia i dati al server usando una richiesta POST
        const response = await axios.post(
          "http://localhost:4000/register",
          sendData
        );
        // Mostra un messaggio di successo
        alert(
          `Welcome ${response.data.user.username}! Your account has been created. Redirecting to login...`
        );
        console.log(response);
      } catch (error) {
        console.error(error);
        // Mostra un messaggio di errore se l'invio dei dati al server non ha avuto successo
        alert(error.response.data.msg);
        return;
      }
    } else {
      // Mostra un messaggio di errore se i campi non sono compilati
      alert("Please complete all required fields to submit the form.");
      return;
    }

    /*   Simulate user registration
    users.push({
      username: data.username,
      birthdate: data.birthDate,
      usermail: data.usermail,
      password: data.password,
    });

    localStorage.setItem("users", JSON.stringify(users));
    alert(`User ${data.username} registered successfully`); */

    // Naviga alla pagina di login se la registrazione ha successo
    navigate("/login");

    // Ricarica la pagina
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
                autoFocus
                autoComplete="username"
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
                id="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                required
                autoComplete="new-password"
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
                autoComplete="new-password"
              />
            </div>
            <Button
              innerText="Submit"
              className="self-center md:self-end"
              disabled={!formCompleted}
            />
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
