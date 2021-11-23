import React, {createContext, useContext} from 'react'

export const StateContext = createContext({
  open:{add:false, edit:false, view:false},
  setOpen: () => {}
})

export const StateProvider = ({value, children}) => (
  <StateContext.Provider value={value}>
    {children}
  </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext)