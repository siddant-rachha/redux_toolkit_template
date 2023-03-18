import logo from './logo.svg';
import './App.css';

import { useSelector, useDispatch } from 'react-redux'
import { counterActions } from './store/counterSlice'
import { alphabetActions } from './store/alphabetSlice'
import { delayIncrement, delayDecrement } from './store/thunkSlice';
function App() {
  const count = useSelector((state) => state.counter.value)
  const alphabet = useSelector((state) => state.alphabet.value)
  const thunkCounter = useSelector((state) => state.thunkCounter.value)

  const dispatch = useDispatch()

  return (
    <>
      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(counterActions.increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(counterActions.decrement())}
          >
            Decrement
          </button> 
        </div>
      </div>
      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(alphabetActions.increment())}
          >
            Increment
          </button>
          <span>{alphabet}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(alphabetActions.decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(delayIncrement())}
          >
            Increment
          </button>
          <span>{thunkCounter}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(delayDecrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  )
}

export default App;
