import React from 'react'
import "../Styles/herobanner.css"
import Grid from '@mui/material/Grid';


export const Herobanner = () => {
  return (
    <div className='herobanner'>
      <div className="container">
        <div className="content">
          <div className="grid">
            <Grid container spacing={2}>
              <Grid xs={6} sm={4} md={2}>
                MARKET CAP
                <br />
                <div className='rate'>$1.51T</div>
              </Grid>
              <Grid xs={6} sm={4} md={2}>
                EXCHANGE VOL
                <br />
                <div className='rate'>$42.86B</div>
              </Grid>
              <Grid xs={6} sm={4} md={2}>
                ASSETS
                <br />
                <div className='rate'>2,296</div>
              </Grid>
              <Grid xs={6} sm={4} md={2}>
                EXCHANGES
                <br />
                <div className='rate'>73</div>
              </Grid>
              <Grid xs={6} sm={4} md={2}>
                MARKETS
                <br />
                <div className='rate'>9,272</div>
              </Grid>
              <Grid xs={6} sm={4} md={2}>
                BTC DOM INDEX
                <br />
                <div className='rate'>52.2%</div>
              </Grid>
            </Grid>

          </div>
        </div>
      </div>
    </div>
  )
}
