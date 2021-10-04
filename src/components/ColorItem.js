const ColorItem = ({ todo, setRefresh }) => {
    
    const deleteTodo = () => {
        fetch("http://localhost:8000/todos/" + todo.id, {
          method: "DELETE",
        }).then(() => {
          console.log('color deleted.')
        });
      };
    // let listItems = todo.listItems;
    let listItemStyle = {
        width: '300px',
        minHeight: '300px',
        backgroundColor: todo.color,
        // color: '#ff571a'
    };
    return (
        
        <div style={listItemStyle}>
                <h1>{todo.color}</h1>
                <h2 className="close" onClick={deleteTodo}>Delete Color</h2>
        </div>
    );
  };
  
  export default ColorItem;