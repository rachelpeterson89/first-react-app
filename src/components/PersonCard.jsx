import React, { Component } from 'react';

class PersonCard extends Component {

    constructor(props) {
        super(props);
            this.state = {
                changeAge : props.age
            }
    }
    
    render() {
        return (
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <h3>Age: {this.state.changeAge}</h3>
                <h3>Hair Color: {this.props.hairColor}</h3>

                <button onClick={ () => this.setState({changeAge: this.state.changeAge + 1})}>One Year Older</button>
            </div>
        );
    }
}

export default PersonCard;