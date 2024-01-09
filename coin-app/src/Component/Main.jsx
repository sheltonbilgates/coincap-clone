import React, { useEffect, useState } from "react";
import "../Styles/main.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from '@mui/material/Button';



export const Main = () => {
  const [coinData, setCoinData] = useState([]);
  const [displayCount, setDisplayCount] = useState(20);
  const [prevChange, setPrevChange] = useState(null);

  useEffect(() => {
    const apicall = async () => {
      try {
        const url = `https://api.coincap.io/v2/assets`;
        const res = await fetch(url);
        const data = await res.json();
        setCoinData(data.data);
      } catch (e) {
        console.log(e);
      }
    };

    apicall();
    const interval = setInterval(() => {
      apicall();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  function createData(coin) {
    const iconUrl = `https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`;

    const formatNumber = (value) => {
      const formatter = new Intl.NumberFormat();
      if (value >= 1e9) {
        return `${(value / 1e9).toFixed(2)}b`;
      } else if (value >= 1e6) {
        return `${(value / 1e6).toFixed(2)}m`;
      }
      return formatter.format(value);
    };

    return {
      rank: coin.rank,
      name: { symbol: coin.symbol, name: coin.name, iconUrl },
      symbol: coin.symbol,
      price: formatNumber(coin.priceUsd),
      maerketcap: formatNumber(coin.marketCapUsd),
      vwap: formatNumber(coin.vwap24Hr),
      supply: formatNumber(coin.supply),
      volume: formatNumber(coin.volumeUsd24Hr),
      change: formatNumber(coin.changePercent24Hr),
      explorer: coin.explorer,
    };
  }

  const rows = coinData.slice(0, displayCount).map(createData);

  const handleLoadMore = () => {
    setDisplayCount(displayCount + 20);
  };

  const handleRowClick = (currentChange) => {
    if (prevChange !== null) {
      if (parseFloat(currentChange) > parseFloat(prevChange)) {
        return "flash-green";
      } else if (parseFloat(currentChange) < parseFloat(prevChange)) {
        return "flash-red";
      }
    }
    return "";
  };

  return (
    <div className="main">
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
                  className={handleRowClick(row.change)}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.rank}
                  </TableCell>
                  <a href={row.explorer} target="_blank"><TableCell component="th" scope="row">
                    <img
                      src={row.name.iconUrl}
                      alt={row.name.symbol}
                      style={{ width: "30px", marginRight: "8px" }}
                    />
                    <div className="row1">
                      {row.name.name}
                      <div className="row2">{row.name.symbol}</div>
                    </div>
                  </TableCell></a>
                  <TableCell align="right">${row.price}</TableCell>
                  <TableCell align="right">{row.maerketcap}</TableCell>
                  <TableCell align="right">{row.vwap}</TableCell>
                  <TableCell align="right">{row.supply}</TableCell>
                  <TableCell align="right">{row.volume}</TableCell>
                  <TableCell
                    align="right"
                    className={
                      parseFloat(row.change) >= 0 ? "positive" : "negative"
                    }
                  >
                    {row.change}%
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <br />
      </div>
      <div className="btn" style={{ textAlign: "center", marginTop: "10px" }}>
        {coinData.length > displayCount && (
          <Button
            variant="contained"
            color="primary"
            onClick={handleLoadMore}
          >
            Load More
          </Button>
        )}
      </div>
    </div>
  );
};
