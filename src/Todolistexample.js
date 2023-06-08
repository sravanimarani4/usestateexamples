import React, { useState } from 'react';

function TodoListEx() {
    // const eachItem = [
    //     {
    //        text:"sravani",
    //        id:1
    //     },
    //     {
    //       text:"maragani",
    //       id:2
    //     }
    // ];

    // const [list,setList] = useState(eachItem);
    const [list,setList] = useState([]);
    // const [editingItem,setEditingItem] = useState({
    //     id:"",
    //     isEditing:false, 
    //    });


    const [editingItem,setEditingItem] = useState(false);
       



    const [message,setMessage] = useState({
        text:"",
        id:"" 
    });

    const changeText = (e)=> {
      setMessage({
        ...message,
        text:e.target.value
      });
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = {
            text:message.text,
            id:new Date().getTime().toString()
        }
        setList([
            ...list,
             newTodo
        ]);
        setMessage({
            text:"",
            id:"",
        })
    }
  
    const handleDelete = (id) => {
        // let newTodos = list.filter((eachItem) => {
        //     return eachItem.id !== id
        // });
        let newTodos = list.filter ((eachItem) => eachItem.id !== id)
        setList(newTodos);
    }

   const handleEdit = (id) => {
    console.log(id);
    setEditingItem({
        ...editingItem,
        id:id,
        isEditing:true,
    });
    let editableItems = list.find((eachItem) => eachItem.id === id)
    setMessage({
        ...message,
        id:editableItems.id,
        text:editableItems.text,
    });
   };

   const hanldeEditing = (e) => {
    e.preventDefault();
    const EditbuttonTodo = list.map((eachItem) => {
        if(eachItem.id === editingItem.id){
         return{
             text:message.text,
            id:editingItem.id,        
        };
        }else{
            return eachItem;
        }
    })
    setList(EditbuttonTodo);
    setMessage({
        text:"",
        id:""
    })

   }

  return (
    <div>
    <form>
        <input
        id='enter the text'
        name='text'
        placeholder='enter the text'
        value={message.text}
        onChange={changeText}
        />
        {editingItem == true? 
         {/* {editingItem.isEditing? */}
        (<button onClick = {hanldeEditing}>Edit</button>):
        (<button onClick={handleSubmit}>Add</button>)}
       
        </form>
        <hr/>{
           list.length === 0 && <h4>There is no items in the list</h4>
        }
        <ul>
            {
                list.map((item) => {
                    const {text,id} = item;
                    return(
                        <li key={id}>
                            <h1>{text}</h1>
                            <button onClick={() => handleEdit(id)}>Edit</button>
                            <button onClick={() => handleDelete(id)}>Delete</button>
                        </li>
                   
                    )
                })
            }
        </ul>
    
    </div>
  )
}

export default TodoListEx;