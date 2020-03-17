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
                <h1>. . . and watch me :)</h1>
                <div className="tile" style={{backgroundColor: this.props.color}}></div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Tile)  