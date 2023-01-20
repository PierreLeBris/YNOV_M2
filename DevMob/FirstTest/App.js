import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

export default class App extends React.Component {
  state = {
    region: null,
  };

  componentDidMount() {
    Geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          },
        });
      },
      (error) => console.log(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );

    this.watchId = Geolocation.watchPosition(
      (position) => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          },
        });
      },
      (error) => console.log(error),
      { enableHighAccuracy: true, distanceFilter: 1 },
    );
  }

  componentWillUnmount() {
    Geolocation.clearWatch(this.watchId);
  }

  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        region={this.state.region}
        showsUserLocation={true}
      >
        {this.state.region && (
          <Marker
            coordinate={{
              latitude: this.state.region.latitude,
              longitude: this.state.region.longitude,
            }}
          />
        )}
      </MapView>
    );
  }
}
