import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Chat from './Chat';

function App() {
  const [sessionId, setSessionId] = useState(null);

  useEffect(() => {
    console.log('Loaded... setting up the session id');
    if (sessionId == null) {
      setSessionId(uuidv4());
    }
  },[sessionId])
  return (
    <div className="App">
      <h3>A sample home page - This chat bot can be integrated with any application, for demonstration we are using the basic homepage and a chatbot window. This chatbot is integrated with google's DialogFlow a NLP supported chat bot framework.</h3>
      <p>Current session ID: {sessionId}</p>
      <h2>Click on the bottom left icon on the screen to open the chatbot interaction.</h2>
      <Chat />
    </div>
  );
}

export default App;
