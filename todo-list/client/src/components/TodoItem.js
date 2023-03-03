export const TodoItem=({
    _id,
    text,
    isCompleted ,
    toggleTodoStatus,
    onTodoDel,
})=>{
return(
    <tr  className={`todo ${isCompleted ? 'is-completed' : ''}`.trim()}>
        <td>{text}</td>
        <td>{isCompleted? 'Complete':'Not Complete'}</td>
        <td className="todo-action">
            <button className="btn todo-btn" onClick={()=>toggleTodoStatus(_id)}>Change status</button>
        </td>
        <td className="todo-action">
            <button className="btn todo-btn" onClick={()=>onTodoDel(_id)} >Delete</button>
        </td>
    </tr>
)
}