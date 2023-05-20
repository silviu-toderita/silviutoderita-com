import React from 'react';
import ReactDOM from 'react-dom/client';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Card, CardMedia, Typography, Grid, Button } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

import banner from './img/banner.jpg'
import portrait from './img/portrait.png'

const root = ReactDOM.createRoot(document.getElementById('root'));

function Header() {
  return <Card>
    <CardMedia
      component="img"
      image={banner}
      alt="banner"
      height="300"
      sx={{
        position: 'relative',
        filter: 'brightness(25%)'
      }}
    />
    <Typography
      variant="h1"
      sx={{
        color: '#ffffff',
        position: 'absolute',
        top: '100px',
        left: '10%',
      }}>
      Silviu Toderita
    </Typography>
  </Card>
}

function Bio() {
  return <Grid
    container
    direction="row"
    alignItems='center'
    justifyContent='center'
    sx={{ marginTop: '4%' }}>
    <Grid item>
      <img
        src={portrait}
        alt="Silviu's Portrait"
        height='200px'
      />
    </Grid>
    <Grid
      item
      sx={{
        padding: "30px",
        width: "40%",
        fontFamily: "Roboto",
        fontSize: '1.2rem'
      }}>
      Embedded software in the Bachelor of Computer Science program at UBC, graduating November 2023.
      <br /><br />
      Actively pursuing full-time employment in embedded software, primarily in Vancouver, Canada.
      <br /><br />
      <Button
        variant="contained"
        href="https://www.linkedin.com/in/silviu-toderita/"
        startIcon={<LinkedInIcon />}
        sx={{ 
          backgroundColor:'#dddddd',
          color:'#003b68',
          width:'120px',
          margin: "20px" }}>
        linkedin
      </Button>
      <Button
        variant="contained"
        href="https://github.com/silviu-toderita"
        startIcon={<GitHubIcon />}
        sx={{ 
          backgroundColor:'#dddddd',
          color:'#003b68',
          width:'120px',
          margin: "20px" }}>
        github
      </Button>
      <Button
        variant="contained"
        href="mailto:hello@silviutoderita.com"
        startIcon={<EmailIcon />}
        sx={{ 
          backgroundColor:'#dddddd',
          color:'#003b68',
          width:'120px',
          margin: "20px" }}>
        email
      </Button>
    </Grid>
  </Grid>
}

root.render(
  <>
    <Header />
    <Bio />
  </>
);
