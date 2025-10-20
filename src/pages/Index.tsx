const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF5E6] via-[#FFE8D1] to-[#FFDFC4] flex items-center justify-center p-8 font-['Montserrat']">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#4A5568] animate-fade-in">
          Meditation
        </h1>
        
        <div className="relative w-full max-w-2xl mx-auto animate-scale-in">
          <svg
            viewBox="0 0 400 500"
            className="w-full h-auto drop-shadow-2xl"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="bgGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#FFF4E6', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#FFE0B2', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            
            <circle cx="200" cy="250" r="180" fill="url(#bgGradient)" />
            
            <ellipse cx="60" cy="220" rx="50" ry="80" fill="#5FC2A7" opacity="0.8" transform="rotate(-20 60 220)" />
            <path d="M 50,200 Q 45,180 55,170 L 65,180 Q 60,190 50,200 Z" fill="#4AA88F" opacity="0.6" />
            <path d="M 40,230 Q 35,210 45,200 L 55,210 Q 50,220 40,230 Z" fill="#4AA88F" opacity="0.6" />
            
            <ellipse cx="340" cy="240" rx="45" ry="75" fill="#5FC2A7" opacity="0.8" transform="rotate(25 340 240)" />
            <path d="M 335,220 Q 340,205 350,210 L 345,220 Q 340,218 335,220 Z" fill="#4AA88F" opacity="0.6" />
            <path d="M 330,250 Q 335,235 345,240 L 340,250 Q 335,248 330,250 Z" fill="#4AA88F" opacity="0.6" />
            
            <ellipse cx="100" cy="320" rx="35" ry="60" fill="#7ED4B8" opacity="0.7" transform="rotate(-10 100 320)" />
            <ellipse cx="300" cy="340" rx="30" ry="55" fill="#7ED4B8" opacity="0.7" transform="rotate(15 300 340)" />
            
            <circle cx="200" cy="160" r="50" fill="#FFDAB3" />
            
            <path
              d="M 160,140 Q 150,100 165,85 Q 175,75 185,80 Q 190,70 200,75 Q 210,70 215,80 Q 225,75 235,85 Q 250,100 240,140 Q 235,160 230,170 L 225,165 Q 220,150 215,145 Q 210,155 200,160 Q 190,155 185,145 Q 180,150 175,165 L 170,170 Q 165,160 160,140 Z"
              fill="#3D3D3D"
            />
            
            <path
              d="M 165,150 Q 170,120 180,110 Q 185,105 190,108 L 188,130 Q 182,140 175,145 Z"
              fill="#2A2A2A"
              opacity="0.3"
            />
            <path
              d="M 235,150 Q 230,120 220,110 Q 215,105 210,108 L 212,130 Q 218,140 225,145 Z"
              fill="#2A2A2A"
              opacity="0.3"
            />
            
            <ellipse cx="180" cy="160" rx="4" ry="2" fill="#3D3D3D" />
            <ellipse cx="220" cy="160" rx="4" ry="2" fill="#3D3D3D" />
            
            <path d="M 175,155 Q 177,152 180,153" stroke="#3D3D3D" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M 220,153 Q 223,152 225,155" stroke="#3D3D3D" strokeWidth="2" fill="none" strokeLinecap="round" />
            
            <circle cx="170" cy="165" r="6" fill="#FFB8B8" opacity="0.5" />
            <circle cx="230" cy="165" r="6" fill="#FFB8B8" opacity="0.5" />
            
            <path d="M 190,175 Q 200,178 210,175" stroke="#FFB8B8" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6" />
            
            <ellipse cx="200" cy="240" rx="55" ry="70" fill="#FFE4C4" />
            
            <path
              d="M 145,250 Q 140,255 135,265 Q 130,280 125,295 L 115,310 Q 110,320 108,330 L 100,345 Q 95,355 92,365"
              stroke="#FFE4C4"
              strokeWidth="35"
              fill="none"
              strokeLinecap="round"
            />
            
            <path
              d="M 255,250 Q 260,255 265,265 Q 270,280 275,295 L 285,310 Q 290,320 292,330 L 300,345 Q 305,355 308,365"
              stroke="#FFE4C4"
              strokeWidth="35"
              fill="none"
              strokeLinecap="round"
            />
            
            <ellipse cx="200" cy="280" rx="25" ry="15" fill="#FFF" opacity="0.9" />
            <path d="M 190,275 Q 200,278 210,275" stroke="#E8C4A0" strokeWidth="1" fill="none" />
            
            <path
              d="M 145,310 Q 120,340 100,360 L 90,375 Q 85,385 82,395 L 75,410"
              stroke="#FFE4C4"
              strokeWidth="28"
              fill="none"
              strokeLinecap="round"
            />
            
            <path
              d="M 255,310 Q 280,340 300,360 L 310,375 Q 315,385 318,395 L 325,410"
              stroke="#FFE4C4"
              strokeWidth="28"
              fill="none"
              strokeLinecap="round"
            />
            
            <ellipse cx="75" cy="420" rx="20" ry="12" fill="#FFD4A3" transform="rotate(-10 75 420)" />
            <ellipse cx="325" cy="420" rx="20" ry="12" fill="#FFD4A3" transform="rotate(10 325 420)" />
            
            <circle cx="140" cy="180" r="3" fill="#FFC080" opacity="0.3" />
            <circle cx="145" cy="195" r="2" fill="#FFC080" opacity="0.3" />
            <circle cx="255" cy="185" r="3" fill="#FFC080" opacity="0.3" />
            <circle cx="260" cy="200" r="2" fill="#FFC080" opacity="0.3" />
          </svg>
        </div>

        <p className="text-center mt-8 text-lg text-[#4A5568] opacity-70 animate-fade-in italic">
          Ready to begin?
        </p>
      </div>
    </div>
  );
};

export default Index;
