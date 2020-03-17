import React from 'react';
import '../index.css';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    const color = state.color;
    return {color};
}

class Tile extends React.Component {
    render(){ 
        return(
            <div className="tileHolder">
                <h2 style={{marginTop: "10px"}}>This is the tile which changes the color accordingly:</h2>
                <div className="tile" style={{backgroundColor: this.props.color}}></div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Tile)  