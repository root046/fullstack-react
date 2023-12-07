import { useState } from 'react'
import { PropTypes } from 'prop-types'
import './Counter.css'

export default function Counter() {
    const [count, setCount] = useState(0);

    function incrementCounterParentFunction(by){
        setCount(count + by)
    }

    function decrementCounterParentFunction(by){
        setCount(count - by)
    }

    return (
        <>
            <span className="totalCount">{count}</span>
            <CounterButton /* the devault value is 1 */
                incrementMethod={incrementCounterParentFunction} 
                decrementMethod={decrementCounterParentFunction}
                />
            <CounterButton by={2}
                incrementMethod={incrementCounterParentFunction}
                decrementMethod={decrementCounterParentFunction}
                />
            <CounterButton by={3} 
                incrementMethod={incrementCounterParentFunction}
                decrementMethod={decrementCounterParentFunction}
                />
        </>
    )
}

function CounterButton({ by,incrementMethod,decrementMethod }) {
    //[0,f]
    //const [firstElt, secondElt] = array
    const [count, setCount] = useState(0);

    function incrememntCounterFunction() {
        setCount(count + by)
        incrementMethod(by)
    }

    function decrementCounterFunction() {
        setCount(count - by)
        decrementMethod(by)
    }

    return (
        <div className="Counter">
            <span className="count">{count}</span>
            <div>
                <button className="counterButton"
                    onClick={incrememntCounterFunction}
                >+{by}</button>

                <button className='counterButton'
                    onClick={decrementCounterFunction}
                >-{by}</button>
            </div>
        </div>
    )
}

CounterButton.prototype = {
    by: PropTypes.number
}

// to set default value
CounterButton.defaultProps = {
    by: 1
}
