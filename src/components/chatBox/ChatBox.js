import { MainChatBox, Message } from "./chatBoxStyled";
import tickGreen from "../../assets/tick-green-double.svg";

function ChatBox(props) {
  function DeleteMessage(id) {
    if (window.confirm("Delete this message?")) {
      const deleteMessage = props.messages.filter((message) => {
        return message.idPerson !== id;
      });
      props.setMessages(deleteMessage);
    }
  }

  const ShowComponent = props.messages.map((message, index) => {
    return (
      <Message
        key={index}
        person={message.person}
        onDoubleClick={() => DeleteMessage(message.idPerson)}
      >
        <h1>{message.person}</h1>
        <div>
          <p>{message.message}</p>
          <div>
            <img src={tickGreen} alt="tick icon" />
          </div>
          <p>{message.hours}</p>
        </div>
      </Message>
    );
  });

  return <MainChatBox>{ShowComponent}</MainChatBox>;
}

export default ChatBox;
