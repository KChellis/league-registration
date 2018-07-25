import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={}
    };

  }
  render() {

    return (
      <div >
        <Header/>
        <Switch>
          <Route exact path='/' component= {Leagues} />
          <Route path='/register' component={Register} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
