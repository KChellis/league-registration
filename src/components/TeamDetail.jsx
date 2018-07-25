import React from 'react';
import PropTypes from 'prop-types';



class TeamDetail extends React.Component{
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
        <div className="team">
          <style jsx>
            {`
              .team{
                border: 2px solid black;
              }
              `}
          </style>
          <h3>{this.props.name}</h3>
          <hr/>
          <p><em>Captain:</em> {this.props.captain}</p>
          <p><em>Color:</em> {this.props.color}</p>
          <p><em>Wins:</em> {this.props.wins}, <em>Losses:</em> {this.props.losses}, <em>Draws:</em> {this.props.draws}</p>
          <p><em>Points Scored:</em> {this.props.pointsFor}, <em>Points Allowed:</em> {this.props.pointsAgainst}</p>
          <ul>
            {this.props.members.map((member) =>
              <li>{member}</li>
            )}
          </ul>
          <button onClick={this.handleClick}>Show less</button>

        </div>
      );

    }else{
      return (
        <div className="team">
          <style jsx>
            {`
              .team{
                border: 2px solid black;
              }
              `}
          </style>
          <h3>{this.props.name}</h3>
          <hr/>
          <p><em>Captain:</em> {this.props.captain}</p>
          <p><em>Color:</em> {this.props.captain}</p>
          <button onClick={this.handleClick}>Show More</button>
        </div>
      );
    }
  }

}

TeamDetail.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  captain: PropTypes.string.isRequired,
  wins: PropTypes.number.isRequired,
  losses: PropTypes.number.isRequired,
  draws: PropTypes.number.isRequired,
  pointsFor: PropTypes.number.isRequired,
  pointsAgainst: PropTypes.number.isRequired,
  members: PropTypes.array.isRequired
};

export default TeamDetail;
