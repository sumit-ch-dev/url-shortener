import styled from 'styled-components';

// Styled components
export const Card = styled.div`
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
`;

export const Url = styled.p`
  font-size: 16px;
  margin: 0;
`;

export const ShortUrlContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ShortUrl = styled.a`
  font-size: 14px;
  color: #666;
  margin: 0;
  flex: 1;
`;

export const CopyButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
`;