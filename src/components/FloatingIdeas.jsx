import React from 'react';

const desktopQuotes = [
  {
    text: 'Bu hover efekti fazla mı abartı?',
    top: 8,
    left: 6,
  },
  {
    text: 'Bozuldu ama neden bozuldu?',
    top: 18,
    left: 32,
  },
  {
    text: 'Bende çalışıyordu.',
    top: 10,
    left: 55,
  },
  {
    text: "CSS'de pozisyon: absolute en iyi arkadaştır.",
    top: 52,
    left: 12,
  },
  {
    text: 'Butonu biraz daha sağa kaydır.',
    top: 74,
    left: 8,
  },
  {
    text: `function help(ihtiyac) {\n  if (ihtiyac === "mantikliCommitMesaji") {\n    callChatGPT("ne yazayim ya?");\n  }\n}`,
    top: 81,
    left: 32,
    isCode: true
  },
  {
    text: 'Null insanlara değer verilmez.',
    top: 33,
    left: 70,
  },
  {
    text: 'Acele koda bug karışır.',
    top: 70,
    left: 82,
  },
  {
    text: 'Break bu işleri.',
    top: 60,
    left: 62,
  },
  {
    text: 'İlk kez transform: translateY(-50%)’i doğru kullandım.',
    top: 90,
    left: 62,
  },
  {
    text: 'Ekibinizde bana da yer var mı?',
    top: 48,
    left: 78,
    isSpecial: true
  },
  {
    text: 'Benimle çalışmak ister misiniz?',
    top: 29,
    left: 8,
    isSpecial: true
  },
  {
    text: 'Sizce bir şansı hak etmiyor muyum?',
    top: 8,
    left: 75,
    isSpecial: true
  },
];

const mobileQuotes = [
  {
    text: 'Ekibinizde bana da yer var mı?',
    top: 10,
    left: 0,
    isSpecial: true
  },
  {
    text: 'Benimle çalışmak ister misiniz?',
    top: 80,
    left: 45,
    isSpecial: true
  },
  {
    text: 'Acele koda bug karışır.',
    top: 25,
    left: 55,
  },
  {
    text: 'Break bu işleri.',
    top: 65,
    left: 8,
  },
];

const FloatingIdeas = () => {
  // Ekranın mobil olup olmadığını kontrol et
  const isMobile = window.innerWidth <= 768;

  // Mobilde sadece özel alıntılar ve 2 tane normal alıntı göster
  const visibleQuotes = isMobile
    ? mobileQuotes
    : desktopQuotes;

  return (
    <div className="relative overflow-hidden rounded-md border border-[#1C1C21] bg-[#0E0E10] w-full aspect-[16/9]" id="test">
      <img
        src="assets/profileme.png"
        alt="Ben"
        className="absolute top-1/2 left-1/2 w-24 md:w-40 lg:w-60 aspect-square object-cover rounded-full shadow-2xl transform -translate-x-1/2 -translate-y-1/2 z-10 border-4"
        style={{
          borderColor: 'rgb(186 140 235)',
          background: 'linear-gradient(to right, #9c6dff, #8a4dff, #7a31ff)',
        }}
      />

      {visibleQuotes.map((quote, index) => (
        <div
          key={index}
          className={`absolute px-4 py-2 bg-white rounded-xl shadow-md text-xs md:text-sm animate-float z-20 ${
            quote.isCode ? 'whitespace-pre font-mono text-xs' : ''
          } ${
            quote.isSpecial
              ? 'bg-gradient-to-r from-purple-600 via-purple-700 to-purple-900 text-white'
              : ''
          }`}
          style={{
            top: `${quote.top}%`,
            left: `${quote.left}%`,
            animationDuration: `${3 + (index % 3)}s`,
            animationDelay: `${index % 3}s`,
          }}
        >
          {quote.text}
        </div>
      ))}

      <style>{`
        @keyframes float {
          0% { transform: translate(0, 0); }
          50% { transform: translate(16px, -16px); }
          100% { transform: translate(0, 0); }
        }
        .animate-float {
          animation-name: float;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
};

export default FloatingIdeas;
