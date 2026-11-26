import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#6C63FF");
  const [copied, setCopied] = useState(false);

  function generateColor() {
    const randomNumber = Math.floor(Math.random() * 16777216);

    const hexColor = randomNumber
      .toString(16)
      .padStart(6, "0");

    const newColor = `#${hexColor.toUpperCase()}`;

    setColor(newColor);
    setCopied(false);
  }

  async function copyColor() {
    try {
      await navigator.clipboard.writeText(color);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch (error) {
      alert("Unable to copy color code.");
    }
  }

  return (
    <div className="app">
      <main className="generator-card">

        <div className="header">
          <span className="eyebrow">COLOR STUDIO</span>
          <h1>Color Generator</h1>
          <p>Discover a new color with every click.</p>
        </div>

        <div
          className="color-preview"
          style={{ backgroundColor: color }}
        >
          <span className="preview-label">YOUR COLOR</span>
        </div>

        <div className="color-info">
          <div>
            <span className="color-label">HEX CODE</span>
            <button
              className="hex-button"
              onClick={copyColor}
              title="Click to copy color"
            >
              {color}
            </button>
          </div>

          <button className="copy-button" onClick={copyColor}>
            {copied ? "✓ Copied!" : "Copy"}
          </button>
        </div>

        <button
          className="generate-button"
          onClick={generateColor}
        >
          <span>Generate New Color</span>
          <span className="arrow">↗</span>
        </button>

        <p className="footer-text">
          {copied
            ? "Color copied to clipboard!"
            : "Click the HEX code to copy it"}
        </p>

      </main>
    </div>
  );
}

export default App;