//Problem: We need a simple way to get the stockPrice of a compony
//Solution: Use Node.js to connect to Taiwan Stock Exchange'API to get the stock price information to print out
const StockPrice = require('./StockPrice');
const getStockCode = process.argv.slice(2);
getStockCode.forEach(StockPrice.get);