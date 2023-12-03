import { Component } from 'react';
export default class FourthComponent extends Component {
    render() {
        return (
            <>
                <div className='SomeComponent'>Some Component</div>
                <div className='SomeComponent'>Some Component</div>
            </>
        )
    }
}

export function FifthComponent(){
    return(
        <div className='FifthComponent'>Fifth Component</div>
    )
}