import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Squad from '../components/Teams/Squad';
import Matches from '../components/Matches/Matches';
import Statistics from '../components/Stats/Statistics';
import Tournaments from '../components/Tournaments/Tournaments';
import ManageTeamModal from '../components/Modal/ManageTeamModal';
import Error from '../components/Utilities/Error';
import toast from 'react-hot-toast';

const Team = () => {
  const [type, setType] = useState("squad");
  const [manageTeamModal, setManageTeamModal] = useState(false);
  const { id } = useParams();
  const [team, setTeam] = useState(null);
  const [loading, setLoading] = useState(true); // For loading state
  const [error, setError] = useState(null); // For error state

  useEffect(() => {
    const getTeam = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL_AUTH}api/teams/${id}`,
          { method: "GET", headers: { "Content-Type": "application/json" } }
        );

        if (response.ok) {
          const data = await response.json();
          setTeam(data); // Store team data
        } else {
          throw new Error("Error fetching team");
        }
      } catch (error) {
        setError(error.message);
        toast.error("Error fetching team");
      } finally {
        setLoading(false); // Set loading to false when data is fetched or error occurs
      }
    };

    getTeam();
  }, [id]);

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <div className="w-[100%] h-[100%] flex flex-col items-center gap-[1rem] overflow-y-hidden bg-black rounded-[10px] p-[2rem]">
      {team !== null && (
        <div className='w-[100%] h-[20%] flex justify-between gap-[1rem]'>
          <div className='w-[20%] h-[100%]'>
            <img src={team.icon} className='w-[100%] h-[100%]' alt='team_logo' />
          </div>
          <div className='w-[60%] h-[100%] flex flex-col'>
            <span className='text-white text-[32px] font-bold truncate'>{team.name}</span>
            <span className='font-extralight text-white'>Total Matches Played: {team.matchesPlayed}</span>
            <span className='font-extralight text-white'>Total Matches Won: {team.matchesWon}</span>
          </div>
          <div className='w-[20%] h-[100%] font-extralight text-white flex flex-col'>
            <span>Coach: {team.coachName}</span>
            <span>Captain: {team.teamCaptain}</span>
          </div>
        </div>
      )}
      <div className='w-[90%] h-[0.3rem] bg-[#434343] rounded-[10px]'></div>
      <div className='w-[60%] h-[6%] rounded-[10px] bg-[#434343] text-white font-bold flex items-center justify-around'>
        <button onClick={() => setType("squad")} className={`${type === "squad" && "text-[#FF730D]"}`}>Squad</button>
        <button onClick={() => setType("matches")} className={`${type === "matches" && "text-[#FF730D]"}`}>Matches</button>
        <button onClick={() => setType("tournaments")} className={`${type === "tournaments" && "text-[#FF730D]"}`}>Tournaments</button>
        <button onClick={() => setType("statistics")} className={`${type === "statistics" && "text-[#FF730D]"}`}>Statistics</button>
      </div>
      {
        type === "squad" && team !== null && <Squad players={team.players} />
      }
      {
        type === "matches" && <Matches />
      }
      {
        type === "tournaments" && <Tournaments />
      }
      {
        type === "statistics" && <Statistics />
      }
      {manageTeamModal && (
        <ManageTeamModal setManageTeamModal={setManageTeamModal} />
      )}
    </div>
  );
}

export default Team;
