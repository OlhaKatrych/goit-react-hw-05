import css from "./SearchBar.module.css";
import React from "react";

import MovieList from "../../components/MovieList/MovieList";
import { Formik, Form, Field } from "formik";

import toast, { Toaster } from "react-hot-toast";

function SearchBar({ setSearchMovies }) {
  return (
    <div>
      {" "}
      <Formik
        initialValues={{ search: "" }}
        onSubmit={(values, actions) => {
          if (values.search === "") {
            toast.error("Please enter a search term!", { duration: 2000 });
          }
          setSearchMovies(values.search);
          actions.resetForm();
        }}
      >
        <Form className={css.form}>
          <Field type="text" name="search"></Field>
          <button type="submit">Search</button>
        </Form>
      </Formik>
      <Toaster />
    </div>
  );
}

export default SearchBar;
