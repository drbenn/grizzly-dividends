/* eslint-disable @typescript-eslint/no-misused-promises */
import { motion } from "framer-motion";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../redux/tickerSlice';
import { toast } from 'react-toastify';

const toastMessage = (message:string) => toast(message);

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmitRegistration: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const formData: FormData = new FormData(event.currentTarget);
    // for (const [key, value] of formData.entries()) {
    //   console.log(key, value);
    // }
    const username: string = event.target[0].value;
    const email: string = event.target[1].value;
    const password: string = event.target[2].value;
    const confirmPassword: string = event.target[3].value;
    password === confirmPassword ? console.log('Resgistering new user...') : alert('Password and confirm password values do not match, please reenter your password');
    const userData = {
      "username": username,
      "email": email,
      "password": password
    }

    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
      
      // Handle the response from the server as needed
      if (response.ok) {
        // console.log('User registration successful!');    
        toastMessage(`You are now registered ${username}! Welcome!`)
        dispatch(userLogin({"loggedIn":true, "username": username}));  
        navigate("/portfolio")    
      } else {       
        toastMessage(`Username or email is already registered. Please try another registration.`)
        // console.error('User registration failed.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <motion.div
      className="container text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <div className='page-title'>Register</div>   
        <form onSubmit={handleSubmitRegistration}>
          <div className='form-container'>
            <input type="text" name="username" placeholder="Username" className='user-input'/>
            <input type="text" name="email" placeholder="Email" className='user-input'/>
            <input type="password" name="password" placeholder="Password" className='user-input'/>
            <input type="password" name="confirmPassword" placeholder="Confirm Password" className='user-input'/>
            <button type="submit" className='submit-button'>Register</button>
          </div>
        </form>
      </div>

    </motion.div>
  )
}