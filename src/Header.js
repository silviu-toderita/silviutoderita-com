import React from 'react';

import { Card, CardMedia, ThemeProvider, Typography } from '@mui/material';

import theme from './Theme.js'
import banner from './img/banner.jpg'

function Header() {
  return (
    <ThemeProvider theme={theme}>
      <Card
        sx={{
          position: 'relative'
        }}>
        <CardMedia
          component='img'
          image={banner}
          alt="banner"
          height='250'
          sx={{
            filter: 'brightness(25%)'
          }} />
        <Typography
          variant='h1'
          position='absolute'
          top='30%'
          left='10%'
          color='primary'>
          Silviu Toderita
        </Typography>
      </Card>
    </ThemeProvider >
  );
}

export default Header;