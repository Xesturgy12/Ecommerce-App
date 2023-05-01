import React from 'react'

export default function AppliedFilters(props) {

    const {sizes,clothing} = props;

  return (
    <div className='filters-section d-none d-lg-block w-25 d-md-block'>

        {sizes && 
            <>
                <h6>Product Sizes</h6>
                <div className='d-flex flex-row gap-1 flex-wrap mt-2'>
                    {sizes.map((item,key)=>{
                        return <span key={key} className="size-pill">{item}</span>
                    })}
                </div>
                <br/>
           </>
        }

        {clothing && 
            <>
                <h6>Product Types</h6>
                <div className='d-flex flex-row gap-1 flex-wrap mt-2'>
                    {clothing.map((item,key)=>{
                        return <span key={key} className="size-pill">{item}</span>
                    })}
                </div>
            </>
        }

        </div>
  )
}
