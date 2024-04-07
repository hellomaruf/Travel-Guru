import { Link } from "react-router-dom";
import NavTwo from "../../Shared/NavTwo";
import { useContext } from "react";
import { AuthContext } from "../../Services/AuthProvider";

function Register() {
  const { createUser } = useContext(AuthContext);
  const handleSubmitCreateAccount = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUser(email, password)
      .then((res) => console.log(res.user))
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="bg-gray-100 h-screen">
      <NavTwo />

      <form
        onSubmit={handleSubmitCreateAccount}
        className="max-w-xl mx-auto  border-gray-700 p-6 shadow-md rounded-xl bg-white"
      >
        <h2 className="text-2xl font-bold py-2">Create an Account</h2>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-400 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="password"
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-400 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="confirm_password"
            id="floating_repeat_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-400 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_repeat_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Confirm password
          </label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_first_name"
              id="first_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-400 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_first_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              First name
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="last_name"
              id="floating_last_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-400 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_last_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Last name
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-1 md:gap-6"></div>
        <button className="btn bg-amber-400 hover:bg-amber-300 duration-150 w-full">
          Register
        </button>
        <p className="text-center pt-2">
          Already have an Account ?{" "}
          <Link to="/login" className="text-amber-500">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
