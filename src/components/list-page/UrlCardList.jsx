import UrlCard from './UrlCard';

const UrlCardList = ({ urls }) => {
  return (
    <div>
      {urls.map((urlData, index) => (
        <div key={index}>
            <UrlCard urlData={urlData} />
        </div>
      ))}
    </div>
  );
};

export default UrlCardList;