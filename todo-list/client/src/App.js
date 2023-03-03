import Loading from "./components/Loading";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";
import { useEffect, useState } from 'react';



function App() {

  const [todos, setTodos] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(`http://localhost:3030/jsonstore/todos`)
      .then(res => res.json())
      .then(data => {
        setTodos(Object.values(data))
        setIsLoading(false)
        // console.log(Object.values(data));
      })
  }, []);

  const onTodoAdd = () => {
    const newId = Number(todos.length + 1);
    console.log(newId);
    const text = prompt(`Task name:`)
    const newTask = { _id: `todo_${newId}`, text, isCompleted: false }
    setTodos(state => [newTask, ...state])
  };

  const onTodoDel = (id) => {
    setTodos(state => state.filter(x => x._id !== id))
  }

  const toggleTodoStatus = (id) => {
    setTodos(state => state.map(x => x._id === id ? ({ ...x, isCompleted: !x.isCompleted }) : x))
  }

  return (
    <div>
      <Header />


      <main className="main">


        <section className="todo-list-container">
          <h1>Todo List</h1>

          <div className="add-btn-container">
            <button className="btn" onClick={onTodoAdd}>+ Add new Todo</button>
          </div>

          <div className="table-wrapper">


            {/* <Loading /> */}
            {isLoading ?
              <Loading />
              : <TodoList todos={todos} toggleTodoStatus={toggleTodoStatus} onTodoDel={onTodoDel} />
              }



          </div>
        </section>
      </main>


      <Footer />
    </div>
  );
}

export default App;
