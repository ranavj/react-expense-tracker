import { useDispatch, useSelector } from "react-redux"
import {  deleteTransaction, selectAllTransations, selectFlattenedTransations } from "./transactionSlice"

export function Transaction(){
    const transactionList = useSelector(selectFlattenedTransations)
    const transactionAll = useSelector(selectAllTransations);
    
    const dispatch = useDispatch();

    const handleDeleteTransaction = (item) => {      
      dispatch(deleteTransaction(item))
    }
    return(
        <div className='grid'>
          <h2 className='grid-cols-12 text-6xl pb-8'>Transcation</h2>
           {transactionList && transactionList.map(item => {
            return <div className='border rounded-xl border-black p-2 grid grid-cols-12 gap-3 mb-4' key={item.id}>
                <div className='col-span-11'>
                  <label className='col-span-2 text-lg'><strong>{item.ammount} – {item.category}</strong> <i> ( {item.description} ) </i></label>
                </div>
                <div className='col-span-1'>
                  <button 
                    onClick={() => handleDeleteTransaction(item)}
                    className='border rounded-full w-12 p-2 border-black col-span-2 col-start-end'>X</button>
                </div>      
              </div>
           }) 
          }
        </div> 
    )
}