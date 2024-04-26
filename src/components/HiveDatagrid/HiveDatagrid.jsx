import React, { useState } from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css' // Core grid CSS, necessary for any grid
import 'ag-grid-community/styles/ag-theme-alpine.css' // Optional theme CSS

// Create new GridExample component
const HiveDatagrid = () => {
  const [columnDefs, setColumnDefs] = useState([
    {
      headerName: 'Make',
      field: 'make',
      resizable: true,
      width: 100,
      hide: false,
      sortable: true,
      filter: 'agTextColumnFilter',
      aggFunc: 'sum',
    },
    {
      headerName: 'Model',
      field: 'model',
      resizable: false,
      width: 200,
      hide: false,
    },
    {
      headerName: 'Price',
      field: 'price',
      resizable: false,
      width: 300,
      hide: false,
      aggFunc: 'sum',
    },
  ])

  const [rowData, setRowData] = useState([
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
  ])

  //   const autoGroupColumnDef = {
  //     headerName: 'Make',
  //     field: 'make',
  //     cellRenderer: 'agGroupCellRenderer',
  //     cellRendererParams: {
  //       checkbox: true,
  //     },
  //   }

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
        groupIncludeFooter={true}
        groupIncludeTotalFooter={true}
      ></AgGridReact>
    </div>
  )
}
export default HiveDatagrid
