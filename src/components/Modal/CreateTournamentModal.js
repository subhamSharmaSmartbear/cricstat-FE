import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Select from "react-dropdown-select";
import toast from "react-hot-toast";

const CreateTournamentModal = ({ setCreateTournamentModal }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const interval = [
    {
      label: "4 Hours",
      value: "PT4H",
    },
    {
      label: "6 Hours",
      value: "PT6H",
    },
    {
      label: "8 Hours",
      value: "PT8H",
    },
  ];

  const schema = Yup.object().shape({
    tournamentName: Yup.string(),
    tournamentType: Yup.string(),
  });
  const tournamentTypeList = [
    {
      label: "T20",
      value: "T20",
    },
  ];


  //convert to required date format
  function convertToDateTime(dateString, timeString = "12:00:00") {
    // Create a new Date object from the input date string
    const date = new Date(dateString);

    // Extract individual date components
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based, so add 1
    const day = String(date.getDate()).padStart(2, "0");

    // Return the formatted date in the desired format with provided or default time
    return `${year}-${month}-${day}T${timeString}`;
  }


  //function for creating the tournament
  const CreateTournament = async (values) => {

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL_GAME_ENGINE}api/admin/tournaments/create`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...values,
            numberOfTeams: "6",
            status: "PLANNED",
            startDate:convertToDateTime(values.startDate)
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        toast.success("Tournament Created !")
        setCreateTournamentModal("false");
      } else {
        throw new Error("Error fetching teams");
      }
    } catch (error) {
      toast.error("Error fetching teams");
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] absolute border bg-[#D9D9D9] top-0 left-0 right-0 bottom-0 bg-opacity-80 flex items-center justify-center">
      <Formik
        validationSchema={schema}
        initialValues={{ tournamentName: "", tournamentType: "" }}
        onSubmit={(values) => CreateTournament(values)}
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
                  Create Tournament <br />{" "}
                  <span className="text-[14px] font-light">
                    Admin - {user.username}
                  </span>{" "}
                </span>

                <div className="w-[80%] h-[82%] flex flex-col gap-[1rem]">
                  <span className="text-white">Tournament name</span>
                  <input
                    placeholder="Enter tournament Name"
                    className="w-[100%] h-[2.5rem] rounded-[5px] px-[1rem]"
                    value={values.tournamentName}
                    onChange={(e) =>
                      setFieldValue("tournamentName", e.target.value)
                    }
                    name="name"
                  />
                  <span className="text-white">Tournament Location</span>
                  <input
                    placeholder="Enter location "
                    className="w-[100%] h-[2.5rem] rounded-[5px] px-[1rem]"
                    value={values.location}
                    onChange={(e) => setFieldValue("location", e.target.value)}
                    name="location"
                  />

                  <span className="text-white">Tournament Type</span>
                  <Select
                    className="bg-white text-gray"
                    options={tournamentTypeList}
                    placeholder="Select Type"
                    onChange={(values) =>
                      setFieldValue("tournamentType", values[0].value)
                    }
                  />

                  <span className="text-white">Interval between matches</span>
                  <Select
                    className="bg-white text-gray"
                    options={interval}
                    placeholder="Select hours"
                    onChange={(values) =>
                      setFieldValue("matchInterval", values[0].value)
                    }
                  />

                  <span className="text-white">Start date</span>
                  <input
                    type="date"
                    className="p-[0.3rem] rounded-[3px]"
                    onChange={(e) => setFieldValue("startDate", e.target.value)}
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
                  onClick={() => setCreateTournamentModal("false")}
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

export default CreateTournamentModal;
