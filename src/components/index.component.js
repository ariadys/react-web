import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class Index extends Component {
	constructor(props) {
	  super(props);
	  this.state = {business: []};
	}
	componentDidMount(){
	  axios.get('/api/business')
	    .then(response => {
	      this.setState({ business: response.data });
	    })
	    .catch(function (error) {
	      console.log(error);
	    })
	}
	tabRow(){
	  return this.state.business.map(function(object, i){
	      return <TableRow obj={object} key={i} />;
	  });
	}
    render() {
        return (
            <section className="section">
                <table className="table">
				  <thead>
				    <tr>
				      <th>Name</th>
				      <th>Business</th>
				      <th>Number GST</th>
				      <th>Actions</th>
				    </tr>
				  </thead>
				  <tbody>
				    { this.tabRow() }
				  </tbody>
				</table>
            </section>
        )
    }
}