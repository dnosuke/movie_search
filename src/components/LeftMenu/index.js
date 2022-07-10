import React from "react";
import { useNavigate } from "react-router";
import * as C from "./styles"

const LeftMenu = () => {
    let navigate = useNavigate();

    return (
        <C.Container>
            <ul>
                <li>
                    <h1>Menu</h1>
                    <span onClick={() => {
                        navigate("/")
                    }}><i className="uil uil-estate"></i> Home</span>
                    <span><i className="uil uil-globe"></i> Community</span>
                    <span><i className="uil uil-compass"></i> Discover</span>
                    <span><i className="uil uil-trophy"></i> Awards</span>
                    <span><i className="uil uil-user-circle"></i> Celebs</span>
                </li>
                <li>
                    <h1>Library</h1>
                    <span><i className="uil uil-clock"></i> Recent</span>
                    <span><i className="uil uil-star"></i> Top Rated</span>
                    <span><i className="uil uil-folder-download"></i> Downloaded</span>
                </li>
                <li>
                    <h1>Category</h1>
                    <span><i className="uil uil-tv-retro"></i> TV - Show</span>
                    <span><i className="uil uil-video"></i> Movie</span>
                    <span><i className="uil uil-diamond"></i> Anime</span>
                </li>
                <li>
                    <h1>General</h1>
                    <span><i className="uil uil-setting"></i> Settings</span>
                    <span><i className="uil uil-sign-out-alt"></i> Log Out</span>
                </li>
            </ul>
        </C.Container>
    )
};

export default LeftMenu;