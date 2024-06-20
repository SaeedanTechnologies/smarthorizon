import React, { Component } from "react";
import { Map, GeoJSON } from "react-leaflet";
import mapData from "../../Data/countries.json";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';
import {
  US,
  CA,
  MX,
  BR,
  DO,
  EG,
  GB,
  PT,
  ES,
  FR,
  BE,
  NL,
  DE,
  CH,
  IT,
  AT,
  RO,
  LI,
  LU,
  MC,
  TN,
  TZ,
  MZ,
  ZA,
  RU,
  TR,
  SA,
  IN,
  CN,
  VN,
  SG,
  TW
} from "country-flag-icons/react/3x2";

class WorldMap extends Component {
  state = {
    color: "#ffff00",
    selectedCountry: null,
  };

  colors = ["green", "blue", "yellow", "orange", "grey"];

  componentDidMount() {
    console.log(mapData);
  }

  countryStyle = {
    fillColor: "grey", // Changed default color to grey
    fillOpacity: 1,
    color: "black",
    weight: 2,
  };

  printMesssageToConsole = (event) => {
    // console.log("Clicked");
  };

  changeCountryColor = (event) => {
    const countryName = event.target.feature.properties.ADMIN;
    this.setState({ selectedCountry: countryName });

    event.target.setStyle({
      color: "green",
      fillColor: this.state.color,
      fillOpacity: 1,
    });
  };

  onEachCountry = (country, layer) => {
    const countryName = country.properties.ADMIN;
    layer.bindPopup(countryName);

    layer.options.fillOpacity = 0.5; // Reduced opacity for better hover effect

    layer.on({
      click: (event) => {
        this.changeCountryColor(event); // Call the function to change country color
        this.setState({ selectedCountry: countryName }); // Update selected country
      },
      mouseover: (event) => {
        layer.setStyle({
          fillColor: "yellow", // Highlight color when hovering
          color: "black",
          weight: 2
        });
      },
      mouseout: (event) => {
        if (countryName !== this.state.selectedCountry) {
          layer.setStyle(this.countryStyle); // Restore original style if not selected
        }
      }
    });
  };



  colorChange = (event) => {
    this.setState({ color: event.target.value });
  };

  handleCountryHover = (countryName) => {
    const { selectedCountry } = this.state;

    // Remove selection from previously hovered country
    if (selectedCountry && selectedCountry !== countryName) {
      const prevCountryLayer = this.mapRef.leafletElement
        .eachLayer(layer => {
          if (layer.feature && layer.feature.properties.ADMIN === selectedCountry) {
            layer.setStyle(this.countryStyle);
          }
        });
    }

    this.setState({ selectedCountry: countryName });

    // Find the corresponding country layer on the map and trigger click event
    const countryLayer = this.mapRef.leafletElement
      .eachLayer(layer => {
        if (layer.feature && layer.feature.properties.ADMIN === countryName) {
          layer.fireEvent('click');
        }
      });
  };

  filterCountriesByRegion = (region) => {
    const regions = {
      America: ["United States of America", "Canada", "Mexico", "Brazil", "Dominican Republic"],
      Europe: ["United Kingdom", "Portugal", "Spain", "France", "Belgium", "Netherlands", "Germany", "Switzerland", "Italy", "Austria", "Romania", "Liechtenstein", "Luxembourg", "Monaco"],
      Africa: ["Egypt", "Tunisia", "Tanzania", "Mozambique", "South Africa"],
      Russia: ["Russian Federation"],
      Asia: ["Turkey", "Saudi Arabia", "India", "China", "Vietnam", "Singapore", "Taiwan"]
    };

    return regions[region];
  };

