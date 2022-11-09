import { Main } from "./appStyled";
import ChatBox from "./components/chatBox/ChatBox";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <Main>
      <Header />
      <ChatBox />
      <Footer />
    </Main>
  );
}

export default App;
