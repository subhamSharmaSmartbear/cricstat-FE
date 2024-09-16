import React from "react";
import { useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Select from "react-dropdown-select";
import toast from "react-hot-toast";

const CreateTeamModal = ({ setCreateTeamModal }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [image, setImage] = useState("");
  const [allPlayers, setAllPlayers] = useState([]);
  const [showError, setShowError] = useState(false);

  const getAllPlayers = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL_AUTH}api/players/no-team`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const result = await response.json();
        setAllPlayers(Array.isArray(result) ? result : []);
      }
    } catch (error) {
      // toast.error("An error occurred: " + error.message);
    }
  };

  useEffect(() => {
    getAllPlayers();

    const errorTimeout = setTimeout(() => {
      if (!allPlayers.length) {
        setShowError(true);
      }
    }, 500);

    return () => clearTimeout(errorTimeout);
  }, []);

  const handleSubmit = async (values) => {
    const players15 = values.players15;
    const player15Count = players15.filter(
      (player) => player.value.country !== user.country
    ).length;

    if (player15Count > 5) {
      toast.error("More than 5 overseas players in a team is not allowed.");
      return;
    } else if (players15.length !== 15) {
      toast.error("Please add 15 players in the team.");
      return;
    }

    const player = values.players15.map((player) => player.value);

    values = {
      ...values,
      country: user.country,
      teamCaptain: values.teamCaptain[0].value.name,
      coachName: user.username,
      country: user.country,
      totalPoints: 0,
      players: player,
    };

    const formData = new FormData();
    for (let value in values) formData.append(value, values[value]);

    const data = new FormData();
    data.append("file", values.icon);
    data.append("upload_preset", "twinster");
    data.append("cloud_name", "dd2nvofv0");

    try {
      await fetch("https://api.cloudinary.com/v1_1/dd2nvofv0/image/upload", {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then(async (data) => {
          setImage(data.url);

          const response = await fetch(
            `${process.env.REACT_APP_API_URL_AUTH}api/teams/create`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ ...values, icon: data.url }),
            }
          );

          if (response.ok) {
            const responseData = await response.json();
            toast.success("Team Created.");
            setCreateTeamModal("false");
          } else {
            toast.error("Could not create team.");
          }
        });
    } catch (error) {
      toast.error(error.message);
    }
  };

  const schema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    players15: Yup.array().required("Players is a required field"),
  });

  return (
    <div className="w-[100vw] h-[100vh] absolute border bg-[#D9D9D9] top-0 left-0 right-0 bottom-0 bg-opacity-80 flex items-center justify-center">
      <Formik
        validationSchema={schema}
        initialValues={{ name: "", players15: [] }}
        onSubmit={(values) => handleSubmit(values)}
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
                    Coach - {user.name}
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
                    options={
                      allPlayers.length > 0 &&
                      allPlayers.map((player) => {
                        return {
                          label:
                            player.name +
                            " ( " +
                            player.specialization +
                            " | " +
                            player.country +
                            " )",
                          value: player,
                        };
                      })
                    }
                    placeholder="Select 15 players"
                    onChange={(values) => setFieldValue("players15", values)}
                    multi
                  />

                  <span className="text-white">Select a captain</span>
                  <Select
                    className="bg-white text-gray"
                    name="teamCaptain"
                    options={values.players15.map((player) => {
                      return {
                        label: player.label,
                        value: {
                          name: player.value.name,
                        },
                      };
                    })}
                    placeholder="Select Captain"
                    onChange={(value) => setFieldValue("teamCaptain", value)}
                  />

                  <span className="text-white">Add picture</span>
                  <input
                    type="file"
                    name="icon"
                    accept="image/*"
                    
                    onChange={(e) =>
                      setFieldValue("icon", e.currentTarget.files[0])
                    }
                  />
                  {values.icon && (
                    <span className="text-white">{values.icon.name}</span>
                  )}

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
