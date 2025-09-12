
import Typewriter from "../components/Typewriter";
import { useLang } from "../hooks/useLang";

export default function Home(){
  const { t } = useLang();
  return (
    <header id="inicio" className="hero">
      <div className="container grid">
        <div>
          <h1>{t('home.greeting')}</h1>

          <p style={{fontSize: 22, margin: "6px 0 8px"}}>
            Soy <strong>
              <Typewriter words={[
                t('home.tw1'),
                t('home.tw2'),
                t('home.tw3'),
              ]}/>
            </strong>
          </p>

          <p className="subtitle">{t('home.subtitle')}</p>
          <p className="subtitle" style={{marginTop: -6, display:"flex", alignItems:"center", gap:8}}>
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"/>
            </svg>
            {t('home.location')}
          </p>

          {/* Cita profesional */}
          <p className="quote">
            {t('home.quote')}
          </p>

          <div className="cta">
            <a className="btn" href="/cv/sofia-guzman.pdf" download>{t('home.cta.cv')}</a>
            <a className="btn github" href="https://github.com/sguzman06" target="_blank" rel="noreferrer">{t('home.cta.github')}</a>
            <a className="btn linkedin" href="https://www.linkedin.com/in/sguzman06/" target="_blank" rel="noreferrer">{t('home.cta.linkedin')}</a>
          </div>
        </div>

        {/* imagen anime, discreta */}
        <div style={{display:"flex", justifyContent:"center"}}>
          <img className="avatar" src="/img/sofi-anime.png" alt={t('home.avatar_alt')} />
        </div>
      </div>

      {/* orbes */}
      <div className="orb pink" />
      <div className="orb turq" />
      <div className="orb sun" />

      {/* micro orbes que aparecen/desaparecen */}
      <div className="orb micro pink m1" />
      <div className="orb micro turq m2" />
      <div className="orb micro pink m3" />
      <div className="orb micro sun  m4" />

    </header>
  );
}
