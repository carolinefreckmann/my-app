import { useState } from 'react'
import './App.css'

function App() {
  const [photo, setPhoto] = useState(null)

  function handleUpload(e) {
    const file = e.target.files[0]
    if (file) {
      setPhoto(URL.createObjectURL(file))
    }
  }

  return (
    <div className="locket-app">
      <p className="from-label">🥐</p>

      <div className="photo-circle">
        {photo
          ? <img src={photo} alt="your locket photo" className="photo" />
          : <span className="placeholder">📷</span>
        }
      </div>

      <p className="time-label">just now</p>

      <label className="upload-btn">
        send a photo
        <input type="file" accept="image/*" onChange={handleUpload} hidden />
      </label>
    </div>
  )
}

export default App
