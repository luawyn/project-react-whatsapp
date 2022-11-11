import { Main } from "./appStyled";
import ChatBox from "./components/chatBox/ChatBox";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { useState } from "react";

function App() {
  const [messages, setMessages] = useState([]);
  const [person, setPerson] = useState("me");

  return (
    <Main>
      <Header person={person} setPerson={setPerson} />
      <ChatBox messages={messages} setMessages={setMessages} />
      <Footer person={person} messages={messages} setMessages={setMessages} />
    </Main>
  );
}

export default App;
