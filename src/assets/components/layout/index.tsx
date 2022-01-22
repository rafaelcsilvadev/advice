import React, { useLayoutEffect, useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Monk from "../../images/monk.png";
import { useLocation } from "react-router-dom";
import storeContext from "../../../utils/stores/store";
import PresentationSystem from "../presentation";
import { NavLink } from "react-router-dom";

export default function Layout({ children }: any) {
	const location = useLocation();
	const { presentation } = useContext(storeContext);

	const activeLinkNavBar = () => {
		const pathname = document.getElementsByTagName("a");

		for (let i in pathname) {
			if (pathname[i]?.pathname === location.pathname) {
				pathname[i].classList.add("active");
			}
		}
	};

	useLayoutEffect(() => {
		activeLinkNavBar();
	}, [location]);

	return (
		<>
			{!presentation && <PresentationSystem />}
			<section className="background-sky w-100vw h-100vh">
				<Navbar bg="bg-transparent" variant="dark">
					<Container>
						<NavLink to="/">
							<img src={Monk} alt="Monk" width="40rem" />
						</NavLink>
						<Nav className="me-auto">
							<NavLink to="/" className="nav-link">
								Home
							</NavLink>
							{/* <NavLink to="/about" className="nav-link">
								About
							</NavLink>
							<NavLink to="/author" className="nav-link">
								Author
							</NavLink> */}
						</Nav>
					</Container>
				</Navbar>
				{presentation ? children : null}
			</section>
		</>
	);
}
