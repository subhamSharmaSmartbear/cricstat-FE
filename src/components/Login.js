import React from 'react'
import { Formik } from "formik";
import * as Yup from "yup";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = ({setPage}) => {
  const navigate = useNavigate();

  // Define validation schema using Yup
  const schema = Yup.object().shape({
    username: Yup.string().required("Email is a required field"),
    password: Yup.string().required("Password is a required field"),
  });

  // Handle form submission
  const handleFormSubmit = async (values) => {
    

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL_AUTH}api/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      const result = await response.json();

      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(result.user));
        toast.success(result.message);
        navigate("/dashboard"); // Redirect to dashboard
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("An error occurred: " + error.message);
    }
  };

  return (
    <Formik
      validationSchema={schema}
      initialValues={{ username: "", password: "" }}
      onSubmit={handleFormSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <div className="login z-[10] self-center justify-self-center mt-[5rem]">
          <div className="form">
            <form noValidate onSubmit={handleSubmit}>
              <div className="w-[25vw] max-w-[500px] h-[45vh] flex flex-col items-center">
                <h1 className="text-[30px]">Login</h1>
                <div className="w-[100%] bg-[#434343] h-[90%] rounded-[10px] rounded-b-[0] p-[2rem] flex flex-col gap-[4rem]">
                  <div className="w-[100%] h-[3rem]">
                    <span className="text-[1.2rem]">User Name</span>
                    <input
                      type="text"
                      name="username"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.username}
                      placeholder="Enter username"
                      className="w-[100%] h-[100%] rounded-[10px] px-[1rem] text-black"
                      id="username"
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
                      placeholder="Enter password"
                      className="w-[100%] h-[100%] rounded-[10px] px-[1rem] text-black"
                      id="password"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-white text-black w-[8rem] p-[0.5rem] self-center rounded-[10px]"
                  >
                    Login
                  </button>
                </div>
                <div className="w-[100%] h-[10%] border border-x-0 border-b-0 border-t-black bg-[#434343] rounded-[10px] rounded-t-[0] flex items-center justify-center text-[0.8rem]">
                  <span>
                    Don't have an account?{" "}
                    <button className="underline" onClick={() => setPage("signup")}>Signup.</button>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </Formik>
  )
}

export default Login
