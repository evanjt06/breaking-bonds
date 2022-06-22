import React, {useState} from "react";
import axios from 'axios'
import {useNavigate} from "react-router";

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export default function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [msg, setMsg] = useState("")

  const navigate = useNavigate()

  async function login() {
    const fd = new FormData()
    fd.append("email", email)
    fd.append("password", password)

    try {
      const res2 = await axios.post("http://localhost:8080/login", {
        "Email": email,
        "Password": password
      })
      const data2 = res2.data.token
      localStorage.setItem("jwt", data2)

      navigate("/")

    } catch (err) {
      if (err.response.data === "email already taken") {
        setMsg("Email already taken.")
      }
    }
  }

  return (
    <>

      <div className="h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
           style={{
             backgroundImage: "url(https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80)",
             // backgroundSize: "contain",
             backgroundRepeat: "no-repeat",
             backgroundPosition: "center",
             backgroundAttachment: "fixed"

           }}
      >
        <div className="max-w-md w-full space-y-8 bg-slate-100 p-10 rounded-2xl">
          <div>
            <img
              className="mx-auto h-28 w-auto"
              src="https://static1.squarespace.com/static/53cf1829e4b09d5219fc10dc/t/5b9ac78c0e2e72c60700b63a/1653522599743/"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold">Sign in to Breaking Bonds</h2>

          </div>
          <div className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"

                  onChange={(e) => {
                    if (validateEmail(email))
                    {
                      setMsg("")
                    }
                    setEmail(e.target.value)
                  }}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  // type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"

                  onChange={(e) => {
                    if (password.length >= 8) {
                      setMsg("")
                    }
                    setPassword(e.target.value)
                  }}
                />
              </div>

              {msg !== "" &&
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
                  <p className="font-bold">Uh oh!</p>
                  <p>{msg}</p>
                </div>}
            </div>

            <div>
              <button
                onClick={() => {
                  if (email === "" || password === "")
                  {
                    setMsg("Email and password are required.")
                    return
                  }
                  if (!validateEmail(email))
                  {
                    setMsg("Invalid email.")
                    return
                  }
                  if (password.length < 8) {
                    setMsg("Password too short.")
                    return
                  }

                  login()
                }}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a href="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Don't have an account? Sign up here.
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
