import React from 'react';

class VideoItem extends React.Component {
    
    constructor(props) {
        super(props);
        this.videoRef = React.createRef();
    }

    componentDidMount() {
        console.log("Might need to do something, not sure what yet");
    }

    render() {
        const {description, thumbnails} = this.props.video.snippet;
        return (
            <div>
                <a>
                <img 
                    ref={this.videoRef}
                    alt={description}
                    src={thumbnails.default.url}
                />
                </a>
            </div>
        );
    }
}

export default VideoItem;