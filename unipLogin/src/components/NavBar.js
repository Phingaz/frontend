import styled from "./NavBar.module.css";
import { Link } from "react-router-dom";


export default function Navbar() {
    return (
        <nav>
            <div className={styled.container.flex}>
                <div className={styled.links}>
                    <Link to="/">Home</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                </div>
            </div>
        </nav>
    );
};