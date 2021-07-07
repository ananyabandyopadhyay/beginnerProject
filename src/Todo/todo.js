import React, { useEffect, useState } from 'react';
import "./style.css"
function App() {
    const [task, setTask] = useState("")
    const [taskNo, SetTaskNo] = useState ("")
    const [addedTask, setAddedTask] = useState("")
    const [taskItem, setTaskItem] = useState([])

    const deleteTask = (e) => {
      const index = taskNo
      taskItem.splice(index,1)
      console.log(taskItem)
      setTaskItem([...taskItem])
    }
    const editTask = (e) => {
      const index = taskNo
      taskItem[index]= task
      setTaskItem([...taskItem])
    }
   
    useEffect(() => {
        setTaskItem([...taskItem,addedTask])
    },[addedTask])

  return (
    <div className="root">
        {/* {console.log(taskItem)} */}
      <input className="inputTask" placeholder="enter task to add or update" onChange={(e) => { setTask(e.target.value) }} name="input"/>
      <button className="button" onClick={() => { setAddedTask(task) }}>save</button>
      <div className="tasklist">
                {taskItem.map((item, key) =>
                    <div key={key}>
                        {/* {console.log(key)} */}
                        {key === 0 ?
                        <div className="item">your task list</div>
                      : ( item ? <li>
                        
                        <span className="key">{key}</span>
                        <span className="item">{item}</span>
                        </li>
                        : null)}
                    </div>
                )}
      </div>
        <input className="input" placeholder="enter task number to edit or delete" name="input" onChange={(e) => {SetTaskNo(e.target.value)}}/>
        <div>
        <button className="editbtn" onClick={editTask}>edit</button>
        <button className="button" onClick={deleteTask}>delete</button>
        </div>
    </div>
  );
}

export default App;