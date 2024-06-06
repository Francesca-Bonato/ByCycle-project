import { Fragment, useContext, useState } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useNavigate } from "react-router";
import Button from "./Button";
import { Context } from "../components/LocalData";

export default function ModalWindow({ onCancel }) {
  const [open, setOpen] = useState(true);
  const { user, initialProfile } = useContext(Context);
  const navigate = useNavigate();

  const handleDelete = async () => {
    // Funzione per gestire l'eliminazione dell'utente
    try {
      // Recupera il nome utente dallo storage locale
      const username = user.username;
      // Costruisci la richiesta di eliminazione usando Axios
      const response = await axios.delete(
        "http://localhost:4000/users/unsubscribe",
        { data: { username: username } }
      );
      // Visualizza un messaggio di allerta con il messaggio di risposta dal server
      alert(response.data.msg);
      // Elimina tutti i dati dallo storage locale (potrebbe essere necessario in base all'applicazione)
      localStorage.clear();
      //Faccio un redirect alla homepage
      navigate("/");
      // Ricarica la pagina per riflettere le modifiche
      window.location.reload();
      // Termina la funzione in caso di successo
      return;
    } catch (error) {
      // Gestione degli errori
      // Stampa l'errore nella console per debug
      console.error(error);
      // Visualizza un messaggio di allerta con il messaggio di errore
      alert(error);
    }
  };

  return (
    <Transition show={open}>
      <Dialog className="relative z-[999999]" onClose={setOpen}>
        <TransitionChild
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationTriangleIcon
                        className="h-6 w-6 text-red-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <DialogTitle
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        Deactivate account
                      </DialogTitle>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Are you sure you want to deactivate your account? All
                          of your data will be permanently removed. This action
                          cannot be undone.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full bg-gray-50 px-4 py-3 flex justify-center items-center gap-3 sm:flex-row-reverse sm:px-6">
                  <Button innerText={"Deactivate"} onClick={handleDelete} className="flex items-center justify-center text-center" />

                  <Button
                    innerText={"Cancel"}
                    className={"bg-[#999898ce] text-black text-center mr-2"}
                    onClick={onCancel}
                  />
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
