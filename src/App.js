import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import { useState } from 'react';
import TodosList from './components/TodosList';

const App = () =>  {
  const [input,setInput]=useState("");
  const[todos,setTodos]=useState([]);
  const [editTodo,setEditTodo] =useState(null);

  return (<div className='container'>
     <div className='app-wrapper'>
      <div>
        <Header></Header>
      </div>
      <div>
        <Form
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
        ></Form>
      </div>
      <div>
        <TodosList
        todos={todos}
        setTodos={setTodos}
        setEditTodo={setEditTodo}
        ></TodosList>
      </div>
     </div>
  </div>)
}

export default App;
