import React from 'react'
import { Nav,NavbarContainer,NavLogo,NavIcon } from './Navbar.elements'



//rafce + tab ->create arrow function including export

//NavLogo is not just a image.it is a link.therefore i have to install react-router-dom for import the route
const Navbar = () => {
    return (
        <>

            <Nav>
                <NavbarContainer>
                    <NavLogo to ="/"> 
                        <NavIcon/>
                            ULTRA 
                    </NavLogo>
                    
                </NavbarContainer>
            </Nav>

        </>
    )
}

export default Navbar
