import React, { useState, useEffect } from "react";


const Inings2 = ({innings}) => {


  console.log(innings)
  const [innings1, setInnings1] = useState(null);
  const [innings2, setInnings2] = useState(null);
  const [lastBallDetailsInings1, setLastBallDetailsInings1] = useState({});
  const [lastBallDetailsInings2, setLastBallDetailsInings2] = useState({});
  const [oversInings1, setoversInings1] = useState([]);
  const [oversInings2, setoversInings2] = useState([]);


  //grouping balls by over
  function groupBallsByOver(balls) {
    
    
    const overs = {};

    balls.forEach((ball) => {
      if (!overs[ball.overNumber]) {
        overs[ball.overNumber] = {
          overNumber: ball.overNumber,
          balls: [],
        };
      }
      overs[ball.overNumber].balls.push(ball);
    });

    

    return Object.values(overs); // Convert the overs object to an array of objects with over number
  }

  useEffect(() => {
    const setIningsWise = (innings) => {
      if (innings && innings[0]) setInnings1(innings[0]);
      if (innings && innings[1]) setInnings2(innings[1]);
      console.log(innings);
      
      
      

    };

    setIningsWise(innings);
    if (innings && innings[0]) {
      setLastBallDetailsInings1(innings[0].balls[innings[0].balls.length - 1]);
      setoversInings1(groupBallsByOver(innings[0].balls).reverse());
    }

    if (innings && innings[1]) {
      setLastBallDetailsInings2(innings[1].balls[innings[1].balls.length - 1]);
      setoversInings2(groupBallsByOver(innings[1].balls).reverse());
    }


    
    
  }, [innings]);

  return (
    <div className="w-[100%] h-[70%] flex flex-col ">
      <div className="w-[100%] h-[100%] flex justify-between flex-col gap-[0.5rem] text-white ">
        {innings1 !== null && (
          <div className="w-[100%] h-[48%]  flex flex-col">
            <span className="text-[26px] font-bold ">Innings 1</span>
            <div className="w-[100%] h-[105%] border rounded-[10px] flex flex-col justify-between p-[0.5rem] border-[#434343]">
              <div className="w-[100%] h-[48%] flex justify-between">
                <div className="w-[32%] h-[100%]  flex flex-col justify-center">
                  <span>
                    Batting Team -{" "}
                    <span className="font-bold text-[22px] text-[#34e8eb]">
                      {innings1.battingTeamName}
                    </span>{" "}
                    <span className="font-bold text-[22px] ml-[10px]">
                      {lastBallDetailsInings1 && lastBallDetailsInings1.totalScore} -{" "}
                      {lastBallDetailsInings1 && lastBallDetailsInings1.wicketNumber}
                    </span>
                  </span>
                  <span>
                    Bowling Team -{" "}
                    <span className="font-bold text-[22px] text-[#bff23d]">
                      {innings1.bowlingTeamName}
                    </span>
                  </span>
                </div>
                <div className="w-[32%] h-[100%]  flex flex-col items-center justify-center">
                  <span>
                    Striker -{" "}
                    <span className="font-bold text-[22px]">
                      {lastBallDetailsInings1 && lastBallDetailsInings1.striker}
                    </span>
                  </span>
                  <span>
                    Non-Striker -{" "}
                    <span className="font-bold text-[22px]">
                      {lastBallDetailsInings1 && lastBallDetailsInings1.nonStriker}
                    </span>
                  </span>
                </div>
                <div className="w-[32%] h-[100%]  flex flex-col items-end justify-center">
                  <span>
                    Bowler -{" "}
                    <span className="font-bold text-[22px]">
                      {lastBallDetailsInings1.bowler}
                    </span>
                  </span>
                </div>
              </div>
              <div className="w-[100%] h-[48%] border bg-white rounded-[10px] text-black flex overflow-x-scroll scrollable-content custom-scrollbar p-[0.5rem] gap-[1rem]">
                {oversInings1 !== null &&
                  oversInings1.map((over) => (
                    <div className="w-auto h-[100%] flex-shrink-0">
                      <span className="font-bold">Over {over.overNumber}</span>
                      <div className="w-[100%] h-[70%] bg-[#D9D9D9] rounded-[100px] flex items-center p-[0.4rem] justify-between gap-[0.4rem]">
                        {over.balls.map((ball) => (
                          <div className={`w-[40px] h-[100%] font-bold text-[12px] border rounded-[100px] bg-white flex items-center justify-center` }>
                            {ball.wicket !== "NONE" ? (
                              <>W</>
                            ) : (
                              <>{ball.runsScored}</>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
        {innings2 !== null &&   (
          <div className="w-[100%] h-[48%]  flex flex-col">
            <span className="text-[26px] font-bold ">Innings 2</span>
            <div className="w-[100%] h-[105%] border rounded-[10px] flex flex-col justify-between p-[0.5rem] border-[#434343]">
              <div className="w-[100%] h-[48%] flex justify-between">
                <div className="w-[32%] h-[100%]  flex flex-col justify-center">
                  <span>
                    Batting Team -{" "}
                    <span className="font-bold text-[22px] text-[#34e8eb]">
                      {innings2.battingTeamName}
                    </span>{" "}
                    <span className="font-bold text-[22px] ml-[10px]">
                      {lastBallDetailsInings2 && lastBallDetailsInings2.totalScore} -{" "}
                      {lastBallDetailsInings2 && lastBallDetailsInings2.wicketNumber}
                    </span>
                  </span>
                  <span>
                    Bowling Team -{" "}
                    <span className="font-bold text-[22px] text-[#bff23d]">
                      {innings2.bowlingTeamName}
                    </span>
                  </span>
                </div>
                <div className="w-[32%] h-[100%]  flex flex-col items-center justify-center">
                  <span>
                    Striker -{" "}
                    <span className="font-bold text-[22px]">
                      {lastBallDetailsInings2 && lastBallDetailsInings2.striker}
                    </span>
                  </span>
                  <span>
                    Non-Striker -{" "}
                    <span className="font-bold text-[22px]">
                      {lastBallDetailsInings2 && lastBallDetailsInings2.nonStriker}
                    </span>
                  </span>
                </div>
                <div className="w-[32%] h-[100%]  flex flex-col items-end justify-center">
                  <span>
                    Bowler -{" "}
                    <span className="font-bold text-[22px]">
                      {lastBallDetailsInings2 && lastBallDetailsInings2.bowler}
                    </span>
                  </span>
                </div>
              </div>
              <div className="w-[100%] h-[48%] border bg-white rounded-[10px] text-black flex overflow-x-scroll scrollable-content custom-scrollbar p-[0.5rem] gap-[1rem]">
                {oversInings2 !== null &&
                  oversInings2.map((over) => (
                    <div className="w-auto h-[100%] flex-shrink-0">
                      <span className="font-bold">Over {over.overNumber}</span>
                      <div className="w-[100%] h-[70%] bg-[#D9D9D9] rounded-[100px] flex items-center p-[0.4rem] justify-between gap-[0.4rem]">
                        {over.balls.map((ball) => (
                          <div className="w-[40px] h-[100%] font-bold text-[12px] border rounded-[100px] bg-white flex items-center justify-center">
                            {ball.wicket !== "NONE" ? (
                              <>W</>
                            ) : (
                              <>{ball.runsScored}</>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Inings2;