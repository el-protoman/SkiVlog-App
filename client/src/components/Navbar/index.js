import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';
import profile from '../../public-images/EPICHeader.png'

const Navbar = () => {
return (
	<>
	<Nav>
		
		<Bars />
		<a href='https://www.epicpass.com/' target="_blank" rel="noreferrer">
		<div className='card' style={{width:"250px",height:"80px",margin:"0px",backgroundColor:"#f8951f",border:"0px solid"}}><img src={profile} alt="profile" style={{width:"100%",objectFit:"contain",height:"82px",borderRadius:"30px"}}/></div>
		</a>
		<NavMenu style={{width:"800px"}}>
			
		<NavLink to='/about' >
			About
		</NavLink>
		<NavLink to='/mainpage' >
			Breckenridge Map
		</NavLink>
		<NavLink to='/' >
			Home
		</NavLink>
		{/* <NavLink to='/team' >
			Teams
		</NavLink> */}
		{/* <NavLink to='/blogs' >
			Blogs
		</NavLink> */}
		<NavLink to='/sign-up' >
			Sign Up
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		
		<NavBtn>
		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
