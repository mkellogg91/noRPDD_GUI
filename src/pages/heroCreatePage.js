import React, { Component } from 'react';
import client from '../feathers';
import BattleBoard from '../components/battleBoard';


class HeroCreatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroName: '',
      availablePoints: 5,
      vitality: 5,
      critChance: 5,
      critDamage: 5,
      attack: 5,
      defense: 5,
      agility: 5,
      intelligence: 5,
      strength: 5
    };
  }

  // onchange for hero input
  heroNameChange = (evt) => {
    if (evt) {
      this.setState({
        heroName: evt.target.value
      })
    }

  }

  // handles logic for adding and subtracting from stats
  updateStatHandler = (stat, isAdd) => {
    if (stat) {

      // check if we are adding or subtracting
      if (isAdd) {
        // check if we have available stat points to use
        if (this.state.availablePoints > 0) {
          // add 1 to the stat and remove 1 from available points
          this.setState({
            [stat]: this.state[stat] += 1,
            availablePoints: this.state.availablePoints -= 1
          });


        }
      }
      else {
        // check if stat - 1 is still >= 5 if so, subtract 1 from stat and add 1 to avialable
        if ((this.state[stat] - 1) >= 5) {
          this.setState({
            [stat]: this.state[stat] -= 1,
            availablePoints: this.state.availablePoints += 1
          })
        }
      }
    }

  }

  // handles any logic regarding creating a hero
  createHandler = () => {
    const { heroName, availablePoints, vitality, critChance, critDamage, attack, defense, agility, intelligence, strength } = this.state;
    
    if (this.state.heroName) {
      client.service('heroes').create({
        heroName, availablePoints, vitality, critChance, critDamage, attack, defense, agility, intelligence, strength
      }).then(() => {
        console.log('hero created!!');
      });
    }
  }


  render() {
    return (
      <div className="container center-items">
        <div className="page-header">CREATE A HERO</div>
        <div className="stat-table">
          <div className="hero-name py-10">
            <input className="hero-input" type="text" placeholder="enter hero name" value={this.state.heroName} onChange={this.heroNameChange}></input>
          </div>
          <div className="available-points">
            <span className="pr-10 py-5">Available Points: {this.state.availablePoints}</span>
          </div>
          <div className="stat-line">
            <div className="row-item fg-1">Vitality</div>
            <div className="px-10">
              <button onClick={() => this.updateStatHandler('vitality', true)}>+</button>
              <button onClick={() => this.updateStatHandler('vitality', false)}>-</button>
            </div>
            <div className="row-item">{this.state.vitality}</div>
          </div>
          <div className="stat-line">
            <div className="row-item fg-1">Crit Chance</div>
            <div className="px-10">
              <button onClick={() => this.updateStatHandler('critChance', true)}>+</button>
              <button onClick={() => this.updateStatHandler('critChance', false)}>-</button>
            </div>
            <div className="row-item">{this.state.critChance}</div>
          </div>
          <div className="stat-line">
            <div className="row-item fg-1">Crit Damage</div>
            <div className="px-10">
              <button onClick={() => this.updateStatHandler('critDamage', true)}>+</button>
              <button onClick={() => this.updateStatHandler('critDamage', false)}>-</button>
            </div>
            <div className="row-item">{this.state.critDamage}</div>
          </div>
          <div className="stat-line">
            <div className="row-item fg-1">Attack</div>
            <div className="px-10">
              <button onClick={() => this.updateStatHandler('attack', true)}>+</button>
              <button onClick={() => this.updateStatHandler('attack', false)}>-</button>
            </div>
            <div className="row-item">{this.state.attack}</div>
          </div>
          <div className="stat-line">
            <div className="row-item fg-1">Defense</div>
            <div className="px-10">
              <button onClick={() => this.updateStatHandler('defense', true)}>+</button>
              <button onClick={() => this.updateStatHandler('defense', false)}>-</button>
            </div>
            <div className="row-item">{this.state.defense}</div>
          </div>
          <div className="stat-line">
            <div className="row-item fg-1">Agility</div>
            <div className="px-10">
              <button onClick={() => this.updateStatHandler('agility', true)}>+</button>
              <button onClick={() => this.updateStatHandler('agility', false)}>-</button>
            </div>
            <div className="row-item">{this.state.agility}</div>
          </div>
          <div className="stat-line">
            <div className="row-item fg-1">Intelligence</div>
            <div className="px-10">
              <button onClick={() => this.updateStatHandler('intelligence', true)}>+</button>
              <button onClick={() => this.updateStatHandler('intelligence', false)}>-</button>
            </div>
            <div className="row-item">{this.state.intelligence}</div>
          </div>
          <div className="stat-line">
            <div className="row-item fg-1">Strength</div>
            <div className="px-10">
              <button onClick={() => this.updateStatHandler('strength', true)}>+</button>
              <button onClick={() => this.updateStatHandler('strength', false)}>-</button>
            </div>

            <div className="row-item">{this.state.strength}</div>
          </div>
          <div className="center-content pb-10">
            <button onClick={() => this.createHandler()}>Create</button>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroCreatePage