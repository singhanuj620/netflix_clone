import React, {useState, useEffect} from 'react'
import '../Css/Nav.css'


const Nav = () => {

    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                handleShow(true)
            }
            else{
                handleShow(false);
            }
        });

        return () => {
            window.removeEventListener("scroll")
        }
    }, [])

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img src="./logo.png" 
                alt="NetFlix Logo"
                className="nav_logo"/>

            <img src="https://api.adorable.io/avatars/285/netflix@anuj.com.png"
                alt="user avatar"
                className="nav_avatar"/>
        </div>
    )
}

export default Nav
