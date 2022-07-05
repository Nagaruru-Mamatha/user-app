import React, { useState } from "react";
import "./App.css";
import Modal from "./Components/Modal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
        <div className="chatPopupHeader">
        <h4 style={{color:"white"}}>Chat with Us</h4>
      <button className="showChatbtn"
       
        onClick={() => {
          setModalOpen(true);
        }}
      >
       +
      </button>
       
        </div>
   

      <Modal  setOpenModal={setModalOpen} />
    </div>
  );
}

export default App;