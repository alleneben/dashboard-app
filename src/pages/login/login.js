
function Login() {
    

    return (
        <form>
            <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control"/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="text" className="form-control"/>
            </div>
            <button>Submit</button>            
        </form>
    )
}


export default Login;