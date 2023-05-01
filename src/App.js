import { useState } from 'react';
import './App.css';
import AppliedFilters from './components/AppliedFilters';
import CustomCard from './components/CustomCard';
import FilterBar from './components/filterBar';
import Navbar from './components/navBar';
import data from'./json/products.json'

function App() {

  let products = data?.data?.products
  const SizeOptions = ["L", "M", "ML", "S", "XL", "XS", "XXL"]
  const ClothingOptions = ['T-shirt', 'Jeans' , 'Pant' , 'Hoodie','Trouser']
  const [sizeCheckedList, setSizeCheckedList] = useState([])
  const [clothingCheckedList, setClothingCheckedList] = useState([])


  return (
    <div className="App">
      <Navbar/>
      <FilterBar 
        SizeOptions={SizeOptions}
        ClothingOptions={ClothingOptions}
        sizeCheckedList={sizeCheckedList}
        setSizeCheckedList={setSizeCheckedList}
        clothingCheckedList={clothingCheckedList}
        setClothingCheckedList={setClothingCheckedList}
      />
      <div className='main-section d-flex flex-row'>
        <AppliedFilters
          sizes={sizeCheckedList}
          clothing = {clothingCheckedList}
        />

        <div className='products-section d-flex flex-wrap gap-5 column align-items-start justify-content-start mt-4 px-5'>

          {console.log(clothingCheckedList.length===0)}
            {
              products.map((product,key)=>{
                if((clothingCheckedList.length===0 && sizeCheckedList.length===0)||
                  (clothingCheckedList.includes(product.type) && sizeCheckedList.length===0)||
                (product.availableSizes.some(item=>sizeCheckedList.includes(item))
                  && clothingCheckedList.length===0)||
                (clothingCheckedList.includes(product.type) &&
                  product.availableSizes.some(item=>sizeCheckedList.includes(item))))

                  return (<>
                  <CustomCard
                    key = {product?.id ? product.id : key }
                    height='40rem'
                    subtitle = {product?.type}
                    title={product?.title}
                    imagesrc = {product?.url}
                    text = {`price: ${product?.currencyFormat + product?.price}`}
                    productInfo = {product}
                    />
                  </>
                )
                else{
                  return null
                }
              }
              )
            }    
        </div>
      </div>
    </div>
  );
}

export default App;
