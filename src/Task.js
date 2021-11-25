import './task.css'
import {useState} from 'react'
import { useStateValue } from './StateProvider'
import TaskItem from './TaskItem'
import EditTask from './EditTask'
import { doc, updateDoc } from "firebase/firestore";
import {db} from './firebase'

function Task({id, title, description, completed}) {

  const [checked, setChecked] = useState(completed)
  const {open, setOpen} = useStateValue()

  /* function to update firestore */
  const handleChange = async () => {
    const taskDocRef = doc(db, 'tasks', id)
    try{
      await updateDoc(taskDocRef, {
        completed: checked
      })
      console.log('hello world')
    } catch (err) {
      alert(err)
    }
  }

  return (
    <div className={`task ${checked && 'task--borderColor'}`}>
      <div>
        <input 
          id={`checkbox-${id}`} 
          className='checkbox-custom'
          name="checkbox" 
          checked={checked}
          onChange={handleChange}
          type="checkbox" />
        <label 
          htmlFor={`checkbox-${id}`} 
          className="checkbox-custom-label" 
          onClick={() => setChecked(!checked)} ></label>
      </div>
      <div className='task__body'>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className='task__buttons'>
          <div className='task__deleteNedit'>
            <button 
              className='task__editButton' 
              onClick={() => setOpen({...open, 'edit': true})}>
              Edit
            </button>
            <button className='task__deleteButton'>Delete</button>
          </div>
          <button 
            onClick={() => setOpen({...open, view: true})}>
            View
          </button>
        </div>
      </div>
      {open.view &&
        <TaskItem 
          onClose={() => setOpen({...open, 'view': false})} 
          title={title} 
          description={description} 
          open={open.view} />
      }

      {open.edit &&
        <EditTask 
          onClose={() => setOpen({...open, 'edit': false})} 
          toEditTitle={title} 
          toEditDescription={description} 
          open={open.edit}
          id={id} />
      }
    </div>
  )
}

export default Task