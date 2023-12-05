import express from 'express'
import axios from 'axios'

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
 
  const fullUrl = `https://www.hebcal.com/converter?cfg=json&date=2023-12-04&g2h=1&strict=1`
  
  try {
    const resp = await axios.get(fullUrl)
    res.send(resp.data)
  } catch (error) {
    console.error(error);
  }

})

app.listen(port, () => {
  console.log(`port: ${port} listening`)
})
