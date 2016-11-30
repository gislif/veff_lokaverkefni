import React from 'react'
import $ from 'jquery'
import { Table } from 'react-bootstrap'

var Gas = React.createClass({
  getWeatherData: function() {
    $.ajax({
      'url': 'http://apis.is/currency/m5',
      'type': 'GET',
      'dataType': 'json',
      'success': function(response) {
        console.log(response);
      }
      success: function(incomingData) {
        this.setState({thePetrolData: incomingData});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {thePetrolData: []};
  },
  componentDidMount: function() {
    this.getWeatherData();
  },
  render: function() {
    return (
      <div>
        <h1>Listi yfir Gjaldmiðla</h1>
        <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>útlenskar gjaldmiðlar</th>
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
      </div>
    );
  }
});

export default Gas;
