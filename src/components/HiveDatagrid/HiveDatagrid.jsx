import React, { useState } from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css' // Core grid CSS, necessary for any grid
import 'ag-grid-community/styles/ag-theme-alpine.css' // Optional theme CSS
import { aggridData } from '../../mock'
import { useMemo } from 'react'

// Create new GridExample component
const HiveDatagrid = () => {
  const [columnDefs, setColumnDefs] = useState([
    {
      field: 'product_name',
      headerName: 'Product Name',
      resizable: true,
      width: 200,
      hide: false,
      sortable: true,
      filter: 'agTextColumnFilter',
    },
    {
      field: 'part_number',
      headerName: 'Part Number',
      resizable: false,
      width: 200,
      hide: false,
      filter: 'agTextColumnFilter',
    },
    {
      field: 'price',
      headerName: 'Price',
      resizable: false,
      width: 200,
      hide: false,
      filter: 'agNumberColumnFilter',
    },
    {
      field: 'quantity',
      headerName: 'Quantity',
      resizable: false,
      width: 200,
      hide: false,
      filter: 'agTextColumnFilter',
    },
    {
      field: 'production_date',
      headerName: 'Production Date',
      resizable: false,
      width: 200,
      hide: false,
      filter: 'agDateColumnFilter',
      cellEditor: 'agDateCellEditor',
    },
  ])

  const defaultColDef = {
    flex: 1,
    minWidth: 180,
    filter: true,
    floatingFilter: true,
    editable: true,
  };

  const [rowData, setRowData] = useState(aggridData)

  //   const autoGroupColumnDef = {
  //     headerName: 'Make',
  //     field: 'make',
  //     cellRenderer: 'agGroupCellRenderer',
  //     cellRendererParams: {
  //       checkbox: true,
  //     },
  //   }

  return (
    <div className="ag-theme-alpine h-full w-full" style={{ height: 400 }}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
        groupIncludeFooter={true}
        groupIncludeTotalFooter={true}
        defaultColDef={defaultColDef}
      ></AgGridReact>
    </div>
  )
}
export default HiveDatagrid
