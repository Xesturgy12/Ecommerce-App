import React from 'react'
import CustomButton from '../CustomButton';
import './styles.css'


export default function PopUp(props) {

  const {data,closepopup} = props;
  console.log(data);

  return (
    <div className='popup-main' onClick={closepopup}>
      <div className='popup-container'>
        <CustomButton label='X' className='close-button' onclickFunction={closepopup}/>
        {/* <div className='close-button'>X</div> */}
        <div className='popup-content'>
          <img src={data.url} alt={data.title} className='popup-image'/>
          <div className='popup-text'>
            <span>
              <h3>{data.title}</h3>
            </span>
            <span>
            <p className='about-product'>{data.description}</p>
            </span>
            
            <span>
              <h6>Type </h6>
              <h5>{data.type}</h5>
            </span>
            
            <span>
              <h6>Style </h6>
              <h5>{data.style}</h5>
            </span>
            <span>
              <h6>Sizes available 
              </h6>
              <h5>{data.availableSizes.map((item,key)=>{return <span key={key} className='mx-2'>{item}</span>})}</h5>
            </span>
            <span>
              <h6>Price</h6>
              <h4>{`${data.currencyFormat}${data.price}`}</h4>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
