import React from 'react';
import youtube from '../api/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    state = {videos: []};

    onFormSubmit = async (searchTerm) => {
        const response = await youtube.get('/search', {
            params: {
                q: searchTerm
            },
        });

        this.setState({videos: response.data.items});
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onFormSubmit}/>
                <VideoList videos={this.state.videos}/>
            </div>
        )
    }
}

export default App;