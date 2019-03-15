import React, {Component} from 'react';

class VideoBack extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: './imgbreak/Fastfood.mp4'
        }
    }

    render () {
        return (
            <video id="background-video" loop autoPlay>
                <source src={require(`${this.state.videoURL}`)} type="video/mp4" />
                <source src={require(`${this.state.videoURL}`)}  type="video/ogg" />
                Your browser does not support the video tag.
            </video>
        )
    }
};

export default VideoBack;