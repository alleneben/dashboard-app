
import { Link } from 'react-router-dom';


function Signup() {
    

    return (
        <form>
            <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control"/>
            </div>

            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control"/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control"/>
            </div>

            <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" className="form-control"/>
            </div>

            <button>Signup</button>        
            <Link to="/">Already have an account? </Link> 
        </form>
    )
}


export default Signup;