//Problem: We need a simple way to get the stockPrice of a compony
//Solution: Use Node.js to connect to Taiwan Stock Exchange'API to get the stock price information to print out

const https = require('https');
const class_stockCode = "tse_2330"

function printMessage(compony, stockPrice){
    const message = `Today, the price of ${compony} is ${stockPrice} NTD.`;
    console.log(message);
}

//Connect to the API URL (https://mis.twse.com.tw/stock/api/getStockInfo.jsp?ex_ch=${class_stockCode}.tw&json=1&delay=0&_=1611905929306)
const request = https.get(`https://mis.twse.com.tw/stock/api/getStockInfo.jsp?ex_ch=${class_stockCode}.tw&json=1&delay=0&_=1611905929306`, response =>{
    console.log(response.statusCode);
    let body = "";
    //Read the data 
    response.on('data', data =>{
        body +=  data.toString();
    })

    //Parse the data
    response.on('end', () => {
        console.log(JSON.parse(body));
    })

    //Print the data
});
