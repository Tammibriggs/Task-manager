import './taskManager.css'
import Task from './Task'
import {useStateValue} from './StateProvider'
import {useState, useEffect} from 'react'
import {collection, onSnapshot} from "firebase/firestore"
import {db} from './firebase'

function TaskManager() {

  const {open, setOpen} = useStateValue()
  const [tasks, setTasks] = useState([])

  /* function to get all tasks from firestore in realtime */ 
  useEffect(() => {
    const taskColRef = collection(db, 'tasks')
    onSnapshot(taskColRef, (snapshot) => {
      setTasks(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  },[])

  return (
    <div className='taskManager'>
      <header>Task Manager</header>
      <div className='taskManager__container'>
        <button 
          onClick={() => setOpen({...open, 'add':true})}>
          Add task +
        </button>
        <div className='taskManager__tasks'>

          {tasks.map((task) => (
            <Task
              id={task.id}
              key={task.id}
              completed={task.data.completed}
              title={task.data.title} 
              description={task.data.description}
            />
          ))}
          
        </div>
      </div>
    </div>
  )
}

export default TaskManager
