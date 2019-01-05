import React from 'react';

class VideoCard extends React.Component {
    
    constructor(props) {
        super(props);
        this.videoRef = React.createRef();
    }

    componentDidMount() {
        console.log("Might need to do something, not sure what yet");
    }

    render() {
        const {description, thumbnails} = this.props.video;
        return (
            <div>
                <a>
                <img 
                    ref={this.videoRef}
                    alt={description}
                    src={thumbnails.default}
                />
                </a>
            </div>
        );
    }
}

export default VideoCard;