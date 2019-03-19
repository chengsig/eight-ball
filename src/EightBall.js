import React, { Component } from 'react';
import "./EightBall.css"

class EightBall extends Component {
    static defaultProps = { 
        answers: [
            { msg: "It is certain.", color: "green" },
            { msg: "It is decidedly so.", color: "green" },
            { msg: "Without a doubt.", color: "green" },
            { msg: "Yes - definitely.", color: "green" },
            { msg: "You may rely on it.", color: "green" },
            { msg: "As I see it, yes.", color: "green" },
            { msg: "Most likely.", color: "green" },
            { msg: "Outlook good.", color: "green" },
            { msg: "Yes.", color: "green" },
            { msg: "Signs point to yes.", color: "goldenrod" },
            { msg: "Reply hazy, try again.", color: "goldenrod" },
            { msg: "Ask again later.", color: "goldenrod" },
            { msg: "Better not tell you now.", color: "goldenrod" },
            { msg: "Cannot predict now.", color: "goldenrod" },
            { msg: "Concentrate and ask again.", color: "goldenrod" },
            { msg: "Don't count on it.", color: "red" },
            { msg: "My reply is no.", color: "red" },
            { msg: "My sources say no.", color: "red" },
            { msg: "Outlook not so good.", color: "red" },
            { msg: "Very doubtful.", color: "red" },
          ]
    }

    constructor(props) {
        super(props);
        this.state = {
            msg: "Think of a Question",
            color: "black"
        };
        this.handleClick = this.handleClick.bind(this);
    }

    // takes array and returns randomly selected item
    getRandomItem(arr){
        let randomIdx = Math.floor(Math.random() * arr.length)
        return arr[randomIdx];
    }
    
    handleClick(evt) {
        this.setState(this.getRandomItem(this.props.answers));
        // {msg: this.props.answers[this.getRandom()].msg, color: this.props.answers[this.getRandom()].color}
    }

    render() {
        const color = {color: "white", backgroundColor: this.state.color}
        return (
            <button className="EightBall" onClick={this.handleClick} style={color}>
                {this.state.msg}
            </button>
        );
    }
}


export default EightBall;