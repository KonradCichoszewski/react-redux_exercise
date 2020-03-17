import React from 'react';
import '../index.css';
import store from '../redux/store'
import changeColor from '../redux/actions'

export default class ButtonsPanel extends React.Component{
 
    render(){
    return (
        <div className = 'navBar'>
            <h1 style={{textAlign: "center"}}>Click us!</h1>
            <div className='buttonsPanel'>
                <p className='colorButton' onClick={() => store.dispatch(changeColor("red"))}>Red</p>
                <p className='colorButton' onClick={() => store.dispatch(changeColor("yellow"))} >Yellow</p>
                <p className='colorButton' onClick={() => store.dispatch(changeColor("green"))} >Green</p>
                <p className='colorButton' onClick={() => store.dispatch(changeColor("teal"))} >Teal</p>
            </div>
        </div>
    )};
}