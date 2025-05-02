import React from  'react';
import {useSelector,useDispatch} from 'react-redux';

import {increment,decrement} from './actions.jsx';

function Counter(){
    
    const dispatch=useDispatch();
    const select=useSelector((state)=>state.count)
    return(
        <div className='d-flex justify-content-center align-items-center" style="height: 100vh; bg-info text-white  height: 100vh;' >
          <div className="text-center" >
          <div className='col-2'>
           <button className='btn btn-primary ' 
            onClick={()=>{
                dispatch(increment(1))

            }}
            >
                 Increment
            </button>
           </div >
            <h2 className='text-success'>{select}</h2>
          

           <div className='col-2 '>
           <button className='btn btn-danger '
             onClick={()=>{
                dispatch(decrement(1));
             }}
            >
                Decrement
            </button>
           </div>
          </div>
        </div>


    )
}
export default Counter;