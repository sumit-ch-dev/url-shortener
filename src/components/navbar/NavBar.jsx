import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, UnorderedListOutlined, EditOutlined } from '@ant-design/icons';

const NavBar = () => {
  return (
    <Menu mode="horizontal" defaultSelectedKeys={['home']}>
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="list" icon={<UnorderedListOutlined />}>
        <Link to="/list">List</Link>
      </Menu.Item>
      <Menu.Item key="edit" icon={<EditOutlined />}>
        <Link to="/edit">Edit</Link>
      </Menu.Item>
    </Menu>
  );
};

export default NavBar;
