import Modal from "./Modal"
import {useState} from 'react'
import './addTask.css'


function AddTask({onClose, open}) {

  const [task, setTask] = useState('')
  const [description, setDescription] = useState('')

  return (
    <Modal modalLable='Add Task' onClose={onClose} open={open}>
      <form className='addTask'>
        <input 
          type='text' 
          name='task' 
          onChange={(e) => setTask(e.target.value.toUpperCase())} 
          value={task}
          placeholder='Enter task'/>
        <textarea 
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Enter task decription'
          >{description}</textarea>
        <button type='submit'>Done</button>
      </form> 
    </Modal>
  )
}

export default AddTask
