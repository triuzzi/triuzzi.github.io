import { useState } from 'react'
import './App.css'

const pages = {
  about: {
    title: 'About',
    content: (
      <>
        <h1>Emanuele Triuzzi</h1>
        <p>Software Engineer based in Milan.</p>
        <p>
          MSc in Computer Science from Politecnico di Milano, research and registered patent in algorithms on graphs and optimization.
        </p>
      </>
    )
  },
  work: {
    title: 'Work',
    content: (
      <>
        <h1>Work</h1>
        <p>Platform Engineer at Bending Spoons.</p>
        <p>
          Building and scaling infrastructure, distributed systems, and developer tooling.
          Experience across the full stack, from cloud platforms to product interfaces.
        </p>
      </>
    )
  },
  contact: {
    title: 'Contact',
    content: (
      <>
        <h1>Contact</h1>
        <p>Feel free to reach out.</p>
        <div className="link-list">
          <a href="mailto:emanuele@triuzzi.com" className="link-item">
            emanuele@triuzzi.com
          </a>
          <a href="https://www.linkedin.com/in/triuzzi/" className="link-item" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/triuzzi" className="link-item" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </>
    )
  }
}

function App() {
  const [activePage, setActivePage] = useState('about')

  return (
    <div className="app">
      <div className="window">
        <div className="titlebar">
          <div className="traffic-lights">
            <div className="traffic-light close" />
            <div className="traffic-light minimize" />
            <div className="traffic-light maximize" />
          </div>
          <div className="titlebar-title">triuzzi.com</div>
        </div>
        <div className="window-body">
          <nav className="sidebar">
            {Object.entries(pages).map(([key, page]) => (
              <button
                key={key}
                className={`nav-item ${activePage === key ? 'active' : ''}`}
                onClick={() => setActivePage(key)}
              >
                {page.title}
              </button>
            ))}
          </nav>
          <main className="content">
            {pages[activePage].content}
          </main>
        </div>
      </div>
    </div>
  )
}

export default App
