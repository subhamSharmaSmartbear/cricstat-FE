import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Table = () => {
  const [players, setPlayers] = useState([]);
  const { id } = useParams();


  //function to get the player stats.

  useEffect(() => {
    const getPlayerStats = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL_GAME_ENGINE}api/admin/tournaments/player-stats/${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const result = await response.json();
          setPlayers(result); // Update the state with the fetched players
          
        } else {
          throw new Error("Failed to fetch player");
        }
      } catch (error) {
      }
    };

    getPlayerStats();
  }, [id]);

  // Helper function to categorize players by playerType
  const categorizePlayers = (teamPlayers) => {
    const batters = teamPlayers.filter(player => player.playerType === 'Batsman');
    const bowlers = teamPlayers.filter(player => player.playerType === 'Bowler');
    const allRounders = teamPlayers.filter(player => player.playerType === 'All-Rounder');
    return { batters, bowlers, allRounders };
  };

  // Helper function to group players by country (teamName)
  const groupPlayersByCountry = (players) => {
    return players.reduce((acc, player) => {
      if (!acc[player.teamName]) {
        acc[player.teamName] = [];
      }
      acc[player.teamName].push(player);
      return acc;
    }, {});
  };

  // Calculate total runs for a team
  const calculateTotalRuns = (teamPlayers) => {
    return teamPlayers.reduce((total, player) => total + player.runs, 0);
  };

  // Reusable component to render players by category
  const renderPlayerCategory = (categoryPlayers, title) => (
    <>
      <h3 className="text-[24px] text-yellow-400 font-semibold py-2">{title}</h3>
      <table className="w-full text-left rtl:text-right mb-4">
        <thead className="text-[16px] text-[#ffffff] font-extrabold uppercase border-b">
          <tr>
            <th scope="col" className="px-6 py-3">Player</th>
            <th scope="col" className="px-6 py-3">Matches</th>
            <th scope="col" className="px-6 py-3">Runs</th>
            <th scope="col" className="px-6 py-3">Fours</th>
            <th scope="col" className="px-6 py-3">Sixes</th>
            <th scope="col" className="px-6 py-3">Threes</th>
            <th scope="col" className="px-6 py-3">Twos</th>
            <th scope="col" className="px-6 py-3">Wickets Taken</th>
          </tr>
        </thead>
        <tbody className="text-[#989898]">
          {categoryPlayers.map((player) => (
            <tr key={player.id}>
              <th scope="row" className="px-6 py-4 whitespace-nowrap">
                {player.playerName}
              </th>
              <td className="px-6 py-4">1</td> {/* Assuming "Matches" is static */}
              <td className="px-6 py-4">{player.runs}</td>
              <td className="px-6 py-4">{player.fours}</td>
              <td className="px-6 py-4">{player.sixes}</td>
              <td className="px-6 py-4">{player.threes}</td>
              <td className="px-6 py-4">{player.twos}</td>
              <td className="px-6 py-4">{player.wicketsTaken}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );

  // Render team table with player categories and total runs
  const renderTeamTable = (teamPlayers, teamName) => {
    const { batters, bowlers, allRounders } = categorizePlayers(teamPlayers);
    const totalRuns = calculateTotalRuns(teamPlayers);

    return (
      <>
        <h2 className="text-[30px] text-white font-bold py-2">{teamName}</h2>
        {batters.length > 0 && renderPlayerCategory(batters, 'Batters')}
        {bowlers.length > 0 && renderPlayerCategory(bowlers, 'Bowlers')}
        {allRounders.length > 0 && renderPlayerCategory(allRounders, 'All-Rounders')}
        {/* <h3 className="text-[24px] text-green-400 font-bold py-2">Total Runs: {totalRuns}</h3> */}
      </>
    );
  };

  // Group players by country
  const playersByCountry = groupPlayersByCountry(players);

  // Calculate total runs for each country
  const countryTotals = Object.keys(playersByCountry).map((country) => ({
    country,
    totalRuns: calculateTotalRuns(playersByCountry[country])
  }));

  // Determine the winner (country with highest total runs)
  const winner = countryTotals.reduce((prev, current) =>
    current.totalRuns > prev.totalRuns ? current : prev, { totalRuns: 0 });

  return (
    <div className="relative overflow-x-auto w-[100%] h-[55%] bg-black scrollable-content custom-scrollbar border-none">
      {/* Render tables by country */}
      {winner && (
        <div className="py-4">
          <h2 className="text-[36px] text-green-400 animate-pulse font-bold">
            Winner: {winner.country} 
          </h2>
        </div>
      )}
      {Object.keys(playersByCountry).map((country) => (
        <div key={country}>
          
          {renderTeamTable(playersByCountry[country], country)}
        </div>
      ))}

      
      
    </div>
  );
};

export default Table;
