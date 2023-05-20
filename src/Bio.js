import React from 'react';

import { Grid, Button, ThemeProvider } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

import theme from './Theme.js'
import portrait from './img/portrait.png'

function Bio() {
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        spacing={2}
        direction="row"
        alignItems='center'
        justifyContent='center'
        sx={{ marginTop: '4%' }}>
        <Grid
          item>
          <img
            src={portrait}
            alt="Silviu's Portrait"
            height='200px'
          />
        </Grid>
        <Grid
          item
          sx={{
            fontFamily: "Roboto",
            fontSize: '1.2rem'
          }}>
          Embedded software developer studying in the Bachelor of Computer Science program at UBC, graduating November 2023.
          <br /><br />
          Actively pursuing full-time employment in embedded software, primarily in Vancouver, Canada.
          <br /><br />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={6}
        direction="row"
        alignItems='center'
        justifyContent='center'>
        <Grid item>
          <Button
            fullwidth
            variant="contained"
            color="secondary"
            href="https://www.linkedin.com/in/silviu-toderita/"
            startIcon={<LinkedInIcon />}>
            linkedin
          </Button>
        </Grid>
        <Grid item>
          <Button
            fullwidth
            variant="contained"
            color="secondary"
            href="https://github.com/silviu-toderita"
            startIcon={<GitHubIcon />}>
            github
          </Button>
        </Grid>
        <Grid item>
          <Button
            fullwidth
            variant="contained"
            color="secondary"
            href="mailto:hello@silviutoderita.com"
            startIcon={<EmailIcon />}>
            email
          </Button>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Bio;