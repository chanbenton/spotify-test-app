import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup } from 'react-bootstrap';
import './App.css';

// const accessToken = 'BQCH6R8l1iNAQ4BHWXyvBvN5RRcTH2UfC85zyLm6MYDv8lmbOT7S9DMRbj_6Muo13eWT0zVY_e_llMHyZLq7jd1e7e59uD_jXH7M2vlEkFHWMPMX0rzc1iCePLfVpavGJFILqt_gPMXREtzyl2dOpV41JZ0v4Bk';

/*
 * Setup requirements: 
 * Get a temporary Spotify access token from:
 * https://beta.developer.spotify.com/console/get-search-item/
 * ==> 'get OAuth Token' at bottom of form
 */

class App extends Component {

	constructor (props){
		super(props);
		this.state = {
            search: "",
            artist: null
		};
	}
	searchArtist() {
		alert("searchArtist function here.");
	}
	
    render() {
        return (
            <div className="App">
                <div className="app-title">Spotify - Artist Search</div>
				<FormGroup>
					<InputGroup>
						<FormControl 
							type="text" 
							placeholder="Find an artist"
							query={this.state.search}
							onChange={event => {this.setState({search:event.target.value})}}
							onKeyPress={event => {
								if (event.key === 'Enter'){
									this.searchArtist()
								}
							}}
						/>
						<div class="input-group-append" onClick={() => this.searchArtist()}>
							<span class="input-group-text" id="basic-addon2">Search</span>
						</div>
					</InputGroup>
				</FormGroup>
            </div>
        );
    }
}

export default App;