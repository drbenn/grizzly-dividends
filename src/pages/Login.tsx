/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogin } from '../redux/tickerSlice';
import { toast } from 'react-toastify';
import { loginPath } from '../paths';

const toastMessage = (message:string) => toast(message);

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmitLogin: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const username: string = event.target[0].value;
    const password: string = event.target[1].value;
    const userData = {
      "username": username,
      "password": password
    }

    try {
      const response = await fetch(loginPath, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
      
      // Handle the response from the server as needed
      if (response.ok) {
        // console.log('User login successful!');
        toastMessage(`Welcome ${username}!!!`)
        // TODO: GET USER DATA After successful login  
        dispatch(userLogin({"loggedIn":true, "username": username}));  
        navigate("/grizzly/portfolio")    
      } else {       
        toastMessage(`Login failed. Please re-enter username and password`)
        console.error('User login failed.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <motion.div
      className="container text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
    <div className="container">
      <div className='page-title'>Log In</div>

        <form onSubmit={handleSubmitLogin}>
          <div className='form-container'>
            <input type="text" name="username" placeholder="Username" className='user-input'/>
            <input type="password" name="password" placeholder="Password" className='user-input'/>
            <button type="submit" className='submit-button'>LOG IN</button>
          </div>
        </form>


    </div>

    </motion.div>
  )
}