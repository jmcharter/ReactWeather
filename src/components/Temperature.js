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
                    <h2>{this.props.temp}°c</h2>
                    <div className="icon">
                        <img src={`http://openweathermap.org/img/wn/${this.props.icon}@2x.png`}></img>
                    </div>
                    <h3>{this.props.condition}</h3>
                </div>
            </div>
        )
    }
}

export default Temperature;