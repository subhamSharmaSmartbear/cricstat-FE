import React from "react";

// Helper function to calculate batting and bowling stats
const calculateStats = (innings) => {
  const battingStats = {};
  const bowlingStats = {};

  innings.forEach((inning) => {
    if (inning && inning.balls) {
      inning.balls.forEach((ball) => {
        // Update batting stats
        if (!battingStats[ball.striker]) {
          battingStats[ball.striker] = {
            runs: 0,
            balls: 0,
            dotBalls: 0,
            fours: 0,
            sixes: 0,
          };
        }
        if (ball.wicket !== "NONE") {
          // Wickets are not counted in this table
        } else {
          battingStats[ball.striker].runs += ball.runsScored;
          battingStats[ball.striker].balls += 1;

          // Track dot balls, fours, and sixes
          if (ball.runsScored === 0) {
            battingStats[ball.striker].dotBalls += 1;
          } else if (ball.runsScored === 4) {
            battingStats[ball.striker].fours += 1;
          } else if (ball.runsScored === 6) {
            battingStats[ball.striker].sixes += 1;
          }
        }

        // Update bowling stats
        if (ball && !bowlingStats[ball.bowler]) {
          bowlingStats[ball.bowler] = {
            runs: 0,
            balls: 0,
            wickets: 0,
            maidenOvers: 0,
          };
        }
        bowlingStats[ball.bowler].runs += ball.runsScored;
        bowlingStats[ball.bowler].balls += 1;
        if (ball.wicket !== "NONE") {
          bowlingStats[ball.bowler].wickets += 1;
        }

        // Track maiden overs
        if (ball.runsScored === 0 && ball.wicket === "NONE") {
          bowlingStats[ball.bowler].maidenOvers += 1;
        }
      });
    }
  });

  return { battingStats, bowlingStats };
};

// Calculate winner based on total score
const calculateWinner = (team1Score, team2Score, team1Name, team2Name) => {
  if (team1Score > team2Score) return `${team1Name} wins`;
  if (team1Score < team2Score) return `${team2Name} wins`;
  return "It's a tie";
};

const Table = ({ innings }) => {
  const team1Innings = innings[0];
  const team2Innings = innings[1];

  const { battingStats: team1BattingStats, bowlingStats: team1BowlingStats } =
    calculateStats([team1Innings]);
  const { battingStats: team2BattingStats, bowlingStats: team2BowlingStats } =
    calculateStats([team2Innings]);

  var team1TotalScore;
  if (team1Innings && team1Innings.balls) {
    team1TotalScore = team1Innings.balls.reduce(
      (acc, ball) => acc + ball.runsScored,
      0
    );
  }
  var team2TotalScore;
  if (team2Innings && team2Innings.balls) {
    team2TotalScore = team2Innings.balls.reduce(
      (acc, ball) => acc + ball.runsScored,
      0
    );
  }

  const winner = calculateWinner(
    team1TotalScore,
    team2TotalScore,
    team1Innings?.battingTeamName,
    team2Innings?.battingTeamName
  );

  return (
    <div className="container h-[70%] rounded-[10px] p-4">
      <h1 className="text-center text-2xl font-bold mb-4">
        Match Result: {winner}
      </h1>

      <div className="table-container w-[100%] h-[90%] overflow-x-scroll">
        <h2 className="table-header text-xl font-semibold">
          {team1Innings?.battingTeamName} Batting Stats
        </h2>
        <table className="stats-table">
          <thead>
            <tr>
              <th>Player</th>
              <th>Runs</th>
              <th>Balls Faced</th>
              <th>Dot Balls</th>
              <th>Fours</th>
              <th>Sixes</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(team1BattingStats).map(([player, stats]) => (
              <tr key={player}>
                <td>{player}</td>
                <td>{stats.runs}</td>
                <td>{stats.balls}</td>
                <td>{stats.dotBalls}</td>
                <td>{stats.fours}</td>
                <td>{stats.sixes}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="table-header text-xl font-semibold">
          {team1Innings?.bowlingTeamName} Bowling Stats
        </h2>
        <table className="stats-table">
          <thead>
            <tr>
              <th>Player</th>
              <th>Runs Conceded</th>
              <th>Balls Bowled</th>
              <th>Wickets</th>
              <th>Maiden Overs</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(team1BowlingStats).map(([player, stats]) => (
              <tr key={player}>
                <td>{player}</td>
                <td>{stats.runs}</td>
                <td>{stats.balls}</td>
                <td>{stats.wickets}</td>
                <td>{stats.maidenOvers}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="table-header text-xl font-semibold">
          {team2Innings?.battingTeamName} Batting Stats
        </h2>
        <table className="stats-table">
          <thead>
            <tr>
              <th>Player</th>
              <th>Runs</th>
              <th>Balls Faced</th>
              <th>Dot Balls</th>
              <th>Fours</th>
              <th>Sixes</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(team2BattingStats).map(([player, stats]) => (
              <tr key={player}>
                <td>{player}</td>
                <td>{stats.runs}</td>
                <td>{stats.balls}</td>
                <td>{stats.dotBalls}</td>
                <td>{stats.fours}</td>
                <td>{stats.sixes}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="table-header text-xl font-semibold">
          {team2Innings?.bowlingTeamName} Bowling Stats
        </h2>
        <table className="stats-table">
          <thead>
            <tr>
              <th>Player</th>
              <th>Runs Conceded</th>
              <th>Balls Bowled</th>
              <th>Wickets</th>
              <th>Maiden Overs</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(team2BowlingStats).map(([player, stats]) => (
              <tr key={player}>
                <td>{player}</td>
                <td>{stats.runs}</td>
                <td>{stats.balls}</td>
                <td>{stats.wickets}</td>
                <td>{stats.maidenOvers}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
