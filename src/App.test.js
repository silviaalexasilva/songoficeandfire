import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

  // Bring in some help
  _getCharactersForPage = async () => {
    const response = await axios.get(`https://www.anapioficeandfire.com/api/characters?page=${this.state.pageNumber}&pageSize=5`);
    // Check that the data is pulling in.
    // console.log(response.data);
    console.log(`_getCharactersForPage`);
    this.setState({
      characters: response.data
    }, () => {
      console.log('The app is done setting the state')
    });
  }

  _incrementPageNumber = () => {
    console.log(`_incrementPageNumber`);
    this.setState({
      pageNumber: this.state.pageNumber + 1   
    }, () => {
      this._getCharactersForPage();
    });
  }

  _decrementPageNumber = () => {
    console.log(`_decrementPageNumber`);
    this.setState({
      pageNumber: this.state.pageNumber - 1   
    }, () => {
      this._getCharactersForPage();
    });
  }

  // Tried doing my _decrementPageNumber function like below, but would return the previous page as NULL.

  // _decrementPageNumber = () => {
  //   console.log(`_decrementPageNumber`);
  //   this.setState({
  //     pageNumber: this.state.pageNumber - 1
  //   }, this._getCharactersForPage);
  // }
  export default App;