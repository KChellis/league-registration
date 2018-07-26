import React from 'react';
import TeamDetail from './TeamDetail';
import PropTypes from 'prop-types';

function TeamList(props){

  return(
    <div>
      <h2>My Teams</h2>
      {props.teamList.map((team, index) =>
        <TeamDetail name={team.name}
          captain = {team.captain}
          color = {team.color}
          wins = {team.wins}
          losses = {team.losses}
          draws = {team.draws}
          pointsFor = {team.pointsFor}
          pointsAgainst = {team.pointsAgainst}
          members = {team.members}
          key={index}/>
      )}
    </div>
  );
}

TeamList.propTypes = {
  teamList: PropTypes.array
};

export default TeamList;
