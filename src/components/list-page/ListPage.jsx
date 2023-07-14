import React, { useContext } from 'react';
import { UrlContext } from '../../contexts/UrlContext';
import UrlCardList from './UrlCardList';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const ListPage = () => {
  const { urls } = useContext(UrlContext);

  return (
    <Container>
      <Title>List Page</Title>
      {urls.length > 0 ? (
        <UrlCardList urls={urls} />
      ) : (
        <p>No URLs found.</p>
      )}
    </Container>
  );
};

export default ListPage;
