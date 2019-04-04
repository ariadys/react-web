import React, { Component } from 'react';

class TableRow extends Component {
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.person_name}
          </td>
          <td>
            {this.props.obj.business_name}
          </td>
          <td>
            {this.props.obj.business_gst_number}
          </td>
          <td>
            <button className="button is-info">Edit</button>
            <button className="button is-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;