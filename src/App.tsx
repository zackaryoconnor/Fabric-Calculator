import { useState } from 'react'
import './App.css'
import './index.css'

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
      <section className='hero'>
          <div className='left'>
            <h1>Calculate Your Fabric Costs with Ease</h1>
            <p>Perfect for Etsy sellers and small business owners. Price handmade items accurately by calculating the exact cost of fabric per piece.</p>
          </div>
          <div className='right'>
            <img src="https://lh3.googleusercontent.com/gg/AAHar4chmz_6pYT6ikiatOlfQtFSm0LehP5rMH2r7zrj8aZVPgUexT-Ijx9GeBEHs8-XJ3-e_qT4DdvHI6bOoG74UkDiv-VWMCw3ivra4x3Pda8b_oMD3BExXfYNyIjUu_OCnfjEdoImQQmcLSTBKwj3K9UpnGxu1XBnheyVfB-MBI_PMQg6_6Y=s1024-rj" alt="spools of thread" />
          </div>
      </section>
      
      <section className='body'>
        <div className='headline'>
          <h2>Fabric Cost Calculator</h2>
          <p>Enter your fabric details to clalulate the cost per item</p>
        </div>

        <div className='calculator'>
          <h3>Calculate Your Costs</h3>
          <p>Fill in your fabric details to see the breakdown</p>
          
          <form action="">
            
            <br />
            <div>
              <h5>Measurement Unit</h5>
              <p>Inches</p>
            </div>
            
            <br />
            <div className='lengthWidth'>
              <div>
                <h5>Fabric Length</h5>
                <input type="number" min="0" value={length} onChange={(event) => setLength(event.target.valueAsNumber)}/>
              </div>
              
              <br />
              <div>
                <h5 id='width'>Fabric Width</h5>
                <input type="number" min="0" value={width} onChange={(event) => setWidth(event.target.valueAsNumber)}/>
              </div>
            </div>

            <br />
            <p>Total area: { totalArea } square inches</p>      
            
            <br />
            <br />
            <div>
              <h5>Total Price Paid</h5>
              <input type="number" min="0" value={pricePaid} onChange={(event) => setPricePaid(event.target.valueAsNumber)}/>
            </div>

            <br />
            <br />
            <br />
            <h4>Fabric Used Per Item</h4>


            <br />
            <div className='usedLengthWidth'>
              <div>
                <h5>Used Length</h5>
                <input type="number" min="0" value={usedLength} onChange={(event) => setUsedLength(event.target.valueAsNumber)}/>
              </div>
              
              <br />
              <div>
                <h5>Used Width</h5>
                <input type="number" min="0" value={usedWidth} onChange={(event) => setUsedWidth(event.target.valueAsNumber)}/>
              </div>
            </div>

            <br />
            <p>Used area per item: {totalAreaUsed} square inches</p>

          </form>
          
          <div className='breakdown'>
          <h3>Cost Breakdown</h3>
          <br />
            <div className='costPerInch'>
              <p>Cost per inches:</p>
              <h4>${costPerInch.toFixed(2)}</h4>
            </div>
            <hr />
            <div className='costPerItem'>
              <p>Cost per item:</p>
              <h3>${costPerItem.toFixed(2)}</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
