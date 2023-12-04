export default function Counter(){
    function incrememntCounterFunction(){
        console.log('increment clicked')
    }

    return(
        <div className="Counter">
            <span className="count">0</span>
            <button className="counterButton" onClick={incrememntCounterFunction}>increment</button>
        </div>
    )
}