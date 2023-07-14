import { Card, Url, ShortUrlContainer, ShortUrl, CopyButton } from './UrlCard.styles';

const UrlCard = ({urlData}) => {

    const handleCopyClick = (shortUrl) => {
        navigator.clipboard.writeText(shortUrl);
        alert('Short URL copied to clipboard!');
    };

    const {url, shortUrl} = urlData;

    return (
        <div>
            <Card>
                <Url>{url}</Url>
                <ShortUrlContainer>
                    <ShortUrl>{shortUrl}</ShortUrl>
                    <CopyButton onClick={() => handleCopyClick(shortUrl)}>
                        Copy
                    </CopyButton>
                </ShortUrlContainer>
            </Card>
        </div>
    )
}

export default UrlCard