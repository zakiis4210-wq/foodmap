import { useState } from 'react';
import Header from './components/Header';
import Map from './components/Map';
import RestaurantCard from './components/RestaurantCard';
import { restaurants } from './data/restaurants';
import './App.css';

function App() {
  const [lang, setLang] = useState('ja');
  const [selectedId, setSelectedId] = useState(null);

  const handleMarkerClick = (id) => {
    setSelectedId(id === selectedId ? null : id);
  };

  const handleCardClick = (id) => {
    setSelectedId(id === selectedId ? null : id);
  };

  return (
    <div className="app">
      <Header lang={lang} onLangChange={setLang} />
      <main className="main-content">
        <div className="map-container">
          <Map
            restaurants={restaurants}
            selectedId={selectedId}
            onMarkerClick={handleMarkerClick}
            lang={lang}
          />
        </div>
        <div className="restaurant-list">
          <div className="list-header">
            <h2>{lang === 'ja' ? 'お店一覧' : 'Restaurant List'}</h2>
            <span className="count">{restaurants.length} {lang === 'ja' ? '件' : 'places'}</span>
          </div>
          <div className="cards-container">
            {restaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
                isSelected={restaurant.id === selectedId}
                onClick={() => handleCardClick(restaurant.id)}
                lang={lang}
              />
            ))}
          </div>
        </div>
      </main>
      <footer className="footer">
        <p>{lang === 'ja' ? '© 2025 浦安グルメマップ' : '© 2025 Urayasu Food Map'}</p>
      </footer>
    </div>
  );
}

export default App;
