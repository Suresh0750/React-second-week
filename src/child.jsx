
import React,{useContext} from 'react'
import {context} from './App'

export const memorized = React.memo(Child)

function Child(props){
    const {name,passVal} = useContext(context)
    console.log(name)
    return(
        <>
           <div>{name}</div>
           <p>child component</p>
           <p>{passVal}</p>
        </>
    )
}
 

export default Child