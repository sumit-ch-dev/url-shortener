import React, { useContext } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { UrlContext } from '../../contexts/UrlContext';
import { Container, Title, StyledForm, StyledField, ErrorText, SubmitButton } from './EntryPage.styles';
import UrlCardList from '../list-page/UrlCardList';


// Styled components

const EntryPage = () => {
  const { urls, addUrl } = useContext(UrlContext);

  const validationSchema = Yup.object().shape({
    url: Yup.string().url('Invalid URL').required('URL is required'),
  });

  const generateShortUrl = (url) => {
    const randomString = Math.random().toString(36).substring(2);
    return `https://bit.ly/${randomString}`;
  };
  

  const handleSubmit = (values, { resetForm }) => {
    const { url } = values;
    const shortUrl = generateShortUrl(url);
    const urlData = { url, shortUrl };

    addUrl(urlData);
    resetForm();
  };

  return (
    <Container>
      <Title>Entry Page</Title>
      <Formik
        initialValues={{ url: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <StyledField type="text" name="url" placeholder="Enter URL" />
          <ErrorText name="url" component="div" />
          <SubmitButton type="submit">Convert</SubmitButton>
        </StyledForm>
      </Formik>
      <div>
        <UrlCardList urls={urls} />
      </div>
    </Container>
  );
};

export default EntryPage;
