import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { UrlContext } from '../../contexts/UrlContext';

const EntryPage = () => {
  const { urls, addUrl } = useContext(UrlContext);

  const validationSchema = Yup.object().shape({
    url: Yup.string().url('Invalid URL').required('URL is required'),
  });

  const generateShortUrl = (url) => {
    // Replace this with your own URL shortening logic
    const hashCode = url.split('').reduce((a, b) => {
      a = (a << 5) - a + b.charCodeAt(0);
      return a & a;
    }, 0);

    return Math.abs(hashCode).toString(36);
  };

  const handleSubmit = (values, { resetForm }) => {
    const { url } = values;
    const shortUrl = generateShortUrl(url);
    const urlData = { url, shortUrl };

    addUrl(urlData);
    resetForm();
  };

  return (
    <div>
      <h1>Entry Page</h1>
      <Formik
        initialValues={{ url: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field type="text" name="url" placeholder="Enter URL" />
          <ErrorMessage name="url" component="div" />
          <button type="submit">Convert</button>
        </Form>
      </Formik>
      <div>
        {urls.map((urlData, index) => (
          <div key={index}>
            <p>Original URL: {urlData.url}</p>
            <p>Shortened URL: {urlData.shortUrl}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EntryPage;
