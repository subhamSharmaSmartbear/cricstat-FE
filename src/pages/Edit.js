import React, { useState, useEffect } from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import CustomSelect from "../components/Utilities/CustomSelect.tsx";
const Edit = () => {
  const [countries, setCountries] = useState(null);

  const schema = Yup.object().shape({
    username: Yup.string(),
    dob: Yup.string(),
    country: Yup.string(),
  });

  useEffect(() => {
    const getCountries = async (setData) => {
      try {
        const savedUserResponse = await fetch(
          `https://restcountries.com/v3.1/all`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const responseData = await savedUserResponse.json();

        
        const arr = responseData.map((e) => {
          return { label: e.name.common, value: e.name.common };
        });
        setCountries(arr);
      } catch (error) {
        console.log("Internal Server Error");
      }
    };

    getCountries();
  }, []);




  return (
    <div className="rounded-[10px] w-[100%] bg-black h-[100%] px-[2rem] flex flex-col gap-[1rem]">
      <div
        className={` w-[100%]  h-[100%] flex flex-col items-center gap-[1rem] overflow-y-hidden py-[3rem]`}
      >
        <Formik
          validationSchema={schema}
          initialValues={{}}
          onSubmit={(values) => console.log(values)}
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
            <div className="signup z-[10] self-center border text-white bg-[#434343] p-[1rem] rounded-[10px]">
              <div className="form">
                <form
                  noValidate
                  onSubmit={handleSubmit}
                  encType="multipart/form-data"
                >
                  <div className=" w-[25vw] max-w-[500px]     flex flex-col items-center gap-[1rem]">
                    <h1 className="text-[30px]">Edit Profile</h1>

                    <div className="w-[100%] flex flex-col">
                    <span className="text-[1.2rem]">Name</span>
                    <input
                      type="text"
                      className="text-black h-[2.5rem] px-[0.5rem] rounded-[10px]"
                      name="username"
                      onChange={handleChange}
                      required
                      onBlur={handleBlur}
                      value={values.username}
                    />
                  </div>

                    <div className="w-[100%] h-[3rem]">
                      <span className="text-[1.2rem]">Specialization</span>
                      <div
                        role="group"
                        aria-labelledby="my-radio-group"
                        className="flex gap-[1rem]"
                      >
                        <label>
                          <Field
                            type="radio"
                            name="specialization"
                            value="batter"
                          />
                          Batter
                        </label>
                        <label>
                          <Field
                            type="radio"
                            name="specialization"
                            value="Bowler"
                          />
                          Bowler
                        </label>
                        <label>
                          <Field
                            type="radio"
                            name="specialization"
                            value="all-rounder"
                          />
                          All-rounder
                        </label>
                      </div>
                    </div>
                    <div className="w-[100%] h-[3rem]">
                      <span className="text-[1.2rem]">Gender</span>
                      <div
                        role="group"
                        aria-labelledby="my-radio-group"
                        className="flex gap-[1rem]"
                      >
                        <label>
                          <Field
                            type="radio"
                            name="gender"
                            value="male"
                          />
                          Male
                        </label>
                        <label>
                          <Field
                            type="radio"
                            name="gender"
                            value="Female"
                          />
                          Female
                        </label>
                      </div>
                    </div>

                    <div className="w-[100%] flex flex-col">
                      <span className="text-[1.2rem]">Date of birth</span>
                      <input
                        type="date"
                        className="text-black h-[2.5rem] px-[0.5rem] rounded-[10px]"
                        name="dateOfBirth"
                        onChange={handleChange}
                        required
                        onBlur={handleBlur}
                        value={values.dateOfBirth}
                      />
                    </div>

                    <div className="w-[100%]">
                    <div id="" className="text-[1.2rem] ">
                      Country
                    </div>
                    <Field
                      className="rounded-[10px] text-[black]"
                      name="country"
                      options={countries}
                      component={CustomSelect}
                      placeholder="Select Country"
                      value={values.country}
                      required
                      isMulti={false}
                    />
                  </div>
                    <div>
                      <label> Choose a photo</label>
                      <input
                        type="file"
                        name="photo"
                        accept="image/*"
                        required
                        onChange={(e) =>
                          setFieldValue("profilePicture", e.currentTarget.files[0])
                        }
                      />
                    </div>

                    <button
                      type="submit "
                      className="bg-white text-black w-[8rem] p-[0.5rem] self-center rounded-[10px]"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Edit;
