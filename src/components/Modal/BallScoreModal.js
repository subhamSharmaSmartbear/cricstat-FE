import React from "react";
import Select from "react-dropdown-select";
import { Formik } from "formik";
import * as Yup from "yup";
const BallScoreModal = ({setBallScore}) => {


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
    <div className="w-[100%]  h-[60%] flex items-center justify-center">
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
          <div className="login z-[10] self-center justify-self-center w-[100%] h-[50%] flex  justify-center ">
            <div className="form w-[100%] h-[70%] flex justify-center">
              <form
                onSubmit={handleSubmit}
                className="w-[100%]  h-[100%] bg-[#434343] rounded-[10px] flex items-center justify-center gap-[0.5rem]"
              >  
                  <Select
                    className="bg-white text-gray"
                    options={players15.map((player) => {
                      return {
                        label: player.label,
                        value: player.value,
                      };
                    })}
                    name="batter"
                    placeholder="Select Batter"
                    onChange={(value) =>
                      setFieldValue(
                        "players11",
                        value.map((val) => val.value)
                      )
                    }
                    
                  />
                  <Select
                    className="bg-white text-gray"
                    options={players15.map((player) => {
                      return {
                        label: player.label,
                        value: player.value,
                      };
                    })}
                    name="baller"
                    placeholder="Select Baller"
                    onChange={(value) =>
                      setFieldValue(
                        "players11",
                        value.map((val) => val.value)
                      )
                    }
                    
                  />
                  <Select
                    className="bg-white text-gray"
                    options={values.players15.map((player) => {
                      return {
                        label: player.label,
                        value: player.value,
                      };
                    })}
                    name="type"
                    placeholder="Ball Type"
                    onChange={(value) =>
                      setFieldValue(
                        "players11",
                        value.map((val) => val.value)
                      )
                    }
                    
                  />
                  <Select
                    className="bg-white text-gray"
                    options={values.players15.map((player) => {
                      return {
                        label: player.label,
                        value: player.value,
                      };
                    })}
                    name="run"
                    placeholder="Ball Runs"
                    onChange={(value) =>
                      setFieldValue(
                        "players11",
                        value.map((val) => val.value)
                      )
                    }
                    
                  />

                  <button type="submit" onClick={()=>setBallScore("false")} className="bg-white text-gray px-[1rem] py-[0.4rem]">Submit</button>

                  
                
                
              </form>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default BallScoreModal;

