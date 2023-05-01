import React,{useState} from 'react'
import CustomButton from '../CustomButton';
import PopUp from '../PopUp';

export default function CustomCard(props) {

    const {
        title = 'card title',
        imagesrc = '',
        alt = 'alt text for image',
        subtitle = 'subtitle for card',
        text = 'this is the text for the card body.',
        width = '18rem',
        height = 'auto',
        productInfo,
    } = props;


    const [showPopUp, setShowPopUp] = useState(false)
  
    
  const OpenPopUp = ()=>{
    setShowPopUp(true)
  } 
  const ClosePopUp = ()=>{
    setShowPopUp(false)
  }
    
    
    return (
      <div className="card" style={{width: width , height : height}}>
      {showPopUp && <PopUp data={productInfo} closepopup={ClosePopUp}/>}
    <img src={imagesrc} className="card-img-top img-fluid" alt={alt}/>
    <div className="card-body">
      <h4 className="card-title">{title}</h4>
      <br/>
      <h6 className="card-subtitle">{subtitle}</h6>
      <h5 className="card-text text-center mt-3">{text}</h5>
      <CustomButton
        label='View Product details'
        height='20%'
        fontsize='1rem'
        onclickFunction={()=>OpenPopUp()}
      />
    </div>
  </div>
  )
}
