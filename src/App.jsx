import { useEffect, useMemo, useState } from 'react';
import { loadSlim } from '@tsparticles/slim';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import Card from './Components/Card';
import Icons from './Components/Icons';
import video from './assets/background.mp4';
import img from './assets/img/img.webp';
import imgBe from './assets/img/behance.webp';
import imgLi from './assets/img/linkedin.webp';
import imgIn from './assets/img/instagram.webp';
import imgGh from './assets/img/github.webp';
import './assets/css/App.css';

function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {};

  const options = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: '#ffffff',
        },
        links: {
          color: '#ffffff',
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'bounce',
          },
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 140,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 4 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  return (
    <>
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
      <Card nome="thyeris lima" cargo="web developer" img={img}>
        <Icons
          url="https://www.behance.net/thyerislima"
          img={imgBe}
          name="Behance"
        />
        <Icons
          url="https://www.linkedin.com/in/thyeris/"
          img={imgLi}
          name="Linkedin"
        />
        <Icons url="https://github.com/thyeris" img={imgGh} name="Github" />
        <Icons
          url="https://www.instagram.com/thyerislima/"
          img={imgIn}
          name="Instagram"
        />
      </Card>
      <video autoPlay muted loop className="video">
        <source src={video} type="video/mp4" />
      </video>
    </>
  );
}

export default App;
