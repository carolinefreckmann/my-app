import { useState } from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState(null)
  const [photo, setPhoto] = useState(null)

  if (!user) {
    return <LoginScreen onLogin={setUser} />
  }

  return <LocketScreen user={user} photo={photo} setPhoto={setPhoto} />
}

function LoginScreen({ onLogin }) {
  const [name, setName] = useState('')
  const [passcode, setPasscode] = useState('')
  const [avatar, setAvatar] = useState(null)

  function handleAvatar(e) {
    const file = e.target.files[0]
    if (file) setAvatar(URL.createObjectURL(file))
  }

  function handleSubmit() {
    if (name.trim() && passcode.length === 4) onLogin({ name, avatar })
  }

  return (
    <div className="screen login-screen">
      <h1 className="app-title">🥐</h1>

      <label className="avatar-upload">
        {avatar
          ? <img src={avatar} alt="profile" className="avatar-preview" />
          : <span className="avatar-placeholder">+</span>
        }
        <input type="file" accept="image/*" onChange={handleAvatar} hidden />
      </label>
      <p className="avatar-hint">add a profile photo</p>

      <input
        className="name-input"
        type="text"
        placeholder="your name"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <input
        className="name-input passcode-input"
        type="password"
        placeholder="4-digit passcode"
        maxLength={4}
        inputMode="numeric"
        value={passcode}
        onChange={e => setPasscode(e.target.value.replace(/\D/g, ''))}
      />

      <button
        className="login-btn"
        onClick={handleSubmit}
        disabled={!name.trim() || passcode.length !== 4}
      >
        let's go
      </button>
    </div>
  )
}

function LocketScreen({ user, photo, setPhoto }) {
  function handleUpload(e) {
    const file = e.target.files[0]
    if (file) setPhoto(URL.createObjectURL(file))
  }

  return (
    <div className="screen locket-screen">
      <div className="top-bar">
        <div className="profile-chip">
          <div className="profile-avatar">
            {user.avatar
              ? <img src={user.avatar} alt={user.name} />
              : <span>{user.name[0].toUpperCase()}</span>
            }
          </div>
          <span className="profile-name">{user.name}</span>
        </div>
      </div>

      <p className="from-label">🥐</p>

      <div className="photo-circle">
        {photo
          ? <img src={photo} alt="locket photo" className="photo" />
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
