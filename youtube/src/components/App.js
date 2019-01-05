import React from 'react';
import youtube from '../api/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';

class App extends React.Component {
    state = {videos: []};

    onFormSubmit = async (searchTerm) => {
        const response = await youtube.get('/search', {
            params: {
                q: searchTerm
            },
        });
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onFormSubmit}/>
            </div>
        )
    }
}

export default App;