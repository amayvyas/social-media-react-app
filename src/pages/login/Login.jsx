import { useState, useContext } from 'react';
import { AuthContext } from '../../context/authenticationContext'; // Ensure correct path
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './login.scss';

const Login = () => {
  const { login } = useContext(AuthContext); // Ensure `login` is available from context
  const navigate = useNavigate(); // Hook to handle redirection
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (credentials.username && credentials.password) {
      const user = {
        id: 1,
        name: credentials.username,
        profilePic: '/bgForm.jpg', // Set profilePic or other user data
      };
      login(user); // Call login function from context
      console.log('Logged in as:', credentials.username);

      // Redirect to home page after successful login
      navigate('/'); // Redirecting to the home page
    } else {
      alert('Please enter both username and password');
    }
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>HELLO WORLD.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            excepturi voluptatibus cumque labore cum vero officia veniam illum,
            earum expedita quae obcaecati eius similique ducimus autem maiores,
            repellat nemo nostrum.
          </p>
          <span>Don&apos;t have an account?</span>
          <Link to="/register">
            <button>REGISTER</button>
          </Link>
        </div>
        <div className="right">
          <h1>LOGIN</h1>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={credentials.username}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={credentials.password}
              onChange={handleChange}
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
