"use client";
import React, { useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Layout from "../components/layout";
import L from "leaflet";
import cities from "./cities.json";


const markerIconUrl = "https://res.cloudinary.com/dzxgf75bh/image/upload/v1715056795/marker_m7ufbx.png";
const markerIcon = new L.Icon({
  iconUrl: markerIconUrl,
  iconSize: [40, 40],
  iconAnchor: [17, 46],
  popupAnchor: [0, -46],
});

function Map() {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      const { current: map } = mapRef;
      map.setView([20.2961, 85.8245], 7); 
    }
  }, []);

  return (
    <Layout>
      <MapContainer
        center={[20.2961, 85.8245]}
        zoom={5}
        style={{ height: "40vh", width: "40%" }}
        whenCreated={(mapInstance) => (mapRef.current = mapInstance)}
        className="rounded-3xl flex float-end border-8  border-slate-500"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />
        {cities.map((city, idx) => (
          <Marker
            position={[city.lat, city.lng]}
            icon={markerIcon}
            key={idx}
          >
            <Popup>
              <b>
                {city.city}, {city.country}
              </b>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </Layout>
  );
}

export default Map;
