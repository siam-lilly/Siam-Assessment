const express = require('express')
const path = require('path')
const stocks = require('./stocks')
const { error } = require('console')

const app = express()
app.use(express.static(path.join(__dirname, 'static')))


app.get('/stocks', async (req, res) => {
  const stockSymbols = await stocks.getStocks()
  res.send({ stockSymbols })
})

app.get('/stocks/:symbol', async (req, res) => {
  const { params: { symbol } } = req
  const data = await stocks.getStockPoints(symbol, new Date())
  res.send(data)
})

/* Step 6 here */

.catch(error => {
  console.log("Stock data could not be retrieved properly. Please try again.")
})

app.listen(3000, () => console.log('Server is running!'))



