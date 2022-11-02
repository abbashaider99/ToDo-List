import './App.css';
import ToDoList from './Components/ToDoList';
import React, {useState} from 'react';


const App = () =>{

    const [inputList, setInputList] = useState("");
    const [list, setList] = useState([]);

    const listOfItems = () =>{        
        setList((oldlist) =>{
            return [...oldlist, inputList];
        });   
        setInputList("");    
    }

    const itemEvent = (event) =>{
        setInputList(event.target.value);
    }

    const deleteItems = (id) =>{
        console.log("Deleted"+id);
        setList((oldItems)=>{
            return oldItems.filter((arrElem, index)=>{
                return index !==id;
            });
        });
    };
    


    return (
        <div className='main-div'>
            <div className="wrapper">
            <h2>ToDo list</h2>
            <p>Developed by Abbas Haider</p>
                <div className="input-form">
                <input type="text" id='todo-input' onChange={itemEvent} value={inputList}  placeholder='Add an Item' />
                <button id='todo-add' onClick={listOfItems}>+</button>
                </div>
                <div className="items-list text-start mt-4">
                    <ul>
                   { list.map((listval, indexVal) =>{
                        return <ToDoList key={indexVal} id={indexVal} onSelect={deleteItems} items = {listval} />
                    })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default App;