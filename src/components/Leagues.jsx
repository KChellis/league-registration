import React from 'react';

function Leagues(){
 masterLeagueList = [
   {
     name: "Fast Pitch Kickball",
     description: "A description of the league",
     weekday: "Sunday",
     field: "Glenhaven Park",
     startDate: new Date(09/10/2018),
     earlyTime: "10:00 AM",
     lateTime: "5:00 PM",
     tourneyDay: new Date(10/29/2018)
   },
   {
     name: "Slow Pitch Kickball",
     description: "A description of the league",
     weekday: "Sunday",
     field: "Glenhaven Park",
     startDate: new Date(09/10/2018),
     earlyTime: "10:00 AM",
     lateTime: "5:00 PM",
     tourneyDay: new Date(10/29/2018)
   },
   {
     name: "Elite Dodgeball",
     description: "A description of the league",
     weekday: "Thursday",
     field: "Eastmoreland Courts",
     startDate: new Date(08/20/2018),
     earlyTime: "6:00 PM",
     lateTime: "9:40 PM",
     tourneyDay: new Date(10/03/2018)
   },
   {
     name: "Fun Dodgeball",
     description: "A description of the league",
     weekday: "Thursday",
     field: "Eastmoreland Courts",
     startDate: new Date(08/20/2018),
     earlyTime: "6:00 PM",
     lateTime: "9:40 PM",
     tourneyDay: new Date(10/03/2018)
   }
 ]
  return(
    <div>
      <h2>Choose a league:</h2>


    </div>
  );
}

export default Leagues;
