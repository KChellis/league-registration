import React from 'react';
import Header from './Header';
import LeagueList from './LeagueList';
import Register from './Register';
import Error404 from './Error404';
import { Switch, Route} from 'react-router-dom';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={};
  }

  render(){

    return (
      <div >
        <Header/>
        <Switch>
          <Route exact path='/' component= {LeagueList} />
          <Route path='/register' component={Register} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
