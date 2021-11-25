import './App.css';
import Home from './TaskManager'
import {useState} from 'react'
import {StateProvider} from './StateProvider'
import AddTask from './AddTask'

function App() {
  const [open, setOpen] = useState({add:false, edit:false, view:false})
  const value = {open, setOpen}

  const handleModalClose = () => {
    setOpen({add:false, edit:false, view:false})
  }

  return (
    <StateProvider value={value}>
      <div className='app'>
        <Home />

        {open.add &&
          <AddTask onClose={handleModalClose} open={open.add}/>
        }
        
      </div>
    </StateProvider>
  );
}

export default App;
