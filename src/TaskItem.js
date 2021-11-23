import Modal from "./Modal"
import './taskItem.css'

function TaskItem({onClose, open}) {

  return (
    <Modal modalLable='Task Item' onClose={onClose} open={open}>
      <div className='taskItem'>
        <h2>afkdjakldf</h2>
        <p>admflakfalf</p>
      </div>
    </Modal>
  )
}

export default TaskItem
