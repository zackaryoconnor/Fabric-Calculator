import { useState } from 'react'
import './App.css'

function App() {

const [length, setLength] = useState<number>(0)
const [width, setWidth] = useState<number>(0)

const [pricePaid, setPricePaid] = useState<number>(0)

const [usedLength, setUsedLength] = useState<number>(0)
const [usedWidth, setUsedWidth] = useState<number>(0)

const totalArea = length * width
const totalAreaUsed = usedLength * usedWidth
const costPerInch = totalArea > 0 ? pricePaid / totalArea : 0
const costPerItem = totalAreaUsed > 0 ? totalAreaUsed * costPerInch : 0

  return (
    <>
      <h1>Calculate Your Fabric Costs with Ease</h1>
      <p>Perfect for Etsy sellers and small business owners. Price handmade items accurately by calculating the exact cost of fabric per piece.</p>
      <h2>Fabric Cost Calculator</h2>
      <p>Enter your fabric details to clalulate the cost per item</p>
      <h3>Calculate Your Costs</h3>
      <p>Fill in your fabric details to see the breakdown</p>
      <h4>Measurement Unit</h4>
      <p>Inches</p>
      <h4>Fabric Length</h4>
      <input type="number" min="0" value={length} onChange={(event) => setLength(event.target.valueAsNumber)}/>
      <h4 id='width'>Fabric Width</h4>
      <input type="number" min="0" value={width} onChange={(event) => setWidth(event.target.valueAsNumber)}/>
      <p>Total area: { totalArea } square inches</p>      
      <h4>Total Price Paid</h4>
      <input type="number" min="0" value={pricePaid} onChange={(event) => setPricePaid(event.target.valueAsNumber)}/>
      <h4>Fabric Used Per Item</h4>
      <h4>Used Length</h4>
      <input type="number" min="0" value={usedLength} onChange={(event) => setUsedLength(event.target.valueAsNumber)}/>
      <h4>Used Width</h4>
      <input type="number" min="0" value={usedWidth} onChange={(event) => setUsedWidth(event.target.valueAsNumber)}/>
      <p>Used area per item: {totalAreaUsed} square inches</p>
      <h2>Cost Breakdown</h2>
      <h3>Cost per inches:</h3>
      <h3>${costPerInch.toFixed(2)}</h3>
      <hr />
      <h3>Cost per item:</h3>
      <h2>${costPerItem.toFixed(2)}</h2>
    </>
  )
}

export default App
