import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class League extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      clicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    if(this.state.clicked){
      this.setState({clicked: false});
    }else{
      this.setState({clicked: true});
    }
  }

  render(){
    if(this.state.clicked){
      return (
        <div className="league">
          <style jsx>
            {`
              .league{
                border: 2px solid black;
              }
              `}
          </style>
          <h3>{this.props.name}</h3>
          <hr/>
          <p>{this.props.weekday}s starting {this.props.startDate} at {this.props.field}</p>
          <p>Games start as early as {this.props.earlyTime} and as late as {this.props.lateTime}</p>
          <p>End of Season Tournament is on {this.props.tourneyDay}</p>
          <p>{this.props.description}</p>
          <h4><Link to="/register">Register</Link></h4>
          <button onClick={this.handleClick}>Show less</button>

        </div>
      );

    }else{
      return (
        <div className="league">
          <style jsx>
            {`
              .league{
                border: 2px solid black;
              }
              `}
          </style>
          <h3>{this.props.name}</h3>
          <hr/>
          <p>{this.props.weekday}s starting {this.props.startDate} at {this.props.field}</p>
          <h4><Link to="/register">Register</Link></h4>
          <button onClick={this.handleClick}>Show More</button>
        </div>
      );
    }


  }

}

League.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  weekday: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  startDate: PropTypes.instanceOf(Date).isRequired,
  earlyTime: PropTypes.string.isRequired,
  lateTime: PropTypes.string.isRequired,
  tourneyDay: PropTypes.instanceOf(Date).isRequired
};

export default League;
