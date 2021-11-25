import Modal from "./Modal"
import {useState} from 'react'
import './addTask.css'
import {db} from './firebase'
import {collection, addDoc} from 'firebase/firestore'
import {useStateValue} from './StateProvider.js'

function AddTask({onClose, open}) {

  const {setOpen} = useStateValue()

  const [task, setTask] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'tasks'), {
        task: task,
        description: description
      })
        setOpen({...open, 'add': false})
    } catch (err) {
      console.log('failed to respond', err)
    }
  }

  return (
    <Modal modalLable='Add Task' onClose={onClose} open={open}>
      <form onSubmit={handleSubmit} className='addTask'>
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
