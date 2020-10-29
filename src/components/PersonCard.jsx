import React, { Component } from 'react';

// This is how you would have the code as a function, instead of using class
// const PersonCard = props => {
//     return(
//         <div>
//             <h1>{props.lastName}, {props.firstName}</h1>
//             <p>Age: {props.age}</p>
//             <p>Hair Color: {props.hairColor}</p>
//         </div>
//     );
// }

// export default PersonCard;


// Below is how you would do this as a class
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