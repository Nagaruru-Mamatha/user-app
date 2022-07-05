import React, { useRef, useState } from "react";
import "./Modal.css";

function Modal({ setOpenModal }) {

  const expandDiv = useRef(" ");
  const [modalOpen, setModalOpen] = useState(false);
  const ChatData = [
    { userId: 1, message: "Lorium Ipsum content" },
    { userId: 2, message: "Lorium Ipsum " },
    { userId: 1, message: "Hi Tony How are you" },
    { userId: 2, message: "Yeah Fine harry! what about you ?" },
  ];

  const [inputValue, setInputValue] = useState("");

  const sendMessage=()=>{
    alert(inputValue)
  }
  const OnChangeText=(e)=>{
    setInputValue(e.target.value)
  }
 const OnChangeView =()=>{
  if(modalOpen){
    setModalOpen(!modalOpen)
  
    expandDiv.current.style.height = '56px';

   }else{
    setModalOpen(!modalOpen)
    expandDiv.current.style.height = '450px';
    
  }

  }

  return (
    <div className="modalBackground">
      <div ref={expandDiv} className="modalContainer">
        <div className="modalHeader">
          <div className="titleCloseBtn">
            <button
              style={{ color: "white" }}
              onClick={OnChangeView} >
              {modalOpen?"X":"+"}
            </button>
          </div>
          <div className="title">
            <h3>Chat With Us</h3>
          </div>
        </div>

        <div className="body">
          {ChatData.map((item, index) => {
            return (
              <div>
                {item.userId == 1 ? (
                  <div className="rightChat">
                    <button>{item.message}</button>
                  </div>
                ) : null}
                {item.userId == 2 ? (
                  <div className="leftChat">
                    <button>{item.message}</button>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      

        <div className="footer">
          <textarea type="text" placeholder="enter here" onChange={OnChangeText} />

          <button disabled={inputValue?false:true} style={inputValue?{backgroundColor:'skyblue'}:{backgroundColor:'grey'}} onClick={sendMessage}>{">"}</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
