import styled from 'styled-components';
import { Menu } from 'antd';

export const StyledHeader = styled.header`
  background-color: #181f29;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.h1`
  color: #fff;
  font-size: 24px;
  margin: 0;
`;

export const StyledMenu = styled(Menu)`
  border: none;

  .ant-menu-item {
    a {
      color: #333;
    }
  }

  .ant-menu-item-selected {
    background-color: transparent;
    border-bottom: 2px solid #ff6b6b;
  }
  
  .ant-menu-item {
    margin: 0 10px;
  }
`;


export const StyledMenuItem = styled(Menu.Item)`
  border: none;
`;
