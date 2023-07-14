import React, { createContext, useState, useEffect } from 'react';

const UrlContext = createContext();

const UrlProvider = ({ children }) => {
  const [urls, setUrls] = useState([]);

  // Load data from local storage on component mount
  useEffect(() => {
    const storedUrls = localStorage.getItem('urls');
    if (storedUrls) {
      setUrls(JSON.parse(storedUrls));
    }
  }, []);

  // Update local storage whenever URLs change
  useEffect(() => {
    localStorage.setItem('urls', JSON.stringify(urls));
  }, [urls]);

  const addUrl = (urlData) => {
    setUrls((prevUrls) => [...prevUrls, urlData]);
  };

  const updateUrl = (index, updatedUrl) => {
    setUrls((prevUrls) => {
      const updatedUrls = [...prevUrls];
      updatedUrls[index].url = updatedUrl;
      return updatedUrls;
    });
  };

  return (
    <UrlContext.Provider value={{ urls, addUrl, updateUrl }}>
      {children}
    </UrlContext.Provider>
  );
};

export { UrlContext, UrlProvider };
