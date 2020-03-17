import React from 'react';
import '../index.css';
import store from '../redux/store'
import changeColor from '../redux/actions'

export default class ButtonsPanel extends React.Component{
 
    render(){
    return (
        <div>
            <h2>This is the buttons panel:</h2>
            <div className='buttonsPanel'>
                <p className='colorButton' onClick={() => store.dispatch(changeColor("red"))}>Red</p>
                <p className='colorButton' onClick={() => store.dispatch(changeColor("yellow"))} >Yellow</p>
                <p className='colorButton' onClick={() => store.dispatch(changeColor("green"))} >Green</p>
                <p className='colorButton' onClick={() => store.dispatch(changeColor("teal"))} >Teal</p>
            </div>
        </div>
    )};
}