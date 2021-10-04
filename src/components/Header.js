import { useState } from "react";

const Header = ({setRefresh}) => {
  const [color, setColor] = useState("");

  // fungsi untuk menambah data todo melalui API ketika tombol "Add" di klik
  const addColor = () => {
     
      const newColor = {color}
	  fetch('http://localhost:8000/todos', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newColor)
        }).then(() => {
			// ketika sukses menambah data, reset form dengan mengeset state title menjadi empty string 
            setColor("")
            setRefresh(true)

            setTimeout(() => {
				alert('new color added.')
			}, 500)
            
        });
  }

  return (
    <div id="todo-header" className="header">
      <h2>Coding Test</h2>
	  <input 
		  type="text"
		  value={color}
		  onChange={(e) => setColor(e.target.value)}
	  />
      <span className="add-button" onClick={addColor}>Add</span>
    </div>
  );
};

export default Header;