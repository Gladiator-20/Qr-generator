import QRCode from 'qrcode'
import { useState } from 'react'


function App() {
  const [url, setUrl] = useState('')
  const [qrcode, setQrcode] = useState('')

  const GenerateQrcode = () =>{
    QRCode.toDataURL(url,
      {
        width: 800,
        margin: 2,
        color: {
          dark: '#ffffffff',
          light: '000000ff'
        }
    },
     (err, url) => {
      if (err) return console.error(err)
      setQrcode(url)
    })
  }

  return (
    <div className='app'>
      <h1>Generate Qr Code</h1>
      <input 
        type="text" 
        placeholder='Example: https://google.com OR google.com'
        value={url}
        onChange = {(evt) => setUrl(evt.target.value)}
      />
      <button className='generate' onClick={GenerateQrcode}>Generate</button>
      {qrcode &&
      <>
        <img src={qrcode} />
        <a className='download' href={qrcode} download="qrcode.png" >Download</a>
      </>}
    </div>
  )
}

export default App
