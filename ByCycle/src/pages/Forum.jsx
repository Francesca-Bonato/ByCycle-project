
import { useState } from 'react';

const Forum = () => {
  const [topics, setTopics] = useState([
    {
      id: 1,
      title: 'Discussione su React Hooks',
      description: 'Discussione su come utilizzare useState e useEffect.',
      author: {
        name: 'Mario Rossi',
        profilePic: 'https://example.com/profile-pic.jpg',
      },
      replies: [
        {
          id: 1,
          text: 'Grazie per la discussione! Molto utile.',
          author: {
            name: 'Luigi Verdi',
            profilePic: 'https://example.com/profile-pic-2.jpg',
          },
        },
        // Puoi aggiungere altri commenti qui
      ],
    },
    // Puoi aggiungere altri argomenti qui
  ]);

  const [newTopicTitle, setNewTopicTitle] = useState('');
  const [newTopicDescription, setNewTopicDescription] = useState('');
  const [replyText, setReplyText] = useState('');
  const [activeTopicId, setActiveTopicId] = useState(null); // ID dell'argomento attivo per rispondere

  const handleAddTopic = () => {
    if (newTopicTitle.trim() === '' || newTopicDescription.trim() === '') {
      alert('Inserisci un titolo e una descrizione per il nuovo argomento.');
      return;
    }

    const newTopic = {
      id: topics.length + 1,
      title: newTopicTitle,
      description: newTopicDescription,
      author: {
        name: 'Nome Utente',
        profilePic: 'https://example.com/default-profile-pic.jpg',
      },
      replies: [],
    };

    setTopics([...topics, newTopic]);
    setNewTopicTitle('');
    setNewTopicDescription('');
  };

  const handleAddReply = (topicId) => {
    if (replyText.trim() === '') {
      alert('Inserisci una risposta.');
      return;
    }

    const updatedTopics = topics.map((topic) => {
      if (topic.id === topicId) {
        const newReply = {
          id: topic.replies.length + 1,
          text: replyText,
          author: {
            name: 'Nome Utente',
            profilePic: 'https://example.com/default-profile-pic.jpg',
          },
        };
        return { ...topic, replies: [...topic.replies, newReply] };
      }
      return topic;
    });

    setTopics(updatedTopics);
    setReplyText('');
    setActiveTopicId(null); // Resetta l'argomento attivo dopo aver inviato la risposta
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Forum di Discussione</h1>

      {/* Form per aggiungere un nuovo argomento */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddTopic();
        }}
        className="mb-4"
      >
        <input
          type="text"
          placeholder="Titolo"
          value={newTopicTitle}
          onChange={(e) => setNewTopicTitle(e.target.value)}
          className="w-full border p-2 mb-2"
        />
        <textarea
          placeholder="Descrizione"
          value={newTopicDescription}
          onChange={(e) => setNewTopicDescription(e.target.value)}
          className="w-full border p-2 mb-2"
        />
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
          <h3 className="text-xl font-semibold mb-2">{topic.title}</h3>
          <p className="text-gray-600 mb-2">{topic.description}</p>
          <p className="text-sm text-gray-500">Creato da: {topic.author.name}</p>
          
          {/* Form per aggiungere una risposta */}
          {activeTopicId === topic.id && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAddReply(topic.id);
              }}
              className="mb-2"
            >
              <textarea
                placeholder="Scrivi una risposta..."
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                className="w-full border p-2 mb-2"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Invia Risposta
              </button>
            </form>
          )}

          {/* Pulsante per visualizzare i commenti */}
          <button
            onClick={() => setActiveTopicId(topic.id)}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-1 px-2 rounded mt-2"
          >
            {activeTopicId === topic.id ? 'Nascondi Commenti' : 'Visualizza Commenti'}
          </button>

          {/* Elenco delle risposte */}
          {activeTopicId === topic.id && topic.replies.length > 0 && (
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Risposte:</h4>
              {topic.replies.map((reply) => (
                <div key={reply.id} className="border p-2 rounded">
                  <p>{reply.text}</p>
                  <p className="text-sm text-gray-500">Da: {reply.author.name}</p>
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

