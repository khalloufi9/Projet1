import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getshoesbytype } from '../../../JS/Actions/shoesAction'
const Homme = () => {

const dispatch=useDispatch()

const obj={type:"Homme"}
  {useEffect(()=>
    dispatch(getshoesbytype("Homme")),[])}

  return (
      <div>
    <button >Homme</button>
    </div>
 
  )
}

export default Homme