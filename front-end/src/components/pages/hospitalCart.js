import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const placeholderImageUrl =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png';

const Cards = ({ hospitalName, imageUrl, address, phone, fax, emergency, websites }) => {
 
  const displayImageUrl = imageUrl || placeholderImageUrl;

  
  const hasData = hospitalName || address || phone || fax || emergency || websites;

  return hasData ? (
    <Card
      sx={{
        maxWidth: 250,
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s',
        '&:hover': { transform: 'scale(1.05)' },
        cursor: 'pointer',
        marginBottom: '20px',
        marginRight: '20px',
      }}
    >
      <CardMedia
        component="img"
        alt={hospitalName}
        height="120"
        image={displayImageUrl}
        sx={{ objectFit: imageUrl ? 'cover' : 'contain' }}
      />
      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '8px' }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', marginBottom: '6px', color: '#2196F3' }}>
          {hospitalName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Address:</strong> {address}<br />
          <strong>Phone:</strong> {phone}<br />
          <strong>Fax:</strong> {fax}<br />
          <strong>Emergency:</strong> {emergency}<br />
          {websites && (
            <React.Fragment>
              <strong>Websites:</strong> <a href={websites} target="_blank" rel="noopener noreferrer" style={{ color: '#2196F3' }}>{websites}</a><br />
            </React.Fragment>
          )}
        </Typography>
      </CardContent>
    </Card>
  ) : null;
}

export default Cards;
