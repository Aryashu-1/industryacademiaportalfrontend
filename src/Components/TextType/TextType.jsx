
import { useEffect, useState } from 'react'
import React from 'react'

const TextType = (props) => {

    let [text,setText] = useState("")
    let [i,seti] = useState(0)
    const len = props.text.length


    useEffect(() => {
        setTimeout(()=>{
            seti((i+1)%len);
            let textcpy = props.text.slice(0,i+1);
            setText(textcpy)
        },250)
        

    },[text,i,len,props.text])


  return <h1 className='text-center  text-zoop text-[40px] font-mono font-extrabold mt-6'>{text + "|"}</h1>

}

export default TextType