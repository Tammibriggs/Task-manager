import Modal from "./Modal"
import {useState} from 'react'
import './editTask.css'
import { doc, updateDoc } from "firebase/firestore";
import {db} from './firebase'

function EditTask({open, onClose, toEditTitle, toEditDescription, id}) {

  const [title, setTitle] = useState(toEditTitle)
  const [description, setDescription] = useState(toEditDescription)

  /* function to update firestore */
  const handleUpdate = async (e) => {
    e.preventDefault()
    const taskDocRef = doc(db, 'tasks', id)
    try{
      await updateDoc(taskDocRef, {
        title: title,
        description: description
      })
      onClose()
    } catch (err) {
      alert(err)
    }
    
  }

  return (
    <Modal modalLable='Edit Task' onClose={onClose} open={open}>
      <form onSubmit={handleUpdate} className='editTask'>
        <input type='text' name='title' onChange={(e) => setTitle(e.target.value.toUpperCase())} value={title}/>
        <textarea onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
        <button type='submit'>Edit</button>
      </form> 
    </Modal>
  )
}

export default EditTask
