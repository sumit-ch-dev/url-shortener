import React, { useContext } from 'react';
import { UrlContext } from '../contexts/UrlContext';

const ListPage = () => {
  const { urls } = useContext(UrlContext);

  return (
    <div>
      <h1>List Page</h1>
      {urls.map((urlData, index) => (
        <div key={index}>
          <p>Original URL: {urlData.url}</p>
          <p>Short URL: {urlData.shortUrl}</p>
        </div>
      ))}
    </div>
  );
};

export default ListPage;
