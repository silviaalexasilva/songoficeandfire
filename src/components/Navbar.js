import React, { Component } from 'react';
import Scrollchor from 'react-scrollchor';

export default class Navbar extends Component {

    componentDidMount() {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 80) document.querySelector('.Navbar').classList.add('scrolled');
            else document.querySelector('.Navbar').classList.remove('scrolled');
        });
    }

    render() {
        return (
            <Scrollchor to="#" animate={{offset: 0, duration: 300}}>
                <div className="Navbar"><h3>Valar Morghulis, Valar Dohaeris</h3></div>
            </Scrollchor>    
        )
    }
}

    class SearchBar extends React.Component {
    render() {
      return (
        <form>
          <input type="text" placeholder="Search..." />
       </form>
      );
    }
  }
