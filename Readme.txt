This is the simple node.js app I created.
Run the app.js by typing : node app.js [class_stockCode] | [class_stockCode] | [class_stockCode]

example => node app.js tse_0050
expected result =>
Today, the price of 元大台灣卓越50證券投資信託基金 is 130.2500 NTD.


example => node app.js tse_0050 tse_2330  
expected result  =>
Today, the price of 元大台灣卓越50證券投資信託基金 is 130.2500 NTD.
Today, the price of 台灣積體電路製造股份有限公司 is 605.0000 NTD.


example => node app.js tse_0050 tse_2330 otc_6488  
expected result =>
Today, the price of 元大台灣卓越50證券投資信託基金 is 130.2500 NTD.
Today, the price of 台灣積體電路製造股份有限公司 is 605.0000 NTD.
Today, the price of 環球晶圓股份有限公司 is 648.0000 NTD.

This is just a simple project from Eric chen 2021.
Feel free to contact me and fork it. 
e-mail: ec1348@gmail.com