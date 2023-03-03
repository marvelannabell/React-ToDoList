import Loading from "./components/Loading";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";
import { useEffect, useState } from 'react';



function App() {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3030/jsonstore/todos`)
      .then(res => res.json())
      .then(data => {
        setTodos(Object.values(data))
        console.log(Object.values(data));
      })
  }, []);
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
            <button className="btn">+ Add new Todo</button>
          </div>

          <div className="table-wrapper">


            {/* <Loading /> */}

            <TodoList todos={todos} toggleTodoStatus={toggleTodoStatus} />

          </div>
        </section>
      </main>


      <Footer />
    </div>
  );
}

export default App;
