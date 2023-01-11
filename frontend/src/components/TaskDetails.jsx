import React from 'react'

const TaskDetails = ({task}) => {
  return (
    <div className="task-details">
      <h4>{task.title}</h4>
      <p>{task.createdAt}</p>
    </div>
  )
}

export default TaskDetails