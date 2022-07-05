import React from 'react'
import { useState } from 'react'
import Registration from '../registration/Registration';
import Table from '../table/Table'

function DisplayFormDataInTable() {
  const [tableData, setTableData] = useState([]);
  const [formInputData, setFormInputData] = useState({
    firstName: '',
    lastName: '',
    npi: '',
    email: '',
    phone: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    country: ''
  });

  const handleChange = (event) => {
    const newInput = (data) => ({...data, [event.target.name]:event.target.value});
    setFormInputData(newInput)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const checkEmptyInput = !Object.values(formInputData).every(res => res==='')
    const npiProvided = formInputData.npi

    if (checkEmptyInput)
    {
      if (npiProvided)
      {
        const newData = (data) => ([...data, formInputData]);
        setTableData(newData);
        const emptyInput = {
          firstName: '',
          lastName: '',
          npi: '',
          email: '',
          phone: '',
          streetAddress: '',
          city: '',
          state: '',
          zipCode: '',
          country: ''
        }
        setFormInputData(emptyInput);
      }
    }
  }

  const handleRemove = (event, data) => {
    event.preventDefault();
    setTableData(tableData.filter(d => d.npi !== data.npi))
  }

  return (
    <React.Fragment>
      <div className='container'>
          <Registration handleChange={handleChange} formInputData={formInputData} handleSubmit={handleSubmit} />
          <Table onRemove={handleRemove} tableData={tableData} />
      </div>
    </React.Fragment>
  )
}

export default DisplayFormDataInTable