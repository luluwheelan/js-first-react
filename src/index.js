import React from 'react';
import ReactDom from 'react-dom';

// function Welcome(prop){
//     return (
//         <div>
//             <p>Hello, {prop.name}, welcome to {prop.location}</p>
//         </div>
//     );
// }

class Welcome extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: props.name,
            location: props.location
        };
    }
    render(){
        return(
            <div>
                <p>Hello, {this.state.name}, welcome to {this.state.location}</p>
                <label>Name</label>
                <input onChange={e => this.setState({name: e.target.value})} value={this.state.name}/>
                <label>Location</label>
                <input onChange={e => this.setState({location: e.target.value})} value={this.state.location}/>
                {/* <input onChange = {function(event){
                    this.setState({name: event.target.value}).bind(this);
            }}/> */}
            </div>
        );
    }
}
ReactDom.render(<Welcome name="Lulu" location="Georgian College"/>, document.querySelector("#root"));