import { Link } from "react-router-dom"
import "./register.scss"
const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>HELLO WORLD.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, excepturi voluptatibus cumque labore cum vero officia veniam illum, earum expedita quae obcaecati eius similique ducimus autem maiores, repellat nemo nostrum.</p>
          <span>Do you have an account?</span>
          <Link to="/login"><button>LOGIN</button></Link>
        </div>
        <div className="right">
          <h1>REGISTER</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register