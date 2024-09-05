import React, { useState, useEffect } from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import CustomSelect from "./Utilities/CustomSelect.tsx";

const Signup = ({ setPage }) => {
  const navigate = useNavigate();
  const [countries, setCountries] = useState(null); // Store countries list
  const [image, setImage] = useState(""); // Store uploaded image URL

  // Form validation schema
  const schema = Yup.object().shape({
    username: Yup.string().required("Name is a required field"),
    email: Yup.string().email("Invalid email format"),
    password: Yup.string().required("Password is a required field"),
  });

  // Handle form submission, including Cloudinary image upload and user registration
  const handleFormSubmit = async (values) => {
    const formData = new FormData();
    for (let value in values) formData.append(value, values[value]);

    const data = new FormData();
    data.append("file", values.profilePicture);
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

          const savedUserResponse = await fetch(
            `${process.env.REACT_APP_API_URL_AUTH}api/register`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ ...values, profilePicture: data.url }),
            }
          );

          const status = savedUserResponse.status;
          const responseData = await savedUserResponse.json();

          if (status === 200) {
            toast.success(responseData.message);
            setTimeout(() => setPage("login"), 2000);
          } else {
            toast.error(responseData.message);
          }
        });
    } catch (error) {
      toast.error("An error occurred: " + error.message);
    }
  };

  // Fetch countries data from an API and set options for select input
  useEffect(() => {
    const getCountries = async () => {
      try {
        const savedUserResponse = await fetch("https://restcountries.com/v3.1/all", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        const responseData = await savedUserResponse.json();
        const arr = responseData.map((e) => ({ label: e.name.common, value: e.name.common }));
        setCountries(arr);
      } catch (error) {
        console.log("Internal Server Error");
      }
    };

    getCountries();
  }, []);

  return (
    <Formik
      validationSchema={schema}
      initialValues={{
        email: "",
        password: "",
        username: "",
      }}
      onSubmit={(values) => handleFormSubmit(values)}
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
        <div className="signup z-[10] self-center mt-[-7rem] overflow-y-scroll h-[85vh] scrollable-content">
          <div className="form">
            <form noValidate onSubmit={handleSubmit} encType="multipart/form-data">
              <div className=" w-[25vw] max-w-[500px] flex flex-col items-center">
                <h1 className="text-[30px]">Signup</h1>
                <div className="w-[100%] bg-[#434343] h-[90%] rounded-[10px] p-[2rem] flex flex-col gap-[2rem]">
                  {/* Username input */}
                  <div className="w-[100%] h-[3rem]">
                    <span className="text-[1.2rem]">Username</span>
                    <input
                      type="text"
                      name="username"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.username}
                      placeholder="Enter username"
                      className="w-[100%] h-[100%] rounded-[10px] px-[1rem] text-black"
                    />
                  </div>

                  {/* Name input */}
                  <div className="w-[100%] h-[3rem]">
                    <span className="text-[1.2rem]">Name</span>
                    <input
                      type="text"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      placeholder="Enter name"
                      className="w-[100%] h-[100%] rounded-[10px] px-[1rem] text-black"
                    />
                  </div>

                  {/* Email input */}
                  <div className="w-[100%] h-[3rem]">
                    <span className="text-[1.2rem]">Email</span>
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      placeholder="Enter email"
                      className="w-[100%] h-[100%] rounded-[10px] px-[1rem] text-black"
                    />
                  </div>

                  {/* Password input */}
                  <div className="w-[100%] h-[3rem]">
                    <span className="text-[1.2rem]">Password</span>
                    <input
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      placeholder="Enter password"
                      className="w-[100%] h-[100%] rounded-[10px] px-[1rem] text-black"
                    />
                  </div>

                  {/* Role selection */}
                  <div className="w-[100%] h-[3rem]">
                    <span className="text-[1.2rem]">Role</span>
                    <div className="flex gap-[1rem]">
                      <label><Field type="radio" name="role" value="PLAYER" /> Player</label>
                      <label><Field type="radio" name="role" value="COACH" /> Coach</label>
                      <label><Field type="radio" name="role" value="ADMIN" /> Admin</label>
                    </div>
                  </div>

                  {/* Speciality for PLAYER */}
                  {values.role === "PLAYER" && (
                    <div className="w-[100%] h-[3rem]">
                      <span className="text-[1.2rem]">Speciality</span>
                      <div className="flex gap-[1rem]">
                        <label><Field type="radio" name="specialization" value="batter" /> Batter</label>
                        <label><Field type="radio" name="specialization" value="bowler" /> Bowler</label>
                        <label><Field type="radio" name="specialization" value="all-rounder" /> All-rounder</label>
                      </div>
                    </div>
                  )}

                  {/* Gender selection */}
                  <div className="w-[100%] h-[3rem]">
                    <span className="text-[1.2rem]">Gender</span>
                    <div className="flex gap-[1rem]">
                      <label><Field type="radio" name="gender" value="male" /> Male</label>
                      <label><Field type="radio" name="gender" value="female" /> Female</label>
                    </div>
                  </div>

                  {/* Date of birth input */}
                  <div className="w-[100%] flex flex-col">
                    <span className="text-[1.2rem]">Date of birth</span>
                    <input
                      type="date"
                      className="text-black h-[2.5rem] px-[0.5rem] rounded-[10px]"
                      name="dateOfBirth"
                      onChange={handleChange}
                      value={values.dateOfBirth}
                    />
                  </div>

                  {/* Country selection */}
                  <div className="w-[100%]">
                    <span className="text-[1.2rem]">Country</span>
                    <Field
                      className="rounded-[10px] text-[black]"
                      name="country"
                      options={countries}
                      component={CustomSelect}
                      placeholder="Select Country"
                      isMulti={false}
                    />
                  </div>

                  {/* File upload */}
                  <div>
                    <label>Upload File</label>
                    <input
                      type="file"
                      name="profilePicture"
                      accept="image/*"
                      onChange={(e) => setFieldValue("profilePicture", e.currentTarget.files[0])}
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="bg-white text-black w-[8rem] p-[0.5rem] self-center rounded-[10px]"
                  >
                    Signup
                  </button>
                </div>

                {/* Login redirect */}
                <div className="w-[100%] h-[3rem] border border-x-0 border-b-0 border-t-black bg-[#434343] rounded-[10px] flex items-center justify-center text-[0.8rem]">
                  <span>
                    Already registered?{" "}
                    <button className="underline" onClick={() => setPage("login")}>Login.</button>
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
