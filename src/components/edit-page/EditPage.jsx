import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Input } from 'antd';
import { EditPageContainer, UrlCard, FormContainer, FieldContainer, ErrorText, SubmitButton, DeleteButton } from './EditPage.styles';
import { UrlContext } from '../../contexts/UrlContext';

const validationSchema = Yup.object().shape({
  originalUrl: Yup.string().url('Invalid URL').required('Required'),
});

const generateShortUrl = (url) => {
  const hashCode = url.split('').reduce((a, b) => {
    a = (a << 5) - a + b.charCodeAt(0);
    return a & a;
  }, 0);

  return `https://bit.ly/${Math.abs(hashCode).toString(36)}`;
};

const EditPage = () => {
  const { urls, updateUrl, deleteUrl } = useContext(UrlContext);

  const handleUrlSubmit = (values, actions) => {
    const shortUrl = generateShortUrl(values.originalUrl);
    updateUrl(values.id, values.originalUrl, shortUrl);
    actions.resetForm();
  };

  const handleUrlDelete = (id) => {
    deleteUrl(id);
  }


  return (
    <EditPageContainer>
      {urls.map((url) => (
        <UrlCard key={url.id}>
          <Formik
            initialValues={url}
            validationSchema={validationSchema}
            onSubmit={handleUrlSubmit}
          >
            <FormContainer>
              <FieldContainer>
                <label htmlFor={`originalUrl_${url.id}`}>Original URL:</label>
                <Field
                  as={Input}
                  type="text"
                  id={`originalUrl_${url.id}`}
                  name="originalUrl"
                />
                <ErrorMessage name="originalUrl" component={ErrorText} />
              </FieldContainer>
              <FieldContainer>
                <label htmlFor={`shortUrl_${url.id}`}>Short URL:</label>
                <Field
                  as={Input}
                  type="text"
                  id={`shortUrl_${url.id}`}
                  name="shortUrl"
                  disabled
                />
              </FieldContainer>
              <SubmitButton type="primary" htmlType="submit">Update</SubmitButton>
              <DeleteButton type="danger" onClick={() => handleUrlDelete(url.id)}>Delete</DeleteButton>
            </FormContainer>
          </Formik>
        </UrlCard>
      ))}
    </EditPageContainer>
  );
};

export default EditPage;
