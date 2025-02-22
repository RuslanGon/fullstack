import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"; 
import { registerUser } from "../redux/features/auth/authSlice.js";
import { toast } from 'react-toastify';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const status = useSelector(state => state.auth.status);
  const isAuth = useSelector(state => Boolean(state.auth.token)); 

  useEffect(() => {
    if (status) {
      toast(status);
    }
  }, [status]);

  useEffect(() => {
    if (isAuth) {
      navigate('/'); 
    }
  }, [isAuth, navigate]);

  const handleSubmit = () => {
    try {
      dispatch(registerUser({ username, password }));
      setUsername('');
      setPassword('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-1/4 h-60 mx-auto mt-40"
    >
      <h1 className="text-lg text-white text-center">Registration</h1>
      <label className="text-xs text-gray-400">
        Username:
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="username"
          className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700"/>
      </label>
      <label className="text-xs text-gray-400">
        Password:
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="password"
          className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700"/>
      </label>
      <div className="flex gap-8 justify-center mt-4">
        <button
          onClick={handleSubmit}
          type="submit"
          className="flex justify-between items-center text-xs text-white rounded-sm py-2 px-4 cursor-pointer bg-gray-600"
        >
          Подтвердить
        </button>
        <Link to={"/login"} className="flex justify-center items-center text-xs text-white">
          Уже зарегистрированы
        </Link>
      </div>
    </form>
  );
};

export default RegisterPage;
