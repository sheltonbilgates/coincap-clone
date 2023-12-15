import React, { useEffect, useState } from 'react'
import "../Styles/main.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const Main = () => {
    const [coinData, setCoinData] = useState([])

    useEffect(()=>{
        const apicall = async () => {
            try{
                const url = `https://api.coincap.io/v2/assets`
                const res = await fetch(url)
                const data = await res.json()
                setCoinData(data.data)
    
            }catch(e){
                console.log(e)
            }
        }
        apicall()
    }, [])
    
    
    function createData(coin) {
        return {
            rank: coin.rank,
      name: coin.name,
      price: coin.priceUsd,
      maerketcap: coin.marketCapUsd,
      vwap: coin.vwap24Hr,
      supply: coin.supply,
      volume: coin.volumeUsd24Hr,
      change: coin.changePercent24Hr,
        }
      }
      
      const rows = coinData.map(createData)

  return (
    <div className='main'>
        <div className="container1">
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Market Cap</TableCell>
            <TableCell align="right">VWAP&nbsp;(24Hr)</TableCell>
            <TableCell align="right">Supply</TableCell>
            <TableCell align="right">Volume&nbsp;(24Hr)</TableCell>
            <TableCell align="right">Change&nbsp;(24Hr)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.rank}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.maerketcap}</TableCell>
              <TableCell align="right">{row.vwap}</TableCell>
              <TableCell align="right">{row.supply}</TableCell>
              <TableCell align="right">{row.volume}</TableCell>
              <TableCell align="right">{row.change}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    </div>
  )
}