  getCountryFlag = (countryName) => {
    switch (countryName) {
      case "United States of America":
        return <US style={{ width: "20px" }} />;
      case "Canada":
        return <CA style={{ width: "20px" }} />;
      case "Mexico":
        return <MX style={{ width: "20px" }} />;
      case "Brazil":
        return <BR style={{ width: "20px" }} />;
      case "Dominican Republic":
        return <DO style={{ width: "20px" }} />;
      case "Egypt":
        return <EG style={{ width: "20px" }} />;
      case "United Kingdom":
        return <GB style={{ width: "20px" }} />;
      case "Portugal":
        return <PT style={{ width: "20px" }} />;
      case "Spain":
        return <ES style={{ width: "20px" }} />;
      case "France":
        return <FR style={{ width: "20px" }} />;
      case "Belgium":
        return <BE style={{ width: "20px" }} />;
      case "Netherlands":
        return <NL style={{ width: "20px" }} />;
      case "Germany":
        return <DE style={{ width: "20px" }} />;
      case "Switzerland":
        return <CH style={{ width: "20px" }} />;
      case "Italy":
        return <IT style={{ width: "20px" }} />;
      case "Austria":
        return <AT style={{ width: "20px" }} />;
      case "Romania":
        return <RO style={{ width: "20px" }} />;
      case "Liechtenstein":
        return <LI style={{ width: "20px" }} />;
      case "Luxembourg":
        return <LU style={{ width: "20px" }} />;
      case "Monaco":
        return <MC style={{ width: "20px" }} />;
      case "Tunisia":
        return <TN style={{ width: "20px" }} />;
      case "Tanzania":
        return <TZ style={{ width: "20px" }} />;
      case "Mozambique":
        return <MZ style={{ width: "20px" }} />;
      case "South Africa":
        return <ZA style={{ width: "20px" }} />;
      case "Russian Federation":
        return <RU style={{ width: "20px" }} />;
      case "Turkey":
        return <TR style={{ width: "20px" }} />;
      case "Saudi Arabia":
        return <SA style={{ width: "20px" }} />;
      case "India":
        return <IN style={{ width: "20px" }} />;
      case "China":
        return <CN style={{ width: "20px" }} />;
      case "Vietnam":
        return <VN style={{ width: "20px" }} />;
      case "Singapore":
        return <SG style={{ width: "20px" }} />;
      case "Taiwan":
        return <TW style={{ width: "20px" }} />;
      default:
        return null;
    }
  };

  render() {
    const { selectedCountry } = this.state;
    const regions = {
      America: ["United States of America", "Canada", "Mexico", "Brazil", "Dominican Republic"],
      Europe: ["United Kingdom", "Portugal", "Spain", "France", "Belgium", "Netherlands", "Germany", "Switzerland", "Italy", "Austria", "Romania", "Liechtenstein", "Luxembourg", "Monaco"],
      Africa: ["Egypt", "Tunisia", "Tanzania", "Mozambique", "South Africa"],
      Russia: ["Russian Federation"],
      Asia: ["Turkey", "Saudi Arabia", "India", "China", "Vietnam", "Singapore", "Taiwan"]
    };

    return (
      <div>
        <h1 style={{ textAlign: "center" }}>My Map</h1>
        <Map
          style={{ height: "150vh", width: '90vw', overflow: 'hidden', }}
          center={[20, 0]}
          zoom={1}
          maxZoom={2}
          minZoom={2} // Set minZoom to the same as initial zoom level to prevent zooming
          maxBoundsViscosity={1.0}
          maxBounds={[[-90, -180], [90, 180]]}
          zoomControl={false}
          dragging={false} // Disable map dragging
          tap={false} // Disable tap interactions
          touchZoom={false}
          scrollWheelZoom={false} // Disable scroll wheel zoom
          ref={ref => this.mapRef = ref}
        >
          <GeoJSON
            style={this.countryStyle}
            data={mapData.features}
            onEachFeature={this.onEachCountry}
          />
        </Map>
        <input
          type="color"
          value={this.state.color}
          onChange={this.colorChange}
        />
        <h2 style={{ textAlign: "center" }}>Selected Country: {selectedCountry}</h2>
        <TableContainer component={Paper} style={{ margin: "", width: "100%" }}>
          <Table>
            <TableHead>
              <TableRow>
                {Object.keys(regions).map(region => (
                  <TableCell key={region}>{region}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                {Object.keys(regions).map(region => (
                  <TableCell key={region}>
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                      {this.filterCountriesByRegion(region).map(country => (
                        <li key={country} onMouseEnter={() => this.handleCountryHover(country)} style={{ display: "flex", alignItems: "center" }}>
                          {this.getCountryFlag(country)} <span style={{ marginLeft: "5px" }}>{country}</span>
                        </li>
                      ))}
                    </ul>
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default WorldMap;
