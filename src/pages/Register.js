import React from "react";
import crickstat from "../assets/crickstatLogoBlackBg.svg";
import crickstatBigLogo from "../assets/crickstatLogoBig.svg";
import { Formik } from "formik";
import * as Yup from "yup";
const Register = () => {
  //schema for login
  const schema = Yup.object().shape({
    email: Yup.string()
      .required("Email is a required field")
      .email("Invalid email format"),
    password: Yup.string()
      .required("Password is a required field")
      .min(8, "Password must be at least 8 characters"),
  });

  return (
    <div className="w-[100%] border h-[100vh] bg-black text-white flex items-start flex-col gap-[8rem]">
      <img src={crickstat} className="w-[15rem] mt-[2rem] ml-[2rem]" />
      <img
        src={crickstatBigLogo}
        className="absolute top-[35vh] w-[60vw] left-[15vw]"
      />

      {/* <div className=" w-[25vw] max-w-[500px] h-[50vh] self-center   z-[10] flex flex-col items-center">
        <h1 className="text-[30px]">Login</h1>
        <div className="w-[100%] bg-[#434343] h-[90vh] rounded-[10px] rounded-b-[0]"></div>
        <div className="w-[100%] h-[10vh] border border-x-0 border-b-0 border-t-black bg-[#434343] rounded-[10px] rounded-t-[0] flex items-center justify-center text-[0.8rem]">
          <span>
            Dont’t have an account?{" "}
            <button className="underline">Signup.</button>
          </span>
        </div>
      </div> */}

      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          // Alert the input values of the form that we filled
          alert(JSON.stringify(values));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div className="login z-[10] self-center ">
            <div className="form">
              <form noValidate onSubmit={handleSubmit}>
                <div className=" w-[25vw] max-w-[500px] h-[45vh]    flex flex-col items-center">
                  <h1 className="text-[30px]">Login</h1>
                  <div className="w-[100%] bg-[#434343] h-[90%] rounded-[10px] rounded-b-[0] p-[2rem] flex flex-col gap-[4rem]">
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

                    <button type="submit " className="bg-white text-black w-[8rem] p-[0.5rem] self-center rounded-[10px]">
                      Login
                    </button>
                  </div>
                  <div className="w-[100%] h-[10%] border border-x-0 border-b-0 border-t-black bg-[#434343] rounded-[10px] rounded-t-[0] flex items-center justify-center text-[0.8rem]">
                    <span>
                      Dont’t have an account?{" "}
                      <button className="underline">Signup.</button>
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Register;
