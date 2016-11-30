import React from 'react'
import $ from 'jquery'
import { Table } from 'react-bootstrap'

var Petrol = React.createClass({
  getWeatherData: function() {
    $.ajax({
      'url': 'http://apis.is/currency/m5',
      'type': 'GET',
      'dataType': 'json',
      'success': function(response) {
        console.log(response);
      },
      success: function(incomingData) {
        this.setState({thePetrolData: incomingData});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {thePetroData: []};
  },
  componentDidMount: function() {
    this.getWeatherData();
  },
  render: function() {
    return (
      <div>
        <h1>Gjaldmiðlar</h1>
        {!this.state.thePetrolData.results ?
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"></img>
          :
        <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>Gjaldmiðlar</th>
            <th>Verð</th>
            <th>Gildi</th>
            <th>Breytingar</th>
          </tr>
        </thead>
        <tbody>
              {this.state.thePetrolData.results.map(function(res, id) {
                return(
                <tr key={id}>
                  <td>{res.company}</td>
                  <td>{res.name}</td>
                  <td>{res.bensin95}</td>
                  <td>{res.diesel}</td>
                </tr>);
              })}
        </tbody>
        </Table>
        }
      </div>
    );
  }
});

export default Petrol;
