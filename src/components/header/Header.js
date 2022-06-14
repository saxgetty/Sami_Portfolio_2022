import React from 'react'

function Header() {

    return (
    
        <div>
            <header>
                <title>Portfolio</title>
                {/* <div className="container-flex">
                    <div className="site-title">
                       <h1 className="text-center text-3xl font-bold ">Sami Saxton-Getty</h1>             
                    </div>
                </div> */}
            </header>
        </div>
    );
}

export default Header

// import { Nav, NavLink, NavItem } from 'react-bootstrap';
//     return (
//         <div>
//             <header Nav as={Nav}>
//                 <title>Sami's Portfolio</title>
//                 <div className="container container-flex">
//                     <div className="site-title">
//                         <center> <h1>Portfolio</h1> </center>                    
//                     </div>
//                 </div>
//                 <Nav variant="tabs" className="justify-content-center" activeKey="/home">
//                     <Nav.Item as={NavItem}>
//                         <Nav.Link as={NavLink} href="/home">About Me</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item as={NavItem}>
//                         <Nav.Link as={NavLink} href="/projects">Projects</Nav.Link>
//                     </Nav.Item>
//                 </Nav>
//             </header>
//         </div>
//     )