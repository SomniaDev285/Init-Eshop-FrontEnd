import React from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css' // Core grid CSS, necessary for any grid
import 'ag-grid-community/styles/ag-theme-alpine.css' // Optional theme CSS


// Create new GridExample component
const HiveDatagrid = ({ aggridConfig, rowData }) => {
  const defaultColDef = {
    flex: 1,
    minWidth: 180,
    filter: true,
    resizable: true,
    floatingFilter: true,
    editable: true,
  };

  return (
    <div className="ag-theme-alpine h-full w-full" style={{ height: 400 }}>
      <AgGridReact
        columnDefs={aggridConfig}
        rowData={rowData}
        groupIncludeFooter={true}
        groupIncludeTotalFooter={true}
        defaultColDef={defaultColDef}
      ></AgGridReact>
    </div>
  )
}
export default HiveDatagrid
