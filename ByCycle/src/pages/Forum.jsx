import { useState } from "react";

// Array iniziale di commenti
let initialDataComment = [
  {
    name: "John Doe",
    date: "April 17, 2023",
    title: "Title simple 1",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium tenetur, suscipit sunt odit similique incidunt modi ratione sapiente, mollitia laudantium debitis molestiae quis voluptate inventore non libero iure eos quibusdam?",
  },
  {
    name: "John Doe",
    date: "April 17, 2023",
    title: "Title simple 2",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium tenetur, suscipit sunt odit similique incidunt modi ratione sapiente, mollitia laudantium debitis molestiae quis voluptate inventore non libero iure eos quibusdam?",
  },
  {
    name: "John Doe",
    date: "April 17, 2023",
    title: "Title simple 3",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium tenetur, suscipit sunt odit similique incidunt modi ratione sapiente, mollitia laudantium debitis molestiae quis voluptate inventore non libero iure eos quibusdam?",
  },
];

// Definizione del componente Forum
function Forum() {
  // Utilizzo dello useState per gestire lo stato dei commenti e del nuovo commento
  const [dataComment, setDataComment] = useState(initialDataComment);
  const [newComment, setNewComment] = useState({
    name: "",
    title: "",
    comment: "",
  });

  // Stato per l'indice del commento in modifica (-1 se nessuna modifica in corso)
  const [editIndex, setEditIndex] = useState(-1);

  // Funzione per gestire il cambio di valore negli input del form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Aggiornamento dello stato del nuovo commento con il valore dell'input corrente
    setNewComment((prevComment) => ({
      ...prevComment,
      [name]: value,
    }));
  };

  // Funzione per gestire l'aggiunta o modifica di un commento
  const handleAddComment = (e) => {
    e.preventDefault();
    // Verifica che i campi name, title e comment siano stati compilati
    if (newComment.name && newComment.title && newComment.comment) {
      // Ottieni la data corrente formattata come stringa
      const currentDate = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      if (editIndex !== -1) {
        // Se è in corso la modifica di un commento esistente
        const updatedComments = dataComment.map((comment, index) =>
          index === editIndex
            ? {
                name: newComment.name,
                date: currentDate,
                title: newComment.title,
                comment: newComment.comment,
              }
            : comment
        );

        // Aggiorna lo stato dei commenti con il commento modificato
        setDataComment(updatedComments);

        // Reset dell'indice di modifica
        setEditIndex(-1);
      } else {
        // Se si sta aggiungendo un nuovo commento
        const updatedComments = [
          {
            name: newComment.name,
            date: currentDate,
            title: newComment.title,
            comment: newComment.comment,
          },
          ...dataComment, // Aggiungi i commenti esistenti dopo il nuovo commento
        ];
        setDataComment(updatedComments); // Aggiorna lo stato dei commenti
      }
      // Reset dello stato del nuovo commento dopo l'aggiunta/modifica
      setNewComment({ name: "", title: "", comment: "" });
    }
  };

  // Funzione per gestire l'eliminazione di un commento
  const handleDelete = (index) => {
    // Filtra i commenti per rimuovere il commento con l'indice specificato
    const updatedComments = dataComment.filter((comment, i) => i !== index);
    // Aggiorna lo stato dei commenti con i commenti filtrati
    setDataComment(updatedComments);
    // Reset dell'indice di modifica se stiamo eliminando il commento attualmente in modifica
    if (index === editIndex) {
      setEditIndex(-1); // Reset dell'indice di modifica
    }
  };

  // Funzione per gestire l'inizio della modifica di un commento esistente
  const handleEdit = (index) => {
    const commentToEdit = dataComment[index];
    // Imposta lo stato del nuovo commento con i dati del commento selezionato per la modifica
    setNewComment({
      name: commentToEdit.name,
      title: commentToEdit.title,
      comment: commentToEdit.comment,
    });
    setEditIndex(index); // Imposta l'indice di modifica
  };

  // Rendering del componente Forum
  return (
    <div>
      <div className="bg-gray-100 p-6">
        <h2 className="text-lg font-bold mb-4">DISCUSSION</h2>
        <div className="flex flex-col space-y-4">

          {/* Sezione del form per aggiungere/modificare un commento */}
          <form
            className="bg-white p-4 rounded-lg shadow-md"
            onSubmit={handleAddComment}
          >

            {/* Titolo del form in base all'azione (aggiunta/modifica) */}
            <h3 className="text-lg font-bold mb-2">
              {editIndex === -1 ? "Add a comment" : "Edit comment"}
            </h3>

            {/* Input per il nome dell'autore del commento */}
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                value={newComment.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
              />
            </div>

            {/* Input per il titolo del commento */}
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="title"
              >
                Title
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                name="title"
                type="text"
                value={newComment.title}
                onChange={handleInputChange}
                placeholder="Enter your title"
              />
            </div>

            {/* Area di testo per il corpo del commento */}
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="comment"
              >
                Comment
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="comment"
                name="comment"
                rows="3"
                value={newComment.comment}
                onChange={handleInputChange}
                placeholder="Enter your comment"
              ></textarea>
            </div>

            {/* Pulsante per inviare il commento o salvare le modifiche */}
            <button
              className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {editIndex === -1 ? "Submit" : "Save Changes"}
            </button>
          </form>

          {/* Sezione per visualizzare i commenti esistenti */}
          {dataComment.map((com, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-bold">{com.name}</h3>
              <p className="text-gray-700 text-sm mb-2">{com.date}</p>
              <span className="font-bold">{com.title}</span>
              <p className="text-gray-700">{com.comment}</p>
              
              {/* Pulsanti per eliminare e modificare il commento */}
              <div className="flex justify-end mt-2">
                {/* Pulsante per eliminare il commento */}
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2 focus:outline-none focus:shadow-outline"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>

                {/* Pulsante per modificare il commento */}
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Esporta il componente Forum
export default Forum;
