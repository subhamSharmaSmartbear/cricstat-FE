import React, { useState } from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import CustomSelect from "./CustomSelect.tsx";
import { useEffect } from "react";


const Signup = ({ setPage }) => {


    const [countries, setCountries] = useState([]);


  const schema = Yup.object().shape({
    name: Yup.string().required("Email is a required field"),
    email: Yup.string()
      .required("Email is a required field")
      .email("Invalid email format"),
    password: Yup.string()
      .required("Password is a required field")
      .min(8, "Password must be at least 8 characters"),
    role: Yup.string().required(),
    dob: Yup.string().required(),
    photo: Yup.string().required(),
    speciality: Yup.string(),
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
    
          

          const arr = responseData.map((e)=> {return {label : e.name.common, value : e.cca2}})
          setCountries(arr)
          
        //   responseData.map((e)=>console.log(e.cca2))
          
        } catch (error) {
          console.log("Internal Server Error");
        }
      };

      getCountries()
  }, [])
  

  return (
    <Formik
      validationSchema={schema}
      initialValues={{
        email: "",
        password: "",
        name: "",
        role: "",
        country: "",
        dob: "",
        speciality: "",
      }}
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
        <div className="signup z-[10] self-center mt-[-4rem]">
          <div className="form">
            <form
              noValidate
              onSubmit={handleSubmit}
              encType="multipart/form-data"
            >
              <div className=" w-[25vw] max-w-[500px]     flex flex-col items-center">
                <h1 className="text-[30px]">Signup</h1>
                <div className="w-[100%] bg-[#434343] h-[90%] rounded-[10px] rounded-b-[0] p-[2rem] flex flex-col gap-[2.2rem]">
                  <div className="w-[100%] h-[3rem]">
                    <span className="text-[1.2rem]">Name</span>
                    <input
                      type="name"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      placeholder="Enter name"
                      className="w-[100%] h-[100%] rounded-[10px] px-[1rem] text-black"
                      id="name"
                    />
                  </div>
                  <div className="w-[100%] h-[3rem]">
                    <span className="text-[1.2rem]">Email</span>
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      placeholder="Enter email "
                      className="w-[100%] h-[100%] rounded-[10px] px-[1rem] text-black"
                      id="email"
                    />
                  </div>
                  <div className="w-[100%] h-[3rem]">
                    <span className="text-[1.2rem]">Password</span>
                    <input
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      placeholder="Enter password "
                      className="w-[100%] h-[100%] rounded-[10px] px-[1rem] text-black"
                      id="password"
                    />
                  </div>

                  <div className="w-[100%] h-[3rem]">
                    <span className="text-[1.2rem]">Role</span>
                    <div
                      role="group"
                      aria-labelledby="my-radio-group"
                      className="flex gap-[1rem]"
                    >
                      <label>
                        <Field type="radio" name="role" value="player" />
                        Player
                      </label>
                      <label>
                        <Field type="radio" name="role" value="coach" />
                        Coach
                      </label>
                      <label>
                        <Field type="radio" name="role" value="admin" />
                        Admin
                      </label>
                    </div>
                  </div>
                  {values.role === "player" && <div className="w-[100%] h-[3rem]">
                    <span className="text-[1.2rem]">Speciality</span>
                    <div
                      role="group"
                      aria-labelledby="my-radio-group"
                      className="flex gap-[1rem]"
                    >
                      <label>
                        <Field type="radio" name="speciality" value="batter" />
                        Batter
                      </label>
                      <label>
                        <Field type="radio" name="speciality" value="baller" />
                        Baller
                      </label>
                      <label>
                        <Field
                          type="radio"
                          name="speciality"
                          value="allrounder"
                        />
                        All rounder
                      </label>
                    </div>
                  </div>}

                  <div className="w-[100%] flex flex-col">
                    <span className="text-[1.2rem]">Date of birth</span>
                    <input
                      type="date"
                      className="text-black h-[2.5rem] px-[0.5rem] rounded-[10px]"
                      name="dob"
                      onChange={handleChange}
                      required
                      onBlur={handleBlur}
                      value={values.dob}
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
                    <label> Upload File</label>
                    <input
                      type="file"
                      name="photo"
                      accept="image/*"
                      required
                      onChange={(e) =>
                        setFieldValue("photo", e.currentTarget.files[0])
                      }
                    />
                  </div>

                  <button
                    type="submit "
                    className="bg-white text-black w-[8rem] p-[0.5rem] self-center rounded-[10px]"
                  >
                    Signup
                  </button>
                </div>
                <div className="w-[100%] h-[3rem] border border-x-0 border-b-0 border-t-black bg-[#434343] rounded-[10px] rounded-t-[0] flex items-center justify-center text-[0.8rem]">
                  <span>
                    Already registered?{" "}
                    <button
                      className="underline"
                      onClick={() => setPage("login")}
                    >
                      Login.
                    </button>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Signup;
