import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CATEGORIES } from "../../data";
import { v4 as uuidv4 } from 'uuid';
import { addTransaction } from "../transaction/transactionSlice";

export function TransactionControl(){    
    const [category, setCategory] = useState(CATEGORIES[0]);
    const [description, setDescription] = useState('');
    const [ammount, setAmmount] = useState(0);
    const dispatch = useDispatch();

    const handleSelectCategory = (event) => {
      setCategory(event.target.value);
      console.log(event.target.value);
    };

    const handleChangeDescription = event => {
      setDescription(event.target.value);
    }

    const handleChangeAmmount = event => {
      setAmmount(event.target.value);
    }

    

    
    
    const handleSubmitTransaction = (event) => {
        event.preventDefault();
        console.log(category, description, ammount);
        dispatch(addTransaction({
          ammount: +ammount,
          description: description,
          category: category,
          id: uuidv4()
        }));
       
        setCategory(CATEGORIES[0]);
        setAmmount(0);
        setDescription('');
    }


    return (
        // fixed inset-x-0 bottom-0
        <form 
          onSubmit={handleSubmitTransaction}
          className='grid gap-4 bg-slate-900 text-white p-4'>
        <h2 className='grid-cols-12 text-6xl pb-8'>New Transaction</h2>
        <div className='grid grid-cols-12 gap-2'>
          <div className='col-span-4'>
            <label className='block pb-2'>Category</label>
            <select 
              onChange={handleSelectCategory}
              value={category}
              className='border rounded p-2 text-black w-32'>
              {
                CATEGORIES.map((item, index) => {
                  return (
                    <option key={index} value={item}>{item}</option>
                  )
                })
              }
            </select>
          </div>
          <div className='col-span-4 justify-self-center	'>
            <label className='block pb-2'>Description</label>
            <input 
              value={description}
              onChange={handleChangeDescription}
              type='text' 
              className='border rounded p-2 text-black w-32' />              
          </div>
          <div className='col-span-4 justify-self-end'>
            <label className='block pb-2'>Amount</label>
            <input
              value={ammount}
              onChange={handleChangeAmmount} 
              type='number' 
              className='border rounded p-2 text-black w-32' />              
          </div>
        </div>
        <div className='grid-cols-12'>
          <button
            type="submit" 
            className='border rounded border-white p-4 text-2xl hover:bg-white hover:text-slate-900'>Add Transaction</button>
        </div>
      </form>
    )
}