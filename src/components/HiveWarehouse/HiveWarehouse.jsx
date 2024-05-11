import React from 'react'
import HiveFormInput from '../HiveFormInput/HiveFormInput'
import HiveDatagrid from '../HiveDatagrid/HiveDatagrid'
import HiveCombobox from '../HiveCombobox/HiveCombobox'
import comboboxData from '../../mock/comboboxData.json'
import warehouses from '../../mock/warehouses.json'
import aggridConfig from './aggridConfig.json'
import { aggridData } from '../../mock'

const AddCompany = ({ warehouse }) => {
  return (
    <>
      <HiveCombobox className='col-span-4' label={'Company'} value={warehouse.companies[0].companyId}
        onSelectionChange={(e) => console.log(e)} offlineData={comboboxData} labelKeyList={['first_name', 'last_name']} valueKey={"id"} />
      <HiveFormInput className='col-span-4' type='number' label='Phone Number' />
    </>
  )
}

const HiveWarehouse = ({ warehouseId }) => {
  const warehouse = warehouses.find(warehouse => warehouse.warehouseId === Number(warehouseId))
  return (
    // <div>
    //   <h1>AppWarehouse {warehouseId}</h1>
    //   {/* <HiveButton type={'button'} label={'test'} btnIcon={signIn} /> */}
    //   <div className="grid grid-flow-row-dense grid-cols-12 gap-4">
    //     <div className="col-span-2">
    //       <HiveFormInput
    //         type={'text'}
    //         label={'Test Input'}
    //         description={'Descript'}
    //         value={'text'}
    //         onChange={(e) => console.log(e)}
    //       />
    //     </div>
    //     <div className="col-span-2">
    //       <HiveDropdown
    //         label={'Test Dropdown'}
    //         value={'option2'}
    //         onSelectionChange={(e) => console.log(e)}
    //       />
    //     </div>
    //   </div>
    //   {/* <div className="col-span-6"> */}
    //   <HiveDatagrid />
    //   {/* </div> */}
    // </div>
    <>
      <div className='grid grid-cols-12 gap-4'>
        <HiveFormInput className='col-span-4' value={warehouse.warehouseName} label={'Name'} placeholder={'Add your warehouse name'} />
        <HiveFormInput className='col-span-8' label={'Address'} placeholder={'Add your warehouse address'} />
      </div>
      <div className="grid grid-cols-12 gap-4 card">
        <AddCompany warehouse={warehouse} />
      </div>
      <HiveDatagrid aggridConfig={aggridConfig.aggridColumnDef} rowData={aggridData} />
    </>
  )
}

export default HiveWarehouse
