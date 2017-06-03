import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import 'whatwg-fetch';
import Dialog from 'material-ui/Dialog';
import {deepOrange500, grey900} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import SelectField from 'material-ui/SelectField';
import DataCenterSelectField from './components/datacenterselectbox';
import SchemaSelectField from './components/schemaselectbox';
import AppIdSelectField from './components/appidselectbox';
import MapIdSelectField from './components/mapidselectbox';
import TimeSelectField from './components/timeselectbox';
import MenuItem from 'material-ui/MenuItem';
import SearchResultsTable from './components/searchresultstable';
import './App.css';
import './grid.css';
import logo from './images/ATT_logo.png';

const styles = {
  container: {
    textAlign: 'center',
  },
  appBar: {
    backgroundImage: 'url("' + logo + '")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '66px 6px',
  },
  selectContainer: {
    width: '100%',
  },
  selectDropdowns: {
    float: 'left',
  },
  searchButton: {
    marginTop: '35px',
  },
  customWidth: {
    width: 150,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
  appBar: {
    color: grey900,
  }
});

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);

    this.state = {
      open: false,
      datacenter: 'all',
      mapid: 'all',
      appid: 'all',
      time: '1 hour',
      searchResults: [],
    };
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  handleSearchSubmit() {
    alert('datacenter: ' + this.state.datacenter + 'mapid: ' + this.state.mapid +
  'daappidtacenter: ' + this.state.appid + 'time: ' + this.state.time);

    fetch('http://localhost:3000/test.json')
      .then(response => {
        return response.json()
      }).then(json => {
        //console.log('parsed json', json)
        this.setState({
          searchResults: json.tableData,
        });
      }).catch(ex => {
        console.log('parsing failed', ex)
      });
  }

  handleUpdateDataCenter(e, key, value) {
    var searchQueryCurrentState = this.state.searchQuery;
    this.setState({
      datacenter: value,
    });
  }

  handleUpdateMapId(e, key, value) {
    this.setState({
        mapid: value,
    });
  }

  handleUpdateAppId(e, key, value) {
    this.setState({
        appid: value,
    });
  }

  handleUpdateTime(e, key, value) {
    this.setState({
      time: value,
    });
  }

  render() {
    const standardActions = (
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleRequestClose}
      />
    );
    return (
      <MuiThemeProvider muiTheme={muiTheme}>

        <div style={styles.container}>
          <AppBar
            title="COSC Smart Metrics"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
             style={styles.appBar}
          />

          <Dialog
            open={this.state.open}
            title="Search results"
            actions={standardActions}
            onRequestClose={this.handleRequestClose}
          >
            Display search result rows here
          </Dialog>
          <h1>Enter search criteria</h1>
          <h2>Search by schema, application id and / or time.</h2>
          <div id="selectcontainer" className="grid">
            <div className="grid-1-22p"><DataCenterSelectField updateSearchQuery={this.handleUpdateDataCenter.bind(this)} /></div>
            <div className="grid-1-22p"><MapIdSelectField updateSearchQuery={this.handleUpdateMapId.bind(this)} /></div>
            <div className="grid-1-22p"><AppIdSelectField updateSearchQuery={this.handleUpdateAppId.bind(this)} /></div>
            <div className="grid-1-22p"><TimeSelectField updateSearchQuery={this.handleUpdateTime.bind(this)} /></div>
          </div>
          <RaisedButton
            label="Search"
            secondary={true}
            onTouchTap={this.handleSearchSubmit}
            style={styles.searchButton}
          />
          <SearchResultsTable results={this.state.searchResults} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
