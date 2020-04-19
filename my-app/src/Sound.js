import React, {Component} from 'react';
import loud from './soundIcon.png';
import mute from './soundMute.png';

class Sound extends Component {


    toggleSound = (e) => {
        this.props.sound === "on" ?
        this.changeSoundAttributes("off",
        process.env.PUBLIC_URL
        + mute, e ) :
        this.changeSoundAttributes("on",
        process.env.PUBLIC_URL
        + loud, e )
  

    }

changeSoundAttributes = (toggle, src,e) => {
    this.props.setSound(toggle)
    e.target.src = src
}


render() {
    return(
        <>
        <button className="soundButton grow" onClick={(e) => {
        this.toggleSound(e)}}>
            <img src={process.env.PUBLIC_URL + loud}/>
        </button>
        </>
    )

}




}

export default Sound;