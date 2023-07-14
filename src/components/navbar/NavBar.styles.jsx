import styled from 'styled-components';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

export const StyledHeader = styled(Header)`
  background-color: #325d85;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
`;

export const Logo = styled.div`
  color: #fff;
  font-size: 20px;
`;

export const StyledMenu = styled(Menu)`
  background-color: transparent;
  border: none;
`;

export const MenuItem = styled(Menu.Item)`
  & a {
    color: #fff;
    font-weight: bold;
  }

  &.ant-menu-item-selected {
    background-color: #1890ff;
  }
`;
