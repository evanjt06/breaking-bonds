import { LockClosedIcon } from '@heroicons/react/solid'
import React from "react";

export default function Login() {

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
            <h2 className="mt-6 text-center text-3xl font-extrabold">Sign up for AV Chemistry</h2>

          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
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
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign up
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Already have an account? Sign in here.
                </a>
              </div>
            </div>

          </form>
        </div>
      </div>
    </>
  )
}