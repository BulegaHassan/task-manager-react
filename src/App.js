import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

const handleSubmit = (e)=> {
  e.preventDefault()
  if(!name){
    //display alert
  }
  else if(name && isEditing){
    // deal with edit
  }
  else {
    // show alert
    const newItem = {id: uuidv4(),title:name}
    setList([...list,newItem])
    setName('')
  }
}

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert/>}
        <h3>task manager</h3>
        <div className="form-control">
          <input type="text" className="grocery" placeholder="e.g wash clothes" value={name} onChange={(e)=> setName(e.target.value)} />
          <button className="submit-btn">
            {isEditing?'edit':'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (

      <div className="grocery-contain">
      <List items={list}/>
      <button className="clear-btn">clear items</button>
      </div>
      )}
    </section>
  )
}

export default App;
