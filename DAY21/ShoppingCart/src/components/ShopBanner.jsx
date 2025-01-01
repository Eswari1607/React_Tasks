import React from 'react';
import { Box, Typography } from '@mui/material';

const ShopBanner = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#343a40',
        color: 'white',
        textAlign: 'center',
        padding: '100px 0',
      }}
    >
      <Typography variant="h1" component="h1" sx={{ fontSize: '3rem', marginBottom: '20px' }}>
      Blooming Bouquets
      </Typography>
      <Typography variant="h6" component="p" sx={{ fontSize: '1.25rem' }}>
      Brighten your home with our hand-picked bouquets
      </Typography>
    </Box>
  );
};

export default ShopBanner;
