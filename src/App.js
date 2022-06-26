import React, {useEffect} from "react";
import Home from "./components/home"
import chatbotScriptInvoker from './components/chatbot/chatbotScript';
import "cloudinary-video-player/dist/cld-video-player.min.css";

function App() {
  useEffect(() => {
    chatbotScriptInvoker();
  }, []);
  return (
    <Home></Home>
  );
}

export default App;
