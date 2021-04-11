import React from 'react'

const Dashboard = ({history}) => {
    
    React.useEffect(() => {
        if(!localStorage.getItem("authToken")){
            history.push("/login")
        }
    })


    const handleLogout = () => {
        localStorage.removeItem("authToken")
        history.push("/login")
    }

    return (
        <div>
            hi
            <button onClick={handleLogout} >Logout</button>
        </div>
    )
}

export default Dashboard
