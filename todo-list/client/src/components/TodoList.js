export default function TodoList({
    todos,
    toggleTodoStatus,
}) {
const classes=['todo']
    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="table-header-task">Task</th>
                    <th className="table-header-status">Status</th>
                    <th className="table-header-action">Action</th>
                </tr>
            </thead>
            <tbody>
                {todos.map(x =>(
                <tr key={x._id} className={`todo ${x.isCompleted ? 'is-completed' : ''}`.trim()}>
                    <td>{x.text}</td>
                    <td>{x.isCompleted? 'Complete':'Not Complete'}</td>
                    <td className="todo-action">
                        <button className="btn todo-btn" onClick={()=>toggleTodoStatus(x._id)}>Change status</button>
                    </td>
                </tr>

                ))};




            </tbody>
        </table>
    )
}