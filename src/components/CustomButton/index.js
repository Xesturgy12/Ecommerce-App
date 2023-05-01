import React from 'react'
import './styles.css'

export default function CustomButton(props) {
    
    const {
        label = 'Custom Button'
        ,width = '100%'
        ,height = '100%'
        ,bordersize = '2px'
        ,bordercolor = 'black'
        ,bordertype = 'solid'
        ,fontsize = '2rem'
        ,fontweight = '500'
        ,fontcolor = 'white'
        ,bgcolor = 'black'
        ,className = ''
        ,onclickFunction
    } = props;


  return (
    <button
    className={className}
    style={{
        height:height,
        width:width,
        borderWidth:bordersize,
        borderColor:bordercolor,
        borderStyle:bordertype,
        fontSize:fontsize,
        fontWeight:fontweight,
        color:fontcolor,
        backgroundColor:bgcolor,
    }}

    onFocus = {()=>{
    }}
    onClick={onclickFunction}
    >
        {label}
    </button>
  )
}

