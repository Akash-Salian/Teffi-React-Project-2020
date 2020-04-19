import React, {Component} from 'react';



const secondsToString = (interval) => {

    var minutes = Math.floor(interval / (60));
    var seconds = Math.floor(interval % (60))  ;
    return `${minutes} : ${seconds < 10 ? "0" + seconds : seconds }`

    

}


class Time extends Component {

render() {
return (
     <div className="tomato-timer ma0">
            <h1 className="twentyfive fw2 black-90"> {secondsToString(this.props.time)} </h1>
    </div>
);
    }

}

export default Time;
