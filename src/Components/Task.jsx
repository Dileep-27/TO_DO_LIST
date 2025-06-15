import React from 'react'

const Task= ({tl,deleteTask,completeTask})=> {
  return (
    <div><li className="task d-flex justify-content-between" >{tl}
         
          <div className="task-btn">
            <button className="btn btn-sm btn-success" onClick={()=>{completeTask(tl)}}>complete</button>
          <button className="btn btn-sm btn-danger"onClick={()=>{deleteTask(tl)}}>delete</button>
      </div>
        </li></div>
  )
}

export default Task