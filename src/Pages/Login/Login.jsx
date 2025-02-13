import { Link } from "react-router-dom";
import NavTwo from "../../Shared/NavTwo";
import { useContext } from "react";
import { AuthContext } from "../../Services/AuthProvider";
import { useForm } from "react-hook-form";
function Login() {
  const {
    register,
    // handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const { signIn } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signIn(email, password)
      .then((res) => console.log(res.user))
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="bg-gray-100 h-screen">
      <NavTwo />

      <form
        onSubmit={handleLogin}
        className="max-w-xl mx-auto  border-gray-700 p-6 shadow-md rounded-xl bg-white"
      >
        <h2 className="text-2xl font-bold py-2">Login</h2>
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="name"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-400 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            User Name
          </label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-400 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
            placeholder=" "
            required
          />

          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="password"
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-400 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
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

        <button className="btn bg-amber-400 hover:bg-amber-300 duration-150 w-full">
          LogIn
        </button>
        <p className="text-center pt-2">
          Don't have an Accout ?{" "}
          <Link to="/register" className="text-amber-500">
            Create Accout
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
