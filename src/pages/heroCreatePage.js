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
    console.log('evt: ', evt.target.value);
    if (evt && evt.target.value) {
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


  render() {
    return (
      <div className="container">
        <h1>HAY THIS IS THE HERO CREATE PAGE!!!</h1>
        <div>
          Hero Name: <input type="text" placeholder="enter hero name" value={this.state.heroName} onChange={this.heroNameChange}></input>
        </div>
        <div>
          Available Points: {this.state.availablePoints}
        </div>

        <div className="stat-table">
          <div className="stat-line">
            <span>Vitality</span>
            <div>
              <button onClick={() => this.updateStatHandler('vitality', true)}>+</button>
              <button onClick={() => this.updateStatHandler('vitality', false)}>-</button>
            </div>
            <span>{this.state.vitality}</span>
          </div>
          <div className="stat-line">
            <span>Crit Chance</span>
            <div>
              <button onClick={() => this.updateStatHandler('critChance', true)}>+</button>
              <button onClick={() => this.updateStatHandler('critChance', false)}>-</button>
            </div>
            <span>{this.state.critChance}</span>
          </div>
          <div className="stat-line">
            <span>Crit Damage</span>
            <div>
              <button onClick={() => this.updateStatHandler('critDamage', true)}>+</button>
              <button onClick={() => this.updateStatHandler('critDamage', false)}>-</button>
            </div>

            <span>{this.state.critDamage}</span>
          </div>
          <div className="stat-line">
            <span>Attack</span>
            <div>
              <button onClick={() => this.updateStatHandler('attack', true)}>+</button>
              <button onClick={() => this.updateStatHandler('attack', false)}>-</button>
            </div>
            <span>{this.state.attack}</span>
          </div>
          <div className="stat-line">
            <span>Defense</span>
            <div>
              <button onClick={() => this.updateStatHandler('defense', true)}>+</button>
              <button onClick={() => this.updateStatHandler('defense', false)}>-</button>
            </div>
            <span>{this.state.defense}</span>
          </div>
          <div className="stat-line">
            <span>Agility</span>
            <div>
              <button onClick={() => this.updateStatHandler('agility', true)}>+</button>
              <button onClick={() => this.updateStatHandler('agility', false)}>-</button>
            </div>
            <span>{this.state.agility}</span>
          </div>
          <div className="stat-line">
            <span>Intelligence</span>
            <div>
              <button onClick={() => this.updateStatHandler('intelligence', true)}>+</button>
              <button onClick={() => this.updateStatHandler('intelligence', false)}>-</button>
            </div>
            <span>{this.state.intelligence}</span>
          </div>
          <div className="stat-line">
            <span>Strength</span>
            <div>
              <button onClick={() => this.updateStatHandler('strength', true)}>+</button>
              <button onClick={() => this.updateStatHandler('strength', false)}>-</button>
            </div>

            <span>{this.state.strength}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroCreatePage