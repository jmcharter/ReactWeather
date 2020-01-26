import React from 'react';
const moment = require('moment');

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.setState({
            date: moment().add(this.props.timezone, 's').format("dddd, DDDo MMMM YYYY"),
            week: moment().add(this.props.timezone, 's').format("W"),
            time: moment().add(this.props.timezone, 's').format("HH:mm:ss")
        })

        this.timerID = setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: moment().add(this.props.timezone, 's').format("dddd, DDDo MMMM YYYY"),
            week: moment().add(this.props.timezone, 's').format("W"),
            time: moment().add(this.props.timezone, 's').format("HH:mm:ss")
        });
    }

    render() {
        return (
            <div className="date-container">
                <h3>Week {this.state.week}</h3>
                <h3>{this.state.date}</h3>
                <h3>{this.state.time}</h3>
            </div>
        )
    }
}

export default Clock;