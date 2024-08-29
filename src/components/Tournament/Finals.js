import React from 'react'
import mi from "../../assets/mi.svg"
import kkr from "../../assets/kkr.svg"
import trophy from "../../assets/trophy.png"

const Finals = () => {
    return (
        <div className="w-[100%]  h-[60%] flex flex-col items-center justify-center  ">
          <div className='w-[55%] h-[60%]  flex justify-between'>
            <div className='w-[33%] h-[100%] '>
                <div className='w-[100%] h-[70%] '>
                    <img src={mi} className='w-[100%] h-[100%] object-fit'/>
                </div>
                <div className='w-[100%] h-[30%]  flex flex-col items-center'>
                    <span className='text-white text-[22px] font-bold'>Mumbai Indians</span>
                    <span className='text-white text-[18px] font-light '>192/4 (12.6)</span>
                </div>
            </div>
            <div className='w-[33%] h-[100%]  flex items-center justify-center'>
                <img className="w-[8rem] h-[8rem]" src={trophy}/>
            </div>
            <div className='w-[33%] h-[100%] ='>
                <div className='w-[100%] h-[70%] '>
                    <img src={kkr} className='w-[100%] h-[100%] object-fit'/>
                </div>
                <div className='w-[100%] h-[30%]  flex flex-col items-center'>
                    <span className='text-white text-[22px] font-bold'>Kolkata knight Riders</span>
                    <span className='text-white text-[18px] font-light '>200/9 (20)</span>
                </div>
            </div>
           
          </div>
          
        </div>
      );
}

export default Finals
