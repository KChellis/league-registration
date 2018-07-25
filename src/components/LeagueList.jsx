import React from 'react';
import League from './League';

function LeagueList(){
  let masterLeagueList = [
    {
      name: 'Fast Pitch Kickball',
      description: 'A description of the league',
      weekday: 'Sunday',
      field: 'Glenhaven Park',
      startDate: new Date(2018-9-9),
      earlyTime: '10:00 AM',
      lateTime: '5:00 PM',
      tourneyDay: new Date(2018-10-29)
    },
    {
      name: 'Slow Pitch Kickball',
      description: 'A description of the league',
      weekday: 'Sunday',
      field: 'Glenhaven Park',
      startDate: new Date(2018-10-29),
      earlyTime: '10:00 AM',
      lateTime: '5:00 PM',
      tourneyDay: new Date(2018-10-29)
    },
    {
      name: 'Elite Dodgeball',
      description: 'A description of the league',
      weekday: 'Thursday',
      field: 'Eastmoreland Courts',
      startDate: new Date(2018-10-29),
      earlyTime: '6:00 PM',
      lateTime: '9:40 PM',
      tourneyDay: new Date(2018-10-29)
    },
    {
      name: 'Fun Dodgeball',
      description: 'A description of the league',
      weekday: 'Thursday',
      field: 'Eastmoreland Courts',
      startDate: new Date(2018-10-29),
      earlyTime: '6:00 PM',
      lateTime: '9:40 PM',
      tourneyDay: new Date(2018-10-29)
    }
  ];
  return(
    <div>
      <h2>Choose a league:</h2>
      {masterLeagueList.map((league, index) =>
        <League name={league.name}
          description = {league.description}
          weekday = {league.weekday}
          field = {league.field}
          earlyTime = {league.earlyTime}
          lateTime = {league.lateTime}
          key={index}/>
      )}
    </div>
  );
}

export default LeagueList;
