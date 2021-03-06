import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Landing extends Component {

    render(){
        return (
            <div class="Landing">
                <Link to="/Characters">Characters</Link>
                <hr/>
                <Link to="/Books">Books</Link>
                <hr/>
                <Link to="/Map">Westeros Map</Link>
                <hr/>
                <Link to="/Quiz">Quiz Game</Link>
                <hr/>  
                <Link to="/Memory">Memory Card</Link>
                <hr/>  
            </div>
        )
    }
};

export default Landing;