import Modal from "./Modal"
import {useState} from 'react'
import './addTask.css'
import {db} from './firebase'
import {collection, addDoc} from 'firebase/firestore'
import {useStateValue} from './StateProvider.js'

function AddTask({onClose, open}) {

  const {setOpen} = useStateValue()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  /* function to add new task to firestore */
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'tasks'), {
        title: title,
        description: description
      })
        setOpen({...open, 'add': false})
    } catch (err) {
      alert(err)
    }
  }

  return (
    <Modal modalLable='Add Task' onClose={onClose} open={open}>
      <form onSubmit={handleSubmit} className='addTask'>
        <input 
          type='text' 
          name='title' 
          onChange={(e) => setTitle(e.target.value.toUpperCase())} 
          value={title}
          placeholder='Enter title'/>
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
