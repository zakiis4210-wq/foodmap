import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { urayasuStation } from '../data/restaurants';

const createIcon = (isSelected) => L.divIcon({
  className: 'custom-marker',
  html: `<div style="background:${isSelected ? '#e74c3c' : '#3498db'};width:${isSelected ? '40px' : '30px'};height:${isSelected ? '40px' : '30px'};border-radius:50% 50% 50% 0;transform:rotate(-45deg);border:3px solid white;box-shadow:0 3px 10px rgba(0,0,0,0.3);"></div>`,
  iconSize: [isSelected ? 40 : 30, isSelected ? 40 : 30],
  iconAnchor: [isSelected ? 20 : 15, isSelected ? 40 : 30],
});

const stationIcon = L.divIcon({
  className: 'station-marker',
  html: '<div style="background:#2c3e50;width:24px;height:24px;border-radius:50%;border:3px solid #f1c40f;display:flex;align-items:center;justify-content:center;font-size:12px;">🚃</div>',
  iconSize: [24, 24], iconAnchor: [12, 12]
});

function MapController({ selectedRestaurant }) {
  const map = useMap();
  if (selectedRestaurant) map.flyTo([selectedRestaurant.lat, selectedRestaurant.lng], 17, { duration: 0.5 });
  return null;
}

export default function Map({ restaurants, selectedId, onMarkerClick, lang }) {
  const selectedRestaurant = restaurants.find(r => r.id === selectedId);
  return (
    <MapContainer center={[urayasuStation.lat, urayasuStation.lng]} zoom={16} style={{ height: '100%', width: '100%' }}>
      <TileLayer attribution='&copy; OpenStreetMap' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <MapController selectedRestaurant={selectedRestaurant} />
      <Marker position={[urayasuStation.lat, urayasuStation.lng]} icon={stationIcon}>
        <Popup>{lang === 'ja' ? '🚃 浦安駅' : '🚃 Urayasu Station'}</Popup>
      </Marker>
      {restaurants.map((r) => (
        <Marker key={r.id} position={[r.lat, r.lng]} icon={createIcon(r.id === selectedId)} eventHandlers={{ click: () => onMarkerClick(r.id) }}>
          <Popup><strong>{r.name[lang]}</strong><br/><span style={{color:'#666',fontSize:'12px'}}>{r.category[lang]}</span></Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
