import React from 'react'
import { Button } from 'react-bootstrap'

function Table({tableData, onRemove}) {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>NPI</th>
          <th>Email Address</th>
          <th>Phone #</th>
          <th>Street Address</th>
          <th>City</th>
          <th>State</th>
          <th>Zip</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {
          tableData.map((data, index) => {
            return (
              <tr key={index}>
                <td>{ data.firstName }</td>
                <td>{ data.lastName }</td>
                <td>{ data.npi }</td>
                <td>{ data.phone }</td>
                <td>{ data.email }</td>
                <td>{ data.streetAddress }</td>
                <td>{ data.city }</td>
                <td>{ data.state }</td>
                <td>{ data.zip }</td>
                <td>{ data.country }</td>
                <td><Button onClick={e => onRemove(e, data)} variant="danger">X</Button></td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default Table