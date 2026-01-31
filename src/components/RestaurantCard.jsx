export default function RestaurantCard({ restaurant, isSelected, onClick, lang }) {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurant.address.ja)}`;
  
  return (
    <div className={`restaurant-card ${isSelected ? 'selected' : ''}`} onClick={onClick}>
      <div className="card-image">
        <img src={restaurant.image} alt={restaurant.name[lang]} loading="lazy" />
        <div className="card-category">{restaurant.category[lang]}</div>
      </div>
      <div className="card-content">
        <h3 className="card-title">{restaurant.name[lang]}</h3>
        <div className="card-tags">
          {restaurant.tags[lang].map((tag, i) => (
            <span key={i} className="tag">{tag}</span>
          ))}
        </div>
        <p className="card-description">{restaurant.description[lang]}</p>
        {isSelected && (
          <div className="card-details">
            <div className="detail-row"><span>📍</span><span>{restaurant.address[lang]}</span></div>
            <div className="detail-row"><span>🚶</span><span>{restaurant.access[lang]}</span></div>
            <div className="detail-row"><span>🕐</span><span>{restaurant.hours}</span></div>
            <div className="detail-row"><span>💰</span><span>{restaurant.priceRange}</span></div>
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="maps-button" onClick={e => e.stopPropagation()}>
              🗺️ {lang === 'ja' ? 'Google Mapで開く' : 'Open in Google Maps'}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
