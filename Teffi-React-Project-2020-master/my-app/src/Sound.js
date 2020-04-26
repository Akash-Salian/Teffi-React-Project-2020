import React, { Component } from 'react';
import loud from './soundIcon.png';
import mute from './soundMute.png';
import volumeOn from './volumeOn.mp3';
import 'tachyons';

class Sound extends Component {

    toggleSound = (e) => {
        this.ding = new Audio(volumeOn);

        if (this.props.sound === "on") {

            this.changeSoundAttributes("off",
               mute, e)
            this.props.music.pause();

        } else {
            this.changeSoundAttributes("on",
               loud, e)

            this.ding.play();
            this.props.music.pause()
            if (this.props.timerRunning === true) {
                this.props.music.play()
            }

        }

    }

    changeSoundAttributes = (toggle, src, e) => {
        this.props.setSound(toggle)
        e.target.src = src

    }


    render() {
        return (
            <>
                <span onClick={(e) => {
                    this.toggleSound(e)
                }}>
                    <img className="soundButton dim grow" src={process.env.PUBLIC_URL + loud} alt="" />
                </span>
            </>
        )
    }
}

export default Sound;