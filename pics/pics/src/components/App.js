import axios from 'axios';
import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {

    onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: term
            },
            headers: {
                Authorization: 'Client-ID ae76c99633e8820c54107865c51f055f04c1cc5599b1a75f996340dd921628d0'
            }
        });
    }
    
    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    }
}

export default App;