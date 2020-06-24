import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'

class Slide extends Component {


    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            let elems = document.querySelectorAll('.carousel');
            let instances = M.Carousel.init(elems, {});
          });
    }

    render() {

        return (

            <div className="carousel">

            <a className="carousel-item" href="#one!"><img src="https://lorempixel.com/250/250/nature/1" alt ="one" /></a>
            <a className="carousel-item" href="#two!"><img src="https://lorempixel.com/250/250/nature/2" alt ="two" /></a>
            <a className="carousel-item" href="#three!"><img src="https://lorempixel.com/250/250/nature/3" alt ="three" /></a>
            <a className="carousel-item" href="#four!"><img src="https://lorempixel.com/250/250/nature/4" alt ="four" /></a>
            <a className="carousel-item" href="#five!"><img src="https://lorempixel.com/250/250/nature/5" alt ="five" /></a>
        
            </div>
        );
    }
}


export default Slide