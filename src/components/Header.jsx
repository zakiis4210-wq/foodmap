export default function Header({ lang, onLangChange }) {
  const t = {
    ja: { title: '浦安グルメマップ', subtitle: '静かにお一人様で楽しめるお店', description: '浦安駅周辺の落ち着いた雰囲気のお店をご紹介' },
    en: { title: 'Urayasu Food Map', subtitle: 'Quiet Restaurants for Solo Diners', description: 'Discover peaceful dining spots near Urayasu Station' }
  };
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-text">
          <h1>{t[lang].title}</h1>
          <p className="subtitle">{t[lang].subtitle}</p>
          <p className="description">{t[lang].description}</p>
        </div>
        <div className="lang-switch">
          <button className={`lang-btn ${lang === 'ja' ? 'active' : ''}`} onClick={() => onLangChange('ja')}>🇯🇵 日本語</button>
          <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => onLangChange('en')}>🇬🇧 English</button>
        </div>
      </div>
    </header>
  );
}
