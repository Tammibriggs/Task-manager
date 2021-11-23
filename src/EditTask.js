import Modal from "./Modal"
import {useState} from 'react'
import './editTask.css'

function EditTask({onClose, open}) {

  const [task, setTask] = useState('')
  const [description, setDescription] = useState('')

  return (
    <Modal modalLable='Edit Task' onClose={onClose} open={open}>
      <form className='editTask'>
        <input type='text' name='task' onChange={(e) => setTask(e.target.value.toUpperCase())} value={task}/>
        <textarea onChange={(e) => setDescription(e.target.value)}>{description}</textarea>
        <button type='submit'>Edit</button>
      </form> 
    </Modal>
  )
}

export default EditTask
