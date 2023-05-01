import React from 'react'
import DropDown from '../Dropdown';

export default function FilterBar(props) {

  const {SizeOptions,
    ClothingOptions,
    sizeCheckedList,
    setSizeCheckedList,
    clothingCheckedList,
    setClothingCheckedList} = props;



  const checkIfSizeChecked = (e)=>{
    console.log(e.target.checked);
    if(e.target.checked){
      setSizeCheckedList(prevstate=>[...prevstate, e.target.value])
      console.log(sizeCheckedList)
    }
    else{
      setSizeCheckedList(
        sizeCheckedList.filter(item=>{
        return item !== e.target.value
      })
      )
    }
  }

  const checkIfClothingChecked = (e)=>{
    console.log(e.target.checked);
    if(e.target.checked){
      setClothingCheckedList(prevstate=>[...prevstate, e.target.value])
      console.log(clothingCheckedList)
    }
    else{
      setClothingCheckedList(
        clothingCheckedList.filter(item=>{
        return item !== e.target.value
      })
      )
    }
  }


  return (
    <div className='filter py-3 px-2'>
      <DropDown options={SizeOptions} checkIfChecked={checkIfSizeChecked} label='Filter by product sizes'/>
      <DropDown options={ClothingOptions} checkIfChecked={checkIfClothingChecked}  label='Filter by product type'/>
    </div>
  )
}
