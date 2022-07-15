// Pokémon Search App

import React, {Component} from 'react';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemonImage: null
    }
  }

  // Retrieve an image for the specified pokemon
  async getPokemonImage(searchTerm) {
    let pokemonImage;

    /*
     * Here is where you should implement an HTTP request using the Axios library
     * The parameter searchTerm will hold the value of the text in the search box at the time the user presses the search button
     * Above is a declared variable named pokemonImage
     * You should assign a value to pokemonImage which is the URL of that Pokémon's image (retrieved from the API)
     * If the request fails (such as no Pokémon found), set pokemonImage to null and display a JS alert with an error message
     * A successful search will cause an image to appear
     */

    return pokemonImage;
  }

  // Search event handler
  async handleSearchSubmit(event) {
    event.preventDefault();
    const searchTerm = event.target.querySelector('input[name="search-term"]').value;
    const pokemonImage = await this.getPokemonImage(searchTerm);
    this.setState({pokemonImage});
  }

  render() {
    return (
      <div className='app-container'>
        <div className='search-wrapper'>
          <h1>Pokémon Search</h1>

          <div>
            <form onSubmit={this.handleSearchSubmit.bind(this)}>
              <input name='search-term' />
              <button type='submit'>Search For Pokemon</button>
            </form>
          </div>

          <div className='result'>
            {
              this.state.pokemonImage ?
              <img src={this.state.pokemonImage} /> :
              <p>Please search for a pokemon</p>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
