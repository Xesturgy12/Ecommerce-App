import React,{useState} from 'react'
import CustomButton from '../CustomButton'

export default function DropDown({options , checkIfChecked , label}) {

  //initializing with false value for opened causes double click for first open state
    const [opened, setOpened] = useState(true)
    const [showMenuDisplay, setShowMenuDisplay] = useState('none')
    
    const onclickFunction = ()=>{
      console.log(opened);
      setOpened(prevstate => !prevstate)
      opened?setShowMenuDisplay('block'):setShowMenuDisplay('none')
    }

  return (
    <div style={{width:'20%',height:'100%' , border:'1px black solid' , margin:'0rem 1rem'}}>
            <CustomButton 
              label={label}
               height='2.5rem' 
               fontsize='1.2rem'
               bgcolor = '#161515'
               onclickFunction = {onclickFunction}
               />
          {/* <h5>Filter by product sizes</h5> */}
            <div style={{display:showMenuDisplay,width:'20%',height:'auto', position:'absolute', zIndex:'2', backgroundColor:'#ffffff', border:'1px gray solid', paddingLeft:'.5rem'}} >
            {options.map((item,key)=>{
              return<div className="form-check" key={key} >
                  <input className="form-check-input" type="checkbox" onClick={checkIfChecked} value={item} id={`defaultCheck${key}`}/>
                  <label className="form-check-label" htmlFor={`defaultCheck${key}`}>
                    {item}
                  </label>
                </div>            
            })}
          </div>
          

        </div>
  )
}
