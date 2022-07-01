import React, { useState } from 'react'
import JSONDATA from './MOCK_DATA.json'


const SearchFilter = () => {
    const [searchParam,setsearchParam] = useState('')
  
    return (
      <>
        <input type='text' name='searchParam' placeholder='Search....' 
        onChange={(e)=>{setsearchParam(e.target.value)}} />
        {
            JSONDATA.filter((val)=>{
                if(searchParam == "")
                {
                    return val;
                    
                }else if(val.first_name.toLowerCase().includes(searchParam.toLowerCase())){
                    return val;
                }
                
            }).map((val,index)=>{
                return <p key={index}>{val.first_name}</p>
            })
        }
      </>
  )
}

export default SearchFilter