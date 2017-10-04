import React, { Component } from 'react';
import './Hero.css';
import plane from '../../assets/images/plane.jpeg';
import road from '../../assets/images/road.jpeg';
import river from '../../assets/images/river.jpeg';
import city from '../../assets/images/city.jpeg';

class Hero extends Component {
  render() {
    return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        </ol>
        <div className="carousel-inner" role="listbox">
            <div className="item active">
                <img className="d-block img-fluid" src={plane} alt="First slide"/>
                <div className="carousel-caption">
                    <h1>Welcome to my Travel Site</h1>
                </div>
            </div>
            <div className="item">
                <img className="d-block img-fluid" src={road} alt="Second slide"/>
                <div className="carousel-caption">
                    <h1>Welcome to my Travel Site</h1>
                </div>
            </div>
            <div className="item">
                <img className="d-block img-fluid" src={river} alt="Third slide"/>
                <div className="carousel-caption">
                    <h1>Welcome to my Travel Site</h1>
                </div>
            </div>
            <div className="item">
                <img className="d-block img-fluid" src={city} alt="Forth slide"/>
                <div className="carousel-caption">
                    <h1>Welcome to my Travel Site</h1>
                </div>
            </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>
    );
  }
}

export default Hero;
