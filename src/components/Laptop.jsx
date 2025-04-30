import { useState, useEffect, useRef } from 'react';

export default function Laptop({ name = "Abhishek" }) {
  const [displayName, setDisplayName] = useState(name);
  const [isTyping, setIsTyping] = useState(true);
  const bladeRefs = useRef([]);
  const keysRef = useRef([]);

  // Handle name change
  const changeName = () => {
    const newName = prompt("Enter your name for the laptop screen:", displayName);
    if (newName) {
      setIsTyping(true);
      setDisplayName(newName);
      // Reset typing animation
      setTimeout(() => setIsTyping(false), 3000);
    }
  };

  // Simulate random key presses
  useEffect(() => {
    const interval = setInterval(() => {
      if (keysRef.current.length > 0) {
        const randomIndex = Math.floor(Math.random() * keysRef.current.length);
        const randomKey = keysRef.current[randomIndex];
        if (randomKey) {
          randomKey.style.fill = "#3a3";
          randomKey.style.transform = "translateY(1px)";
          
          setTimeout(() => {
            if (randomKey) {
              randomKey.style.fill = "#232";
              randomKey.style.transform = "translateY(0)";
            }
          }, 150);
        }
      }
    }, 200);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 400 300"
        className="w-full max-w-lg cursor-pointer"
        onClick={changeName}
      >
        {/* Laptop Shadow */}
        <ellipse 
          cx="200" cy="270" rx="150" ry="12" 
          fill="rgba(0,0,0,0.15)" 
          style={{ filter: 'blur(2px)' }} 
        />

        {/* Laptop Bottom - Modern Design */}
        <rect 
          x="90" y="210" width="220" height="12" rx="4" 
          fill="#1a663f" stroke="#0a6" strokeWidth="1" 
        />
        
        {/* Ports */}
        <rect x="110" y="215" width="5" height="2" rx="1" fill="#111" />
        <rect x="120" y="215" width="5" height="2" rx="1" fill="#111" />
        <rect x="130" y="215" width="5" height="2" rx="1" fill="#111" />
        
        {/* Keyboard with keys */}
        <rect 
          x="100" y="180" width="200" height="30" rx="2" 
          fill="#0c3" 
        />
        
        {/* Individual keys */}
        <g>
          {[...Array(10)].map((_, i) => (
            <rect
              key={`key-row1-${i}`}
              ref={el => keysRef.current[i] = el}
              x={105 + i * 10} y="185" width="8" height="8" rx="1"
              fill="#232"
              stroke="#0a5"
              strokeWidth="0.2"
            />
          ))}
          
          {[...Array(9)].map((_, i) => (
            <rect
              key={`key-row2-${i}`}
              ref={el => keysRef.current[i + 10] = el}
              x={110 + i * 10} y="195" width="8" height="8" rx="1"
              fill="#232"
              stroke="#0a5"
              strokeWidth="0.2"
            />
          ))}
        </g>
        
        <rect 
          x="170" y="205" width="60" height="25" rx="3" 
          fill="#0a3" stroke="#0c5" strokeWidth="0.5" 
        />

        {/* Laptop Screen and Lid (animated) */}
        <g
          style={{
            transformOrigin: '200px 180px',
            animation: 'openLid 2s ease-out forwards'
          }}
        >
          {/* Main body of the laptop screen */}
          <rect 
            x="80" y="60" width="240" height="150" rx="8" 
            fill="#1a663f" stroke="#0a6" strokeWidth="1" 
          />
          
          {/* Screen bezel (the black part around the screen) */}
          <rect 
            x="90" y="70" width="220" height="130" rx="4" 
            fill="#010" stroke="#0a3" strokeWidth="1" 
          />
          
          {/* Actual Screen */}
          <rect x="95" y="75" width="210" height="120" rx="2" fill="#000" />
          <rect x="100" y="80" width="200" height="110" rx="1" fill="#001a00" />
          
          {/* Matrix-like background pattern */}
          {[...Array(10)].map((_, i) => (
            <text 
              key={`matrix-${i}`}
              x={Math.random() * 180 + 110} 
              y={Math.random() * 90 + 90}
              fill="#0f0" 
              opacity={Math.random() * 0.5 + 0.2}
              fontSize="8"
            >
              {Math.random() > 0.5 ? "10" : "01"}
            </text>
          ))}
          
          {/* Webcam */}
          <circle cx="200" cy="75" r="2" fill="#040" />
          
          {/* Name on screen with typing animation */}
          <g>
            <text 
              x="120" 
              y="130" 
              fontFamily="monospace"
              fill="#0f0" 
              fontSize="16"
              fontWeight="bold"
              className={isTyping ? "typing-animation" : ""}
            >
              {displayName}
            </text>
            <rect 
              x={120 + displayName.length * 9} 
              y="120" 
              width="2" 
              height="14" 
              fill="#0f0"
              style={{
                animation: 'blink 1s step-end infinite'
              }}
            />
          </g>
          
          {/* Power button with glow */}
          <circle 
            cx="200" cy="65" r="2" 
            fill="#0f0"
            style={{
              animation: 'pulse 2s infinite ease-in-out',
              filter: 'blur(1px)'
            }}
          />
          
          {/* Screen glow */}
          <rect 
            x="120" y="130" width="160" height="10" rx="5" 
            fill="#0f0" 
            style={{
              filter: 'blur(3px)',
              opacity: 0.2,
              animation: 'pulse 4s infinite ease-in-out'
            }}
          />
          
          {/* Brand Logo */}
          <path 
            d="M200,160 l-5,-5 l5,-5 l5,5 z" 
            fill="#0f0"
            style={{
              animation: 'pulse 2s infinite ease-in-out'
            }}
          />
          
          {/* Matrix code lines running down */}
          {[...Array(5)].map((_, i) => (
            <text 
              key={`code-${i}`}
              x={110 + i * 40} 
              y="100"
              fill="#0f0" 
              opacity="0.7"
              fontSize="10"
              style={{
                animation: `matrixDrop ${2 + i * 0.5}s infinite linear`
              }}
            >
              10110
            </text>
          ))}
        </g>

        {/* CSS Animations */}
        <defs>
          <style>
            {`
              @keyframes openLid {
                from { transform: rotateX(90deg); }
                to { transform: rotateX(0deg); }
              }
              
              @keyframes typing {
                from { width: 0; }
                to { width: 100%; }
              }
              
              @keyframes blink {
                50% { opacity: 0; }
              }
              
              @keyframes pulse {
                0% { opacity: 0.7; }
                50% { opacity: 1; }
                100% { opacity: 0.7; }
              }
              
              @keyframes matrixDrop {
                from { transform: translateY(0); }
                to { transform: translateY(80px); }
              }
              
              .typing-animation {
                display: inline-block;
                overflow: hidden;
                white-space: nowrap;
                animation: typing 3s steps(20, end) forwards;
              }
            `}
          </style>
        </defs>
      </svg>
    </div>
  );
}