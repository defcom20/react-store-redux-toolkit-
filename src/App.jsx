

import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementBy } from './store/slices/counter'

function App() {

  const { counter } = useSelector(state => state.counter)

  const dispatch = useDispatch()

  return (
    <div className="App space-y-4">
      <h1 className="flex items-center justify-center text-3xl font-bold underline text-red-400 space-y-4">
        CONTADOR
      </h1>
      <span className='flex justify-center items-center text-3xl'>
        {counter}
      </span>
      <div className="flex items-center justify-center space-x-4">
        <button className='text-white px-4 py-2 rounded-full bg-gray-700' onClick={ () => dispatch( increment() ) }>+</button>
        <button className='text-white px-4 py-2 rounded-full bg-green-700' onClick={ () => dispatch( decrement() ) }>-</button>
        <button className='text-white px-4 py-2 rounded-full bg-green-700' onClick={ () => dispatch( incrementBy(2) ) }> x2</button>
      </div>
    </div>
  )
}

export default App
