import React from 'react';
import { Link } from 'react-router-dom';
import { StyledHeader, Logo, StyledMenu, MenuItem } from './NavBar.styles';

const Navbar = () => {
  return (
    <StyledHeader>
      <Logo>Your Logo</Logo>
      <StyledMenu mode="horizontal" defaultSelectedKeys={['home']}>
        <MenuItem key="home">
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem key="list">
          <Link to="/list">List</Link>
        </MenuItem>
        <MenuItem key="edit">
          <Link to="/edit">Edit</Link>
        </MenuItem>
      </StyledMenu>
    </StyledHeader>
  );
};

export default Navbar;
