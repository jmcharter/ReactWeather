import React from 'react';
import Clock from '../components/Clock';
import Temperature from '../components/Temperature';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            API: {
                linkStart: "https://api.openweathermap.org/data/2.5/weather?q=",
                location: "",
                linkEnd: "&units=metric&appid=",
                key: process.env.REACT_APP_API_KEY
            },
            Weather: 'default',
            dataFound: 0
        };

    }

    getWeather() {
        fetch(`${this.state.API.linkStart}${this.state.API.location}${this.state.API.linkEnd}${this.state.API.key}`)
            .then(res => res.json())
            .then(json => {
                const data = json;
                if (typeof data.main != "undefined") {

                    this.setState(() => ({
                        Weather: {
                            city: data.name,
                            country: data.sys.country,
                            temperature: Math.round(data.main.temp),
                            timezone: data.timezone,
                            condition: data.weather[0].main,
                            icon: data.weather[0].icon
                        },
                        dataFound: 1

                    }))
                }
            })
    }

    _handleChange = (e) => {
        const keyValue = e.target.value
        this.setState(prevState => ({
            API: {
                ...prevState.API,
                location: keyValue
            }

        }))
    }

    _handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.getWeather()
        }
    }

    render() {
        return (
            <div>
                <div className="search-container">
                    <input
                        type="text"
                        className="searchbar"
                        placeholder="Enter location..."
                        onChange={this._handleChange}
                        onKeyPress={this._handleKeyPress}
                    />
                </div>
                {(this.state.dataFound === 1) ? (
                    <div>
                        <h2>{this.state.Weather.city}, {this.state.Weather.country}</h2>
                        <div>
                            <Clock timezone={this.state.Weather.timezone} />
                            <Temperature
                                temp={this.state.Weather.temperature}
                                condition={this.state.Weather.condition}
                                icon={this.state.Weather.icon} />
                        </div>
                    </div>
                ) : ('')}
            </div>
        )
    };
}


export default Search