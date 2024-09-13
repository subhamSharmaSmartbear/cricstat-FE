// AnimatedText.js
import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const AnimatedText = ({matchResult}) => {
  const props = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(-50px)' },
    config: { tension: 220, friction: 120 },
    reset: true,
  });

  return (
    <animated.div className='fixed top-0 left-[40rem]' style={{ ...props, textAlign: 'center', marginTop: '20%' }}>
      <h1  style={{ fontSize: '4rem', color: '#FF0000', textShadow: '2px 2px 4px #000000' }}>
        {matchResult}
      </h1>
      <animated.div style={{ ...props, animation: 'glow 3s ease-in-out infinite' }}>
        <style>
          {`
            @keyframes glow {
              0% { text-shadow: 0 0 5px #FF0000, 0 0 10px #FF0000, 0 0 15px #FF0000, 0 0 20px #FF0000, 0 0 25px #FF0000; }
              50% { text-shadow: 0 0 10px #FF0000, 0 0 20px #FF0000, 0 0 30px #FF0000, 0 0 40px #FF0000, 0 0 50px #FF0000; }
              100% { text-shadow: 0 0 5px #FF0000, 0 0 10px #FF0000, 0 0 15px #FF0000, 0 0 20px #FF0000, 0 0 25px #FF0000; }
            }
          `}
        </style>
      </animated.div>
    </animated.div>
  );
};

export default AnimatedText;
