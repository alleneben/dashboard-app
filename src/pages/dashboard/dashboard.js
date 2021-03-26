import { useAppContext } from '../../store/context';


function Dashboard(){
    // const { state, dispatch ,login} = useAppContext()

    

    return(
        <div className="dashboard"  >
            <nav className="navbar">Whizzy Academy</nav>
            <div className="card">Account Balance GHC 200</div>
            <div className="card">Deposits GHC 1,000</div>
            <div className="card">Loan GHC 10,000</div>
            <div className="card">Float GHC 1.00</div>
        </div>
    )
}

export default Dashboard;