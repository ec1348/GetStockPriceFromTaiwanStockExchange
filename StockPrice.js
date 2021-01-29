//Problem: We need a simple way to get the stockPrice of a compony
//Solution: Use Node.js to connect to Taiwan Stock Exchange'API to get the stock price information to print out

const https = require('https');

function printMessage(compony, stockPrice){
    const message = `Today, the price of ${compony} is ${stockPrice} NTD.`;
    console.log(message);
}

function getProfile(class_stockCode){
    //Connect to the API URL (https://mis.twse.com.tw/stock/api/getStockInfo.jsp?ex_ch=${class_stockCode}.tw&json=1&delay=0&_=1611905929306)
    const request = https.get(`https://mis.twse.com.tw/stock/api/getStockInfo.jsp?ex_ch=${class_stockCode}.tw&json=1&delay=0&_=1611905929306`, response =>{
        let body = "";
        //Read the data 
        response.on('data', data =>{
            body +=  data.toString();
        })

        response.on('end', () => {
            //Parse the data
            const profile = JSON.parse(body);
            //Print the data
            printMessage(profile.msgArray.map(nf => nf.nf),  profile.msgArray.map(z => z.z));
        })
    });
}

const getStockCode = process.argv.slice(2);
getStockCode.forEach(getProfile);
