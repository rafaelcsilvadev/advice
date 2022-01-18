import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Monge from "../../images/monge.png";
import { useLocation } from "react-router-dom";

export default function Layout({ children }: any) {
    const location = useLocation();
    
    const activeLinkNavBar = (pathname: string): string => {
        switch (pathname) {
            case '/':
            case '/abount': 
            case '/author':    
                return 'active';
            default:
                return '';
        }
    }
	return (
		<main>
			<Navbar bg="primary" variant="dark">
				<Container>
					<Navbar.Brand href="#home">
						<img src={Monge} alt="Monge" width="40rem" />
					</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="/" className={activeLinkNavBar(location.pathname)}>
							Home
						</Nav.Link>
						<Nav.Link
							href="/abount"
							className={activeLinkNavBar(location.pathname)}
						>
							Abount
						</Nav.Link>
						<Nav.Link
							href="/author"
							className={activeLinkNavBar(location.pathname)}
						>
							Author
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
			{children}
		</main>
	);
}
