import { Route } from "react-router-dom";

const Welcome = () => {
    return (
        <h1>
            The Welcome Page
            <Route path='/welcome/new-user'>
                <p>Hi! new user</p>
            </Route>
        </h1>
    )
}

export default Welcome;