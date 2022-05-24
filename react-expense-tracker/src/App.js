import logo from './logo.svg';
import './App.css';
import { Transaction } from './fetures/transaction/Transaction';
import { TransactionControl } from './fetures/transactionControl/TransactionControl';
import { CategoryContainer } from './components/CategoryContainer';

function App() {
  return (
    <div className='container p-5'>
      <div className='grid gap-2'>
        <div className='grid-cols-1 pb-10'>
          <h2 className='text-6xl'>Expense Tracker</h2>
        </div>
        <CategoryContainer />
        {/* transcation list */}
        <Transaction />
        {/* transaction control */}
        <TransactionControl />
      </div>
    </div>
  );
}

export default App;
