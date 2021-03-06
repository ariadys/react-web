import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
	constructor(props) {
      	super(props);
      	this.onChangePersonName = this.onChangePersonName.bind(this);
      	this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
      	this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
      	this.onSubmit = this.onSubmit.bind(this);

      	this.state = {
          	person_name: '',
          	business_name: '',
          	business_gst_number:''
      	}
    }
    onChangePersonName(e) {
	    this.setState({
	      person_name: e.target.value
	    });
  	}
  	onChangeBusinessName(e) {
	    this.setState({
	      business_name: e.target.value
	    });
  	}
  	onChangeGstNumber(e) {
	    this.setState({
	      business_gst_number: e.target.value
	    });
  	}
  	onSubmit(e) {
	    e.preventDefault();
	    const obj = {
	      person_name: this.state.person_name,
	      business_name: this.state.business_name,
	      business_gst_number: this.state.business_gst_number
	    };
	    axios.post('http://localhost:5000/business/add', obj)
	        .then(res => console.log(res.data));
	    
	    this.setState({
	      person_name: '',
	      business_name: '',
	      business_gst_number: ''
	    })
  	}
    render() {
        return (
	        <section className="section">
	        	<div className="columns">
	  				<div className="column is-3">
	  					<form onSubmit={this.onSubmit}>
				           <div className="field">
				           	<label className="label">Person Name</label>
							  <div className="control has-icons-left">
							    <input className="input" type="text" required value={this.state.person_name}
                        		onChange={this.onChangePersonName}/>
							    <span className="icon is-small is-left">
							      <i className="fas fa-envelope"></i>
							    </span>
							  </div>
							</div>
							<div className="field">
							<label className="label">Business Name</label>
							  <div className="control has-icons-left">
							    <input className="input" type="text" required value={this.state.business_name}
                        		onChange={this.onChangeBusinessName} />
							    <span className="icon is-small is-left">
							      <i className="fas fa-lock"></i>
							    </span>
							  </div>
							</div>
							<div className="field">
							<label className="label">GST Number</label>
							  <div className="control has-icons-left">
							    <input className="input" type="text" required value={this.state.business_gst_number}
                       			onChange={this.onChangeGstNumber} />
							    <span className="icon is-small is-left">
							      <i className="fas fa-lock"></i>
							    </span>
							  </div>
							</div>
							<div className="field is-grouped">
							  <div className="control">
							    <button type="submit" className="button is-link">Submit</button>
							  </div>
							  <div className="control">
							    <button className="button is-light">Cancel</button>
							  </div>
							</div>
						</form>
					</div>
				</div>
			</section>
        )
    }
}