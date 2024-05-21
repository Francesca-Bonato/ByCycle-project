import { useState } from "react";

// Array iniziale di argomenti del forum (puoi aggiungere più argomenti e commenti)
let databaseComm = [
  {
    id: 1,
    title: "Se la Bici ha una ruota a terra, a Peggiorire?",
    description: "Discussione su come Peggiorire.",
    author: {
      name: "Mario Rossi",
      profilePic: "https://example.com/profile-pic.jpg",
    },
    replies: [
      {
        id: 1,
        text: "L'altro giorno è successo, figghiu mia a terra andai!",
        author: {
          name: "Luigi Verdi",
          profilePic: "https://example.com/profile-pic-2.jpg",
        },
      },
      {
        id: 2,
        text: "A PEGGIORIREEE",
        author: {
          name: "Marco Negri",
          profilePic: "https://example.com/profile-pic-2.jpg",
        },
      },
      // Puoi aggiungere altri commenti qui
    ],
  },
  // Puoi aggiungere altri argomenti qui
];

const Forum = () => {
  // Stati del componente
  const [topics, setTopics] = useState(databaseComm); ////////////////// Lista degli argomenti
  const [newTopicTitle, setNewTopicTitle] = useState(""); ////////////// Titolo del nuovo argomento
  const [newTopicDescription, setNewTopicDescription] = useState(""); // Descrizione del nuovo argomento
  const [replyText, setReplyText] = useState(""); ////////////////////// Testo della risposta
  const [activeTopicId, setActiveTopicId] = useState(null); //////////// ID dell'argomento attivo (con commenti visibili)

  // Funzione per aggiungere un nuovo argomento
  const handleAddTopic = () => {
    if (newTopicTitle.trim() === "" || newTopicDescription.trim() === "") {
      // Alert se il titolo o la descrizione sono vuoti
      alert("Inserisci un titolo e una descrizione per il nuovo argomento.");
      return;
    }

    // Creazione del nuovo argomento
    const newTopic = {
      id: topics.length + 1,
      title: newTopicTitle,
      description: newTopicDescription,
      author: {
        name: "Nome Utente",
        profilePic: "https://example.com/default-profile-pic.jpg",
      },
      replies: [], ////////////////////////////////////////////////////// Array vuoto per le risposte
    };

    // Aggiunta del nuovo argomento alla lista degli argomenti
    setTopics([...topics, newTopic]);

    // Reset dei campi di input dopo l'aggiunta dell'argomento
    setNewTopicTitle("");
    setNewTopicDescription("");
  };

  // Funzione per aggiungere una risposta a un argomento
  const handleAddReply = (topicId) => {
    if (replyText.trim() === "") {
      // Alert se il testo della risposta è vuoto
      alert("Inserisci una risposta.");
      return;
    }

    // Aggiornamento della lista degli argomenti con la nuova risposta
    const updatedTopics = topics.map((topic) =>
      topic.id === topicId
        ? {
            ...topic,
            replies: [
              ...topic.replies,
              {
                id: topic.replies.length + 1,
                text: replyText,
                author: {
                  name: "Nome Utente",
                  profilePic: "https://example.com/default-profile-pic.jpg",
                },
              },
            ],
          }
        : topic
    );

    // Aggiornamento dello stato degli argomenti
    setTopics(updatedTopics);

    // Reset del campo di input della risposta dopo l'aggiunta
    setReplyText("");

    // Mantieni l'argomento attivo dopo aver inviato una risposta
    setActiveTopicId(topicId);
  };

  // Funzione per gestire il click sul pulsante "Visualizza Commenti" o "Nascondi Commenti"
  const toggleComments = (topicId) => {
    if (activeTopicId === topicId) {
      // Se l'argomento è attivo, nascondi i commenti
      setActiveTopicId(null);
    } else {
      // Altrimenti, attiva l'argomento per mostrare i commenti
      setActiveTopicId(topicId);
    }
  };

  // Rendering del componente
  return (
    <div className="container mx-auto p-4">
      {/* Titolo del forum */}
      <h1 className="text-3xl font-bold mb-4">Forum di Discussione</h1>

      {/* Form per aggiungere un nuovo argomento */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddTopic();
        }}
        className="mb-4"
      >
        {/* Input per il titolo del nuovo argomento */}
        <input
          type="text"
          placeholder="Titolo"
          value={newTopicTitle}
          onChange={(e) => setNewTopicTitle(e.target.value)}
          className="w-full border p-2 mb-2"
        />
        {/* Area di testo per la descrizione del nuovo argomento */}
        <textarea
          placeholder="Descrizione"
          value={newTopicDescription}
          onChange={(e) => setNewTopicDescription(e.target.value)}
          className="w-full border p-2 mb-2"
        />
        {/* Pulsante per aggiungere il nuovo argomento */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Aggiungi Nuovo Argomento
        </button>
      </form>

      {/* Lista degli argomenti */}
      {topics.map((topic) => (
        <div key={topic.id} className="border p-4 mb-4 rounded-lg">
          {/* Titolo dell'argomento */}
          <h3 className="text-xl font-semibold mb-2">{topic.title}</h3>
          {/* Descrizione dell'argomento */}
          <p className="text-gray-600 mb-2">{topic.description}</p>
          {/* Autore dell'argomento */}
          <p className="text-sm text-gray-500">
            Creato da: {topic.author.name}
          </p>

          {/* Form per aggiungere una risposta all'argomento */}
          {activeTopicId === topic.id && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAddReply(topic.id);
              }}
              className="mb-2"
            >
              {/* Input per la risposta */}
              <textarea
                placeholder="Scrivi una risposta..."
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                className="w-full border p-2 mb-2"
              />
              {/* Pulsante per inviare la risposta */}
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Invia Risposta
              </button>
            </form>
          )}

          {/* Pulsante per visualizzare o nascondere i commenti */}

          <button
            onClick={() => toggleComments(topic.id)}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-1 px-2 rounded mt-2"
          >
            {activeTopicId === topic.id
              ? "Nascondi Commenti"
              : "Visualizza Commenti"}
          </button>

          {/* Sezione per mostrare i commenti se l'argomento è attivo e ha commenti */}
          {activeTopicId === topic.id && topic.replies.length > 0 && (
            <div className="mt-4">
              {/* Titolo della sezione dei commenti */}
              <h4 className="font-semibold mb-2">Risposte:</h4>
              {/* Lista dei commenti */}
              {topic.replies.map((reply) => (
                <div key={reply.id} className="border p-2 rounded">
                  {/* Testo del commento */}
                  <p>{reply.text}</p>
                  {/* Autore del commento */}
                  <p className="text-sm text-gray-500">
                    Da: {reply.author.name}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Forum;
