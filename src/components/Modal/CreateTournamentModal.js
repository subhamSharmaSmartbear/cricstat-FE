import React from 'react'
import { Formik } from "formik";
import * as Yup from "yup";
import Select from "react-dropdown-select";

const CreateTournamentModal = ({setCreateTournamentModal}) => {



    const teams = [
        {
          "id": 1,
          "name": "Team India"
        },
        {
          "id": 12,
          "name": "Team Pakistan"
        },
        {
          "id": 13,
          "name": "Team Australia"
        },
        {
          "id": 14,
          "name": "Team Afghanistan"
        },
        {
          "id": 15,
          "name": "Team Bangladesh"
        },
        
      ]
      
    
      const schema = Yup.object().shape({
        name: Yup.string(),
        teams: Yup.array(),
        tournamentType: Yup.string(),
        date:Yup.string(),
      });
      const tournamentTypeList = [
        {
            label:"T20",
            value:"T20"
        },
      ]


  return (
    <div className="w-[100vw] h-[100vh] absolute border bg-[#D9D9D9] top-0 left-0 right-0 bottom-0 bg-opacity-80 flex items-center justify-center">
      <Formik
        validationSchema={schema}
        initialValues={{ name: "", tournamentType:"",teams:[],date:"",photo:"" }}
        onSubmit={(values) => {
         
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
                  Create Tournament <br />{" "}
                  <span className="text-[14px] font-light">
                    Admin - BCCI
                  </span>{" "}
                </span>

                <div className="w-[80%] h-[82%] flex flex-col gap-[1rem]">
                  <span className="text-white">Tournament name</span>
                  <input
                    placeholder="Enter tournament Name"
                    className="w-[100%] h-[2.5rem] rounded-[5px] px-[1rem]"
                    value={values.name}
                    onChange={(e)=>setFieldValue("name",e.target.value)
                    }
                    name="name"
                  />

                  <span className="text-white">Tournament Type</span>
                  <Select
                    className="bg-white text-gray"
                    options={tournamentTypeList}
                    placeholder="Select Type"
                    onChange={(values) => setFieldValue("tournamentType",values[0].value)
                    }
                  />
                  <span className="text-white">Select 6 teams</span>
                  <Select
                    className="bg-white text-gray"
                    options={teams.map((team)=>{return {label:team.name,value:team.id}})}
                    name="teams"
                    placeholder="Select teams"
                    onChange={(value) =>
                      setFieldValue(
                        "teams",
                        value.map((val) => val.value)
                      )
                    }
                    multi
                  />
                  <span className="text-white">Start date</span>
                  <input type='date' className='p-[0.3rem] rounded-[3px]' onChange={(e)=>setFieldValue("date" ,e.target.value)
                  }/>


                  <span className="text-white">Add picture</span>
                  <input
                      type="file"
                      name="photo"
                      accept="image/*"
                      required
                      onChange={(e) =>
                        setFieldValue("photo", e.currentTarget.files[0])
                      }
                    />
                    {
                        values.photo && <span className='text-white'>{values.photo.name}</span>
                    }

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
  )
}

export default CreateTournamentModal
