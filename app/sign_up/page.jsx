"use client";
import React from "react";
import Link from "next/link";

import { Formik } from "formik";

import SignupSchema from "./Validation";

import { QueueListIcon, RectangleGroupIcon } from "@heroicons/react/24/outline";

function page() {
  return (
    <div className="grid place-items-center pt-6 px-4 xl:px-0 lg:pt-28 min-h-[600px]">
      <div className="lg:bg-gray-100 rounded-lg px-4 md:py-28 xl:p-24 capitalize lg:grid lg:grid-cols-2 lg:place-items-center gap-4 w-full max-w-7xl ">
        <div className="relative">
          <div className="absolute w-48 h-56 top-32 hidden lg:block left-36 xl:left-48 bg-gradient-to-r rounded-full from-violet-900  via-purple-500 to-orange-500 "></div>
          <div className="absolute w-44 h-44 top-24 left-20 hidden lg:block bg-gradient-to-r rounded-full from-purple-900 via-violet-500 to-pink-500"></div>

          <div className="hidden lg:block bg-white/30 backdrop-blur-lg backdrop-brightness-100 border border-violet-200 rounded-xl p-10 space-y-5">
            <div className=""></div>
            <h2 className="uppercase pb-6 text-3xl text-violet-900 font-extrabold">
              Make Jeas beads as your life style
            </h2>
            <div className="grid grid-cols-12 gap-6">
              <QueueListIcon class="h-10 w-10 md:col-span-2  text-violet-500" />
              <div className="md:col-span-10">
                <h2>Who we are?</h2>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae quisquam autem, ullam quaerat minus nulla? Pariatur
                  aspernatur explicabo cum error.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-8">
              <RectangleGroupIcon class="h-10 w-10 text-violet-500 md:col-span-2" />
              <div className="md:col-span-10 ">
                <h2>Who we are?</h2>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae quisquam autem, ullam quaerat minus nulla? Pariatur
                  aspernatur explicabo cum error.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-16 md:py-0 p-4 lg:p-8 grid place-items-center">
          <div className="bg-gray-50 shadow-md rounded-xl p-8 border border-violet-200 lg:max-w-md">
            <div className="pb-10 text-center">
              <h2 className="text-xl font-semibold">create an account</h2>
              <p className="text-sm ">
                already have an account?{" "}
                <Link className="text-violet-700 font-semibold" href="#">
                  sign in
                </Link>{" "}
              </p>
            </div>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                password: "",
              }}
              validationSchema={SignupSchema}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <div className="grid grid-cols-3">
                      <label className="col-span-1" htmlFor="firstName">
                        First Name:{" "}
                      </label>
                      <input
                        className="col-span-2 py-1 outline-none focus:border-2 text-sm focus:border-violet-700 px-3 border border-violet-200 rounded-md bg-transparent"
                        type="text"
                        name="firstName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName}
                      />
                    </div>
                    {errors.firstName && touched.firstName && (
                      <p className="text-small text-red-400">
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <div className="grid grid-cols-3">
                      <label className="col-span-1" htmlFor="lastName">
                        Last Name:{" "}
                      </label>
                      <input
                        className="col-span-2 py-1 outline-none focus:border-2 text-sm focus:border-violet-700 px-3 border border-violet-200 rounded-md bg-transparent"
                        type="text"
                        name="lastName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastName}
                      />
                    </div>
                    {errors.lastName && touched.lastName && (
                      <p className="text-small text-red-400 w-full">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                  <div>
                    <div className="grid grid-cols-3">
                      <label className="col-span-1" htmlFor="email">
                        Email:{" "}
                      </label>
                      <input
                        className="col-span-2 py-1 outline-none focus:border-2 text-sm focus:border-violet-700 px-3 border border-violet-200 rounded-md bg-transparent"
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                    </div>
                    {errors.email && touched.email && (
                      <p className="text-small text-red-400 w-full">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <div className="grid grid-cols-3">
                      <label className="col-span-1" htmlFor="password">
                        Password:{" "}
                      </label>
                      <input
                        className="col-span-2 py-1 outline-none focus:border-2 text-sm focus:border-violet-700 px-3 border border-violet-200 rounded-md bg-transparent"
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />
                    </div>
                    {errors.password && touched.password && (
                      <p className="text-small text-red-400 w-full">
                        {errors.password}
                      </p>
                    )}
                  </div>
                  <div className="pt-8">
                    <button
                      className=" w-full bg-violet-900 text-gray-50 rounded-full py-2 hover:bg-violet-800 hover:text-gray-100 transition-colors ease-in-out duration-300"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
