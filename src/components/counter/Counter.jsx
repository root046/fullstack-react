import './Counter.css'

export default function Counter(){
    function incrememntCounterFunction(){
        console.log('increment clicked')
    }

    return(
        <div className="Counter">
            <span className="count">0</span>
            <div>
                <button className="counterButton" 
                    onClick={incrememntCounterFunction}
                >+1</button>
            </div>
        </div>
    )
}