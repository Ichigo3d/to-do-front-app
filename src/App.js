import axios from "axios";
import './App.css';
import {useEffect, useState} from "react";
import CardList from "./CardList";
import InputData from "./InputData";

function App() {
    const[title, setTitle] = useState("");
    const[status, setStatus] = useState(false);
    const[cardList, setCardList] = useState([]);



  function createCard(title, status){
    axios.post("https://to-do-app-server-node.herokuapp.com/", {
      title,
      status
    }).then(() => getCards())
        .catch(error => console.log(error));
  }
  function getCards(){
        axios.get("https://to-do-app-server-node.herokuapp.com/")
            .then(res => setCardList(res.data))
            .catch(error => console.log(error));
    }
  function deleteCard(id) {
    axios.delete(`https://to-do-app-server-node.herokuapp.com/${id}`)
        .then((res) => {
          console.log("Card deleted");
          getCards()})
        .catch(error => console.log(error));
  }
    function deleteAllCards() {
        axios.delete("https://to-do-app-server-node.herokuapp.com/")
            .then((res) => {
                console.log("all cards deleted")
                getCards()})
            .catch(error => console.log(error));
    }
  function updateCardTitle(id, title) {
    axios.patch(`https://to-do-app-server-node.herokuapp.com/${id}`, {title})
        .then((res) => {
          console.log(res);
          getCards();
        })
        .catch(error => console.log(error));
  }
    function updateCardStatus(id, status) {
        axios.patch(`https://to-do-app-server-node.herokuapp.com/${id}`, {status})
            .then((res) => {
                console.log(res.data.status);
                getCards();
            })
            .catch(error => console.log(error));
    }
    useEffect(() => {
        getCards();
    }, []);

  return (
    <div className="App">
        <h3>To Do application</h3>
      <InputData deleteAllCards={deleteAllCards} inputTitle={setTitle} status={status} title={title}  createCard={createCard}/>
      <CardList cardList={cardList} deleteCardById={deleteCard} updateCardStatus={updateCardStatus} updateCardTitle={updateCardTitle}/>
    </div>
  );
}

export default App;
