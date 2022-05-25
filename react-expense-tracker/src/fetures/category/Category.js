import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllTransations } from "../transaction/transactionSlice";
import { updateCategory } from "./categorySlice";

export function Category({data}){

    const { category, ammount } = data;    
    const [ ammountValue, setAmmountValue ] = useState();
    const allTransactions = useSelector(selectAllTransations);
   
    const calculateBuget = () => {
      if(allTransactions[category]){
       // console.log(allTransactions[category].reduce((a, b) => a + b.ammount, 0))
       return parseInt(ammount) - allTransactions[category].reduce((a, b) => a + b.ammount, 0)
      }
      return parseInt(ammount)
    }
    

    const dispatch = useDispatch();

    const handleUpdateCategory = (e) => {
      e.preventDefault();
      if(ammountValue !== undefined){
         dispatch(updateCategory({ category, ammount: parseInt(ammountValue) })); 
        //  setAmmountValue(0);
         return;
      }
        return;
    };

    return (
        <form 
          onSubmit={handleUpdateCategory}
          className='grid-cols-1 grid gap-4  border-b border-black-500 pb-8	'>
          <div className='grid-cols-1'>
            <label className='text-slate-500 text-lg'>Category</label>
          </div>
          <div className='grid-cols-1'>
            <div className='grid grid-cols-2'>
              <div className=''>
                <label>{category}</label>
              </div>
              <div className='grid grid-cols-4 justify-items-end gap-3'>
                <div className='col-span-3 '>
                  <input 
                    value={ammountValue}
                    onChange={(e) => setAmmountValue(e.target.value)}
                    type='number' 
                    className='rounded-lg border border-black w-32	p-2' />
                </div>
                <div className='col-span-1 '> 
                  <button 
                    type="submit"
                    className='rounded-lg  border border-black p-2 text-lg w-32 hover:text-white hover:bg-slate-900'>Update</button>
                </div>
              </div>
              <div className='grid-cols-1'>
                <label className='text-xl'>Funds Remaining: { calculateBuget() }</label>
              </div>
            </div>            
          </div>
        </form>  
    )
} 