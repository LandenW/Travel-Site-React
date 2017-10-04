import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Hero from './components/hero/Hero';
import Cards from './components/cards/Cards';
import Table from './components/table/Table';
import Footer from './components/footer/Footer';

import SpainPic from './assets/images/Spain.svg';
import ItalyPic from './assets/images/Italy.svg';
import ArubaPic from './assets/images/Aruba.svg';
import ChilePic from './assets/images/Chile.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Hero />
        <br/>
        <div>
          <Cards name="Spain" pic={SpainPic}/>
          <Cards name="Italy" pic={ItalyPic}/>
          <Cards name="Aruba" pic={ArubaPic}/>
          <Cards name="Chile" pic={ChilePic}/>
        </div>
        <h2 className="text-center spaceTop">Some information about the places I would like to visit</h2>
        <table id="data" className="table table-striped table-bordered">
          <thead>
            <tr>
                <th className="text-center">Destination</th>
                <th className="text-center">Capital</th>
                <th className="text-center">Official Language</th>
                <th className="text-center">Population (aprox.)</th>
                <th className="text-center">National Bird</th>
            </tr>
          </thead>
          <tbody>
            <Table destination="Spain" capital="Madrid" ol="Spanish" pop="46.77 million" bird="Eagle"/>
            <Table destination="Italy" capital="Rome" ol="Italian" pop="59.83 million" bird="Bluebirds"/>
            <Table destination="Aruba" capital="Oranjestad" ol="Dutch" pop="102,911" bird="Aruban Burrowing Owl"/>
            <Table destination="Chile" capital="Santiago" ol="Spanish" pop="17.62 million" bird="Andean Condor"/>
          </tbody>
        </table>
        <br/>
        <Footer />
      </div>
    );
  }
}

export default App;
