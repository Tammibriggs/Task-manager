import Modal from "./Modal"
import {useState} from 'react'
import './editTask.css'
import {useStateValue} from './StateProvider'

function EditTask({onClose, toEditTitle, toEditDescription}) {

  const [title, setTitle] = useState(toEditTitle)
  const [description, setDescription] = useState(toEditDescription)
  const {open} = useStateValue()

  /* function to update firestore */

  return (
    <Modal modalLable='Edit Task' onClose={onClose} open={open}>
      <form className='editTask'>
        <input 
          type='text' 
          name='title' 
          onChange={(e) => setTitle(e.target.value.toUpperCase())} 
          value={title}/>
        <textarea onChange={(e) => setDescription(e.target.value)}>{description}</textarea>
        <button type='submit'>Edit</button>
      </form> 
    </Modal>
  )
}

export default EditTask
