import './task.css'
import {useState} from 'react'
import { useStateValue } from './StateProvider'
import TaskItem from './TaskItem'

function Task({id, title, description}) {

  const [checked, setChecked] = useState(false)
  const {open, setOpen} = useStateValue()

  const handleCheck = () => {
    setChecked(!checked)
  }

  return (
    <div className={`task ${checked && 'task--borderColor'}`}>
      <div>
        <input 
          id={`checkbox-${id}`} 
          className='checkbox-custom'
          name="checkbox" 
          checked={checked} 
          type="checkbox" />
        <label for={`checkbox-${id}`} class="checkbox-custom-label" onClick={handleCheck} ></label>
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
        <TaskItem onClose={() => setOpen({...open, 'view': false})} title={title} description={description} open={open.view} />
      }
    </div>
  )
}

export default Task