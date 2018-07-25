import React from 'react';
import Header from './Header';
import LeagueList from './LeagueList';
import TeamList from './TeamList';
import Register from './Register';
import Error404 from './Error404';
import { Switch, Route} from 'react-router-dom';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      masterTeamList: [
        {
          name: 'Ingalls',
          color: 'Yellow',
          captain: 'Andy Fitterer',
          wins: 12,
          losses: 2,
          draws: 0,
          pointsFor: 116,
          pointsAgainst: 59,
          members: ['Andy Fitterer', 'Jesse Gambetti', 'Miranda Gambetti', 'Chris Lewis', 'Erik Johnson']
        },
        {
          name: 'Army of Darkness',
          color: 'Black',
          captain: 'Mark Dobrowski',
          wins: 1,
          losses: 13,
          draws: 0,
          pointsFor: 51,
          pointsAgainst: 141,
          members: ['Mark Dobrowski', 'Christine Meyer', 'Greg Burkhead', 'Megan Schellhous', 'Sammy Harbert']
        },
        {
          name: 'Hammerside',
          color: 'Blue',
          captain: 'Jeff Benson',
          wins: 7,
          losses: 5,
          draws: 2,
          pointsFor: 86,
          pointsAgainst: 72,
          members: ['Jeff Benson', 'Carrie OToole', 'Kate Evans', 'Bradford Gerke', 'Charmaine Learnard']
        }
      ]
    };
  }

  render(){

    return (
      <div >
        <Header/>
        <Switch>
          <Route exact path='/' component= {LeagueList} />
          <Route path='/register' render={()=><Register teamList={this.state.masterTeamList} /> } />
          <Route path='/myTeams' render={()=><TeamList teamList={this.state.masterTeamList} /> } />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
