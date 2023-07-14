import React, { useContext } from 'react';
import { UrlContext } from '../contexts/UrlContext';

const EditPage = () => {
  const { urls, updateUrl } = useContext(UrlContext);

  const handleUrlChange = (e, index) => {
    const updatedUrl = e.target.value;
    updateUrl(index, updatedUrl);
  };

  return (
    <div>
      <h1>Edit Page</h1>
      {urls.map((urlData, index) => (
        <div key={index}>
          <input
            type="text"
            value={urlData.url}
            onChange={(e) => handleUrlChange(e, index)}
          />
          <p>Short URL: {urlData.shortUrl}</p>
        </div>
      ))}
    </div>
  );
};

export default EditPage;
