import React, {useEffect} from "react";
import Home from "./components/home"
import chatbotScriptInvoker from './components/chatbot/chatbotScript';

function App() {
  useEffect(() => {
    chatbotScriptInvoker();
  }, []);
  return (
    <Home></Home>
  );
}

export default App;
