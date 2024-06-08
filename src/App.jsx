

import React,{useState,createContext} from 'react'
import MemorizedChild from './child'



export const context = createContext()

// const memorized = React.memo()
function App() {
  const [count, setCount] = useState(0)
  const obj ={
    name : 'suresh',
    passVal : 'checkProps with useContext and ReactMemo'
  }
  return(

    <context.Provider value={obj}>
      <h2>App </h2>
      <MemorizedChild value={'checkProps with useContext and ReactMemo'}/>
    </context.Provider>

  )  
}

export default App
