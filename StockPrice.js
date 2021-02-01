
//Require https module
const https = require('https');

//Require http module
const http = require('http');

function printError(error){
    console.error(error.message);
}

function printMessage(compony, stockPrice){
    const message = `Today, the price of ${compony} is ${stockPrice} NTD.`;
    console.log(message);
}

function get(class_stockCode){
    try{
        //Connect to the API URL (https://mis.twse.com.tw/stock/api/getStockInfo.jsp?ex_ch=${class_stockCode}.tw&json=1&delay=0&_=1611905929306)
        const request = https.get(`https://mis.twse.com.tw/stock/api/getStockInfo.jsp?ex_ch=${class_stockCode}.tw&json=1&delay=0&_=1611905929306`, response =>{
            if(response.statusCode === 200){
                let body = "";
                //Read the data 
                response.on('data', data =>{
                    body +=  data.toString();
                });

                response.on('end', () => {
                    try{
                    //Parse the data
                    const profile = JSON.parse(body);
                    //Print the data
                    printMessage(profile.msgArray.map(nf => nf.nf),  profile.msgArray.map(z => z.z));
                    } catch(error) {
                        printError(error);
                    }
                });
            } else{
                const message = `There was en error getting the profile for ${class_stockCode} (${http.STATUS_CODES[statusCode]})`;
            }
        });
        //error handling event when is not a supported URL protocol
        request.on('error', error => console.error(`Problem with request: ${error.message}`));
    }catch (error){
        //error handling event when the URL is not valid
         printError(error);
    }
}

//explicitly state the created API function to be exported  get /*name for api*/ = get /*function wants to be exported*/
module.exports.get = get;