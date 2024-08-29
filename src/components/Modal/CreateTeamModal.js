import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Select from "react-dropdown-select";

const CreateTeamModal = ({setCreateTeamModal}) => {
  
  const players15 = [
    {
      label: "Plyer A ",
      value: {
        id: 1,
        name: "Player A",
        dateOfBirth: "1990-01-15",
        specialization: "Batter",
        gender: "Male",
        country: "Australia",
        playedMatches: 0,
        runs: 0,
        highScore: 0,
        strikeRate: 0.0,
        numberOf50s: 0,
        numberOf100s: 0,
        profilePicture: null,
      },
    },
    {
      label: "Player C",
      value: {
        id: 3,
        name: "Player C",
        dateOfBirth: "1992-03-17",
        specialization: "All-Rounder",
        gender: "Male",
        country: "Australia",
        playedMatches: 0,
        runs: 0,
        highScore: 0,
        strikeRate: 0.0,
        numberOf50s: 0,
        numberOf100s: 0,
        profilePicture: null,
      },
    },
    {
      label: "Player D",
      value: {
        id: 4,
        name: "Player D",
        dateOfBirth: "1993-04-18",
        specialization: "Batter",
        gender: "Female",
        country: "Australia",
        playedMatches: 0,
        runs: 0,
        highScore: 0,
        strikeRate: 0.0,
        numberOf50s: 0,
        numberOf100s: 0,
        profilePicture: null,
      },
    },
    {
      label: "Player E",
      value: {
        id: 5,
        name: "Player E",
        dateOfBirth: "1994-05-19",
        specialization: "Bowler",
        gender: "Male",
        country: "Australia",
        playedMatches: 0,
        runs: 0,
        highScore: 0,
        strikeRate: 0.0,
        numberOf50s: 0,
        numberOf100s: 0,
        profilePicture: null,
      },
    },
    {
      label: "Player F",
      value: {
        id: 6,
        name: "Player F",
        dateOfBirth: "1995-06-20",
        specialization: "All-Rounder",
        gender: "Female",
        country: "Australia",
        playedMatches: 0,
        runs: 0,
        highScore: 0,
        strikeRate: 0.0,
        numberOf50s: 0,
        numberOf100s: 0,
        profilePicture: null,
      },
    },
    {
      label: "Player G",
      value: {
        id: 7,
        name: "Player G",
        dateOfBirth: "1996-07-21",
        specialization: "Batter",
        gender: "Male",
        country: "Australia",
        playedMatches: 0,
        runs: 0,
        highScore: 0,
        strikeRate: 0.0,
        numberOf50s: 0,
        numberOf100s: 0,
        profilePicture: null,
      },
    },
    {
      label: "Player H",
      value: {
        id: 8,
        name: "Player H",
        dateOfBirth: "1997-08-22",
        specialization: "Bowler",
        gender: "Female",
        country: "Australia",
        playedMatches: 0,
        runs: 0,
        highScore: 0,
        strikeRate: 0.0,
        numberOf50s: 0,
        numberOf100s: 0,
        profilePicture: null,
      },
    },
    {
      label: "Player I",
      value: {
        id: 9,
        name: "Player I",
        dateOfBirth: "1998-09-23",
        specialization: "All-Rounder",
        gender: "Male",
        country: "Australia",
        playedMatches: 0,
        runs: 0,
        highScore: 0,
        strikeRate: 0.0,
        numberOf50s: 0,
        numberOf100s: 0,
        profilePicture: null,
      },
    },
    {
      label: "Player J",
      value: {
        id: 10,
        name: "Player J",
        dateOfBirth: "1999-10-24",
        specialization: "Batter",
        gender: "Female",
        country: "Australia",
        playedMatches: 0,
        runs: 0,
        highScore: 0,
        strikeRate: 0.0,
        numberOf50s: 0,
        numberOf100s: 0,
        profilePicture: null,
      },
    },
    {
      label: "Player K",
      value: {
        id: 11,
        name: "Player K",
        dateOfBirth: "2000-11-25",
        specialization: "Bowler",
        gender: "Male",
        country: "Australia",
        playedMatches: 0,
        runs: 0,
        highScore: 0,
        strikeRate: 0.0,
        numberOf50s: 0,
        numberOf100s: 0,
        profilePicture: null,
      },
    },
    {
      label: "Player L",
      value: {
        id: 12,
        name: "Player L",
        dateOfBirth: "1985-01-05",
        specialization: "Batter",
        gender: "Male",
        country: "India",
        playedMatches: 0,
        runs: 0,
        highScore: 0,
        strikeRate: 0.0,
        numberOf50s: 0,
        numberOf100s: 0,
        profilePicture: null,
      },
    },
    {
      label: "Player M",
      value: {
        id: 13,
        name: "Player M",
        dateOfBirth: "1986-02-06",
        specialization: "Bowler",
        gender: "Female",
        country: "India",
        playedMatches: 0,
        runs: 0,
        highScore: 0,
        strikeRate: 0.0,
        numberOf50s: 0,
        numberOf100s: 0,
        profilePicture: null,
      },
    },
    {
      label: "Player N",
      value: {
        id: 14,
        name: "Player N",
        dateOfBirth: "1987-03-07",
        specialization: "All-Rounder",
        gender: "Male",
        country: "India",
        playedMatches: 0,
        runs: 0,
        highScore: 0,
        strikeRate: 0.0,
        numberOf50s: 0,
        numberOf100s: 0,
        profilePicture: null,
      },
    },
    {
      label: "Player O",
      value: {
        id: 15,
        name: "Player O",
        dateOfBirth: "1988-04-08",
        specialization: "Batter",
        gender: "Female",
        country: "India",
        playedMatches: 0,
        runs: 0,
        highScore: 0,
        strikeRate: 0.0,
        numberOf50s: 0,
        numberOf100s: 0,
        profilePicture: null,
      },
    },
    {
      label: "Player P",
      value: {
        id: 16,
        name: "Player P",
        dateOfBirth: "1989-05-09",
        specialization: "Bowler",
        gender: "Male",
        country: "India",
        playedMatches: 0,
        runs: 0,
        highScore: 0,
        strikeRate: 0.0,
        numberOf50s: 0,
        numberOf100s: 0,
        profilePicture: null,
      },
    },
  ];

  const schema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    players15: Yup.array().required("Players is a required field"),
    players11: Yup.array().required("Players is a required field"),
  });
  return (
    <div className="w-[100vw] h-[100vh] absolute border bg-[#D9D9D9] top-0 left-0 right-0 bottom-0 bg-opacity-80 flex items-center justify-center">
      <Formik
        validationSchema={schema}
        initialValues={{ name: "", players15: [], players11: [] }}
        onSubmit={(values) => {
          // Alert the input values of the form that we filled
          console.log(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
        }) => (
          <div className="login z-[10] self-center justify-self-center ">
            <div className="form">
              <form
                onSubmit={handleSubmit}
                className="w-[50vw] max-h-[90vh] relative bg-black rounded-[10px] flex items-center flex-col p-[1rem]  justify-between"
              >
                <span className="text-white font-bold text-[28px] text-center">
                  Create Team <br />{" "}
                  <span className="text-[14px] font-light">
                    Coach - Gautam Gambhir
                  </span>{" "}
                </span>

                <div className="w-[80%] h-[82%] flex flex-col gap-[1rem]">
                  <span className="text-white">Team name</span>
                  <input
                    placeholder="Team Name"
                    className="w-[100%] h-[2.5rem] rounded-[5px] px-[1rem]"
                    value={values.name}
                    onChange={handleChange}
                    name="name"
                  />

                  <span className="text-white">Select 15 players</span>
                  <Select
                    className="bg-white text-gray"
                    options={players15.map((player) => {
                      return {
                        label:
                          player.label +
                          " ( " +
                          player.value.specialization +
                          " | " +
                          player.value.country +
                          " )",
                        value: player.value,
                      };
                    })}
                    placeholder="Select 15 players"
                    onChange={(values) => setFieldValue("players15", values)}
                    multi
                  />
                  <span className="text-white">Select playing 11</span>
                  <Select
                    className="bg-white text-gray"
                    options={values.players15.map((player) => {
                      return {
                        label: player.label,
                        value: player.value,
                      };
                    })}
                    name="players11"
                    placeholder="Select playing 11"
                    onChange={(value) =>
                      setFieldValue(
                        "players11",
                        value.map((val) => val.value)
                      )
                    }
                    multi
                  />
                  <span className="text-white">Select a captain</span>
                  <Select
                    className="bg-white text-gray"
                    name="captain"
                    options={values.players11.map((player) => {
                      return {
                        label:
                          player.name +
                          " ( " +
                          player.specialization +
                          " | " +
                          player.country +
                          " )",
                        value: {
                          id: player.id,
                          name: player.name,
                          dateOfBirth: player.dateOfBirth,
                          specialization: player.specialization,
                          gender: player.gender,
                          country: player.country,
                          playedMatches: player.playedMatches,
                          runs: player.runs,
                          highScore: player.highScore,
                          strikeRate: player.strikeRate,
                          numberOf50s: player.numberOf50s,
                          numberOf100s: player.numberOf100s,
                          profilePicture: player.profilePicture,
                        },
                      };
                    })}
                    placeholder="Select Captain"
                    onChange={(value) => setFieldValue("captain", value)}
                  />
                  <span className="text-white">Select a wicket Keeper</span>
                  <Select
                    className="bg-white text-gray"
                    name="wicketKeeper"
                    options={values.players11.map((player) => {
                      return {
                        label:
                          player.name +
                          " ( " +
                          player.specialization +
                          " | " +
                          player.country +
                          " )",
                        value: {
                          id: player.id,
                          name: player.name,
                          dateOfBirth: player.dateOfBirth,
                          specialization: player.specialization,
                          gender: player.gender,
                          country: player.country,
                          playedMatches: player.playedMatches,
                          runs: player.runs,
                          highScore: player.highScore,
                          strikeRate: player.strikeRate,
                          numberOf50s: player.numberOf50s,
                          numberOf100s: player.numberOf100s,
                          profilePicture: player.profilePicture,
                        },
                      };
                    })}
                    placeholder="Select Wicket Keeper"
                    onChange={(value) => setFieldValue("wicketKeeper", value)}
                  />

                  <button
                    className="text-white justify-self-end border w-[10rem] p-[0.5rem]"
                    type="submit"
                  >
                    Create
                  </button>
                </div>
                <button
                  className="absolute text-white right-5 top-5"
                  onClick={() => setCreateTeamModal("false")}
                >
                  Close X
                </button>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default CreateTeamModal;
