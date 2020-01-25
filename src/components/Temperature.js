import React from 'react';

class Temperature extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            temp: this.props.temp
        }
    }

    render() {
        return (
            <div className="temp-container">
                <div className="temp-display">
                    <h3>{this.props.temp}°c</h3>
                </div>
            </div>
        )
    }
}

export default Temperature;