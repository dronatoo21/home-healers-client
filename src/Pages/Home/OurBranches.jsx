import { MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import "./map.css"
const OurBranches = () => {
    return (
        <div className='mb-16 p-5 lg:p-0'>
            <MapContainer center={[23.800177573676923, 90.41330689497619]} zoom={13} scrollWheelZoom={true}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[23.800177573676923, 90.41330689497619]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
        </div>
    );
};

export default OurBranches;