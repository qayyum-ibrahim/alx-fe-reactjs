import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "At least 6 characters")
    .required("Password is required"),
});

export default function FormikForm() {
  const initialValues = { username: "", email: "", password: "" };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        }
      );

      const result = await response.json();
      console.log("User registered:", result);
      alert("Formik Registration successful!");

      resetForm();
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="space-y-4 p-4 border rounded mt-6">
        <h2 className="text-xl font-bold">Formik Form</h2>

        <div>
          <label className="block">Username:</label>
          <Field type="text" name="username" className="border p-2 w-full" />
          <ErrorMessage
            name="username"
            component="p"
            className="text-red-500 text-sm"
          />
        </div>

        <div>
          <label className="block">Email:</label>
          <Field type="email" name="email" className="border p-2 w-full" />
          <ErrorMessage
            name="email"
            component="p"
            className="text-red-500 text-sm"
          />
        </div>

        <div>
          <label className="block">Password:</label>
          <Field
            type="password"
            name="password"
            className="border p-2 w-full"
          />
          <ErrorMessage
            name="password"
            component="p"
            className="text-red-500 text-sm"
          />
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Register
        </button>
      </Form>
    </Formik>
  );
}
