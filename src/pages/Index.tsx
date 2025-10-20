const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F0EB] via-[#E8D5C4] to-[#D4C4BD] flex items-center justify-center p-8 font-['Montserrat']">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#2C5F5D] animate-fade-in">
          Минутка спокойствия
        </h1>
        
        <div className="relative w-full max-w-2xl mx-auto animate-scale-in">
          <svg
            viewBox="0 0 600 600"
            className="w-full h-auto drop-shadow-2xl"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="600" height="600" fill="transparent" />
            
            <circle cx="150" cy="200" r="80" fill="#5DABA8" opacity="0.2" />
            <circle cx="450" cy="180" r="100" fill="#2C5F5D" opacity="0.15" />
            <circle cx="300" cy="500" r="60" fill="#E8D5C4" opacity="0.3" />
            
            <ellipse cx="100" cy="350" rx="40" ry="80" fill="#5DABA8" opacity="0.4" transform="rotate(-15 100 350)" />
            <ellipse cx="500" cy="400" rx="35" ry="70" fill="#5DABA8" opacity="0.4" transform="rotate(20 500 400)" />
            
            <path
              d="M 80,320 Q 90,280 100,290 T 120,310"
              stroke="#2C5F5D"
              strokeWidth="3"
              fill="none"
              opacity="0.6"
            />
            <path
              d="M 480,360 Q 490,330 500,340 T 520,365"
              stroke="#2C5F5D"
              strokeWidth="3"
              fill="none"
              opacity="0.6"
            />
            
            <ellipse cx="300" cy="450" rx="120" ry="30" fill="#2C5F5D" opacity="0.1" />
            
            <ellipse cx="300" cy="280" rx="60" ry="80" fill="#E8D5C4" />
            
            <circle cx="300" cy="220" r="45" fill="#E8D5C4" />
            
            <path
              d="M 260,200 Q 240,160 260,140 Q 280,120 300,130 Q 320,120 340,140 Q 360,160 340,200 Z"
              fill="#2C5F5D"
            />
            
            <path
              d="M 275,215 Q 275,210 280,210 Q 282,210 282,215"
              stroke="#2C5F5D"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M 318,215 Q 318,210 323,210 Q 325,210 325,215"
              stroke="#2C5F5D"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            
            <path
              d="M 285,235 Q 300,240 315,235"
              stroke="#2C5F5D"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              opacity="0.4"
            />
            
            <ellipse cx="250" cy="290" rx="35" ry="15" fill="#E8D5C4" transform="rotate(-45 250 290)" />
            <path
              d="M 215,305 L 230,285 L 250,290 L 265,280 L 270,295"
              fill="#E8D5C4"
            />
            
            <ellipse cx="350" cy="290" rx="35" ry="15" fill="#E8D5C4" transform="rotate(45 350 290)" />
            <path
              d="M 385,305 L 370,285 L 350,290 L 335,280 L 330,295"
              fill="#E8D5C4"
            />
            
            <path
              d="M 240,360 Q 220,400 200,420 L 210,435 Q 230,410 250,370 Z"
              fill="#E8D5C4"
            />
            <ellipse cx="180" cy="440" rx="25" ry="15" fill="#E8D5C4" transform="rotate(-30 180 440)" />
            
            <path
              d="M 360,360 Q 380,400 400,420 L 390,435 Q 370,410 350,370 Z"
              fill="#E8D5C4"
            />
            <ellipse cx="420" cy="440" rx="25" ry="15" fill="#E8D5C4" transform="rotate(30 420 440)" />
            
            <circle cx="265" cy="220" r="3" fill="#2C5F5D" opacity="0.8" />
            <circle cx="335" cy="220" r="3" fill="#2C5F5D" opacity="0.8" />
            
            <circle cx="120" cy="250" r="20" fill="#5DABA8" opacity="0.6" />
            <ellipse cx="110" cy="240" rx="8" ry="15" fill="#2C5F5D" opacity="0.3" />
            <ellipse cx="120" cy="245" rx="6" ry="12" fill="#2C5F5D" opacity="0.3" />
            <ellipse cx="130" cy="250" rx="5" ry="10" fill="#2C5F5D" opacity="0.3" />
            
            <circle cx="480" cy="280" r="18" fill="#5DABA8" opacity="0.6" />
            <ellipse cx="472" cy="272" rx="7" ry="13" fill="#2C5F5D" opacity="0.3" />
            <ellipse cx="480" cy="276" rx="5" ry="10" fill="#2C5F5D" opacity="0.3" />
            <ellipse cx="488" cy="280" rx="4" ry="8" fill="#2C5F5D" opacity="0.3" />
          </svg>
        </div>

        <p className="text-center mt-8 text-lg text-[#2C5F5D] opacity-80 animate-fade-in">
          Дыши глубоко, расслабься, найди свой центр
        </p>
      </div>
    </div>
  );
};

export default Index;
