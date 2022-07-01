import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <>
            <div className="d-grid mb-3">
                <button className="btn btn-success" onClick={() => loginWithRedirect()}> <i className="bi bi-door-open"></i> Log In</button>
            </div>

        </>
    )
};

export default LoginButton;