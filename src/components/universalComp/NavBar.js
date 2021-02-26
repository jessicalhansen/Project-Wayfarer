import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import logo from '../../images/worldlogo2.png';


export default function NavBar() {


	return (
		<header className="bg-gray-800">
			<div className="container mx-auto flex justify-evenly">
			<img src={logo} alt={'worldlogo'} id="worldlogo"/>
				<NavLink
					exact
					to="/"
					activeClassName="active-link text-gray-800 bg-gray-300"
					className="logo inline-flex py-3 px-3 mx-5 text-white hover:text-green-700 text-3xl font-bold Helvetica Neue"
				>
					 Wayfarer
				</NavLink>
				<nav className="flex">
					<NavLink
						to="/cities"
						activeClassName="active-link text-gray-800 bg-gray-300"
						className="link inline-flex items-center text-white hover:text-green-700"
					>
						Cities
					</NavLink>
					<NavLink
						to="/about"
						activeClassName="active-link text-gray-800 bg-gray-300"
						className="link inline-flex items-center text-white hover:text-green-700"
					>
						About
					</NavLink>
					<NavLink
						to="/login"
						activeClassName="active-link text-gray-800 bg-gray-300"
						className="link inline-flex items-center text-white hover:text-green-700"
					>
						Login
					</NavLink>
					<NavLink
						to="/signup"
						activeClassName="active-link text-gray-800 bg-gray-300"
						className="link inline-flex items-center text-white hover:text-green-700"
					>
						Sign-Up
					</NavLink>
				</nav>
				<div id="icon" className="inline-flex py-3 px-3">
					<SocialIcon
						url="https://git.generalassemb.ly/jessicalh/Project-Wayfarer/tree/master"
						className="mr-4"
						target="_blank"
						fgColor="#fff"
						style={{ height: 35, width: 35 }}
					/>
				</div>
			</div>
		</header>
	);
}
