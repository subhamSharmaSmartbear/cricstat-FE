import React, { useState, useEffect } from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import CustomSelect from "../components/Utilities/CustomSelect.tsx";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Edit = () => {
  const user = JSON.parse(localStorage.getItem("user")); 

    const navigate = useNavigate();
  const [countries, setCountries] = useState(null);
  const [image,setImage]=useState("")

  const schema = Yup.object().shape({
    name: Yup.string(),
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


//   const handleFormSubmit = async (values) => {
//     const formData = new FormData();

//     // Convert the playerDTO to a JSON string and append it
//     const playerDTO = {
//         name: values.username,
//         dateOfBirth: values.dateOfBirth,
//         specialization: values.specialization,
//         gender: values.gender,
//         country: values.country,
//         // Include other fields as necessary
//     };
//     formData.append("playerDTO", new Blob([JSON.stringify(playerDTO)], { type: "application/json" }));

//     // Append the profile picture file
//     formData.append("profilePicture", values.profilePicture);

//     try {
//         const response = await fetch(
//             `${process.env.REACT_APP_API_URL_PROFILECREATION}api/players/create`,
//             {
//                 method: "POST",
//                 body: formData,  // Send FormData directly, no Content-Type needed
//             }
//         );

//         const result = await response.json();
//         console.log(result);
        


//         if (response.ok) {
//             toast.success(result.message);
//             localStorage.removeItem("user");

//             const constructedUrl = `data:image/png;base64,${result.player.profilePicture}`;
//             console.log(constructedUrl);

//             let user = result.player;
//             user.profilePicture = constructedUrl;
            
//             localStorage.setItem("user", JSON.stringify(user));
//             navigate('/matches')
//         } else {
//             toast.error(result.message);
//         }
//     } catch (error) {
//         toast.error(`Error: ${error.message}`);
//     }
// };


const handleFormSubmit = async (values, onSubmitProps) => {
  // this allows us to send form info with image
  const formData = new FormData();
  for (let value in values) {
    formData.append(value, values[value]);
  }

  
  
  const data = new FormData();
  data.append("file", values.profilePicture);
  data.append("upload_preset", "twinster");
  data.append("cloud_name", "dd2nvofv0");

  console.log(data);

  try {
    await fetch("https://api.cloudinary.com/v1_1/dd2nvofv0/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then(async (data) => {
        console.log(data.url);
        
        setImage(data.url);
        const savedUserResponse = await fetch(
          `${process.env.REACT_APP_API_URL_PROFILECREATION}api/players/create`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...values, profilePicture: data.url }),
          }
        );
        const savedUser = await savedUserResponse.json();
        console.log(savedUser);
        
        onSubmitProps.resetForm();

        if (savedUser) {
          toast.success("Saved");

          
          const responseUser = savedUser.player;

          const mergeUser = {...user,...responseUser}
          localStorage.removeItem("user");
          localStorage.setItem("user", JSON.stringify(mergeUser));
        }
      });
  } catch (error) {
    console.log(error);
    toast.error("Not Saved");
  }

  
};





  return (
    <div className="rounded-[10px] w-[100%] bg-black h-[100%] px-[2rem] flex flex-col gap-[1rem]">
      <div
        className={` w-[100%]  h-[100%] flex flex-col items-center gap-[1rem] overflow-y-hidden py-[3rem]`}
      >
        <Formik
          validationSchema={schema}
          initialValues={{}}
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
                      name="name"
                      onChange={handleChange}
                      required
                      onBlur={handleBlur}
                      value={values.name}
                    />
                  </div>

                    {user && user.role === "PLAYER" && <div className="w-[100%] h-[3rem]">
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
                    </div>}
                    {user && user.role === "PLAYER" && <div className="w-[100%] h-[3rem]">
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
                    </div>}

                    {user && user.role === "PLAYER" && <div className="w-[100%] flex flex-col">
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
                    </div>}

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
    

