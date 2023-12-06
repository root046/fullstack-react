import { useState } from 'react'
import {PropTypes} from 'prop-types'
import './Counter.css'

export default function Counter({by}){
    //[0,f]
    //const [firstElt, secondElt] = array
    const [count,setCount]=useState(0);

    function incrememntCounterFunction(){
        setCount(count + by)
    }

    function decrementCounterFunction(){
        setCount(count - by)
    }

    return(
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

Counter.prototype = {
    by: PropTypes.number
}

// to set default value
Counter.defaultProps = {
    by : 1
}
