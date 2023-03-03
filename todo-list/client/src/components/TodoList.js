import { TodoItem } from "./TodoItem";

export default function TodoList({
    todos,
    toggleTodoStatus,
    onTodoDel,
}) {

    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="table-header-task">Task</th>
                    <th className="table-header-status">Status</th>
                    <th className="table-header-action">Action</th>
                    <th className="table-header-action">Delete Task</th>
                </tr>
            </thead>
            <tbody>
                {todos.map(x =><TodoItem key={x._id} {...x} toggleTodoStatus={toggleTodoStatus} onTodoDel={onTodoDel} />)};




            </tbody>
        </table>
    )
}