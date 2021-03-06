import React, { Component, useState } from "react";
import '../styles/App.css';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            renderBall: false,
            posi : 5,
            check:false,
            ballPosition: { left: "0px" }
        };
        this.renderChoice = this.renderBallOrButton.bind(this)
        this.buttonClickHandler = this.buttonClickHandler.bind(this)
        // this.keyPressed = this.keyPressed.bind(this)
    };

    // keyPressed(e)  {
    //     if(e.keyCode == 39){
    //                 // console.log(true)
    //                 this.setState({
    //                     posi : this.state.posi+5,
    //                     ballPosition : {left: this.state.posi+'px'}
    //                 })
    //     }
    // }

    buttonClickHandler() {
        this.setState({renderBall: true})
    }
    renderBallOrButton() {
		if (this.state.renderBall) {
		    return <div className="ball"   style={this.state.ballPosition} ></div>
		} else {
		    return <button onClick={this.buttonClickHandler}  >Click For One Ball</button>
		}
    }

    // bind ArrowRight keydown event
    componentDidMount() {
        




            document.addEventListener('keydown', (event) => {
                console.log(event)
                if(event.key === "ArrowRight"&& event.keyCode == 39){
                    console.log(true)
                    this.setState((prevState) => ({
                        posi: prevState.posi + 5,
                        ballPosition : {left: this.state.posi+'px'}
                    }))
                    
                }
            });
    }

    render() {
        return (
            <div className="playground">
                {this.renderBallOrButton()}
            </div>
        )
    }
}


export default App;
