import React from 'react'
import { signIn } from '../../assets/svg'
import HiveButton from '../HiveButton/HiveButton'
import HiveFormInput from '../HiveFormInput/HiveFormInput'
import HiveDropdown from '../HiveDropdown/HiveDropdown'
import HiveDatagrid from '../HiveDatagrid/HiveDatagrid'

const HiveWarehouse = ({ warehouseId }) => {
  return (
    <div className="container">
      <h1>AppWarehouse {warehouseId}</h1>
      {/* <HiveButton type={'button'} label={'test'} btnIcon={signIn} /> */}
      <div className="grid grid-flow-row-dense grid-cols-12 gap-4">
        <div className="col-span-2">
          <HiveFormInput
            type={'text'}
            label={'Test Input'}
            description={'Descript'}
            value={'text'}
            onChange={(e) => console.log(e)}
          />
        </div>
        <div className="col-span-2">
          <HiveDropdown
            label={'Test Dropdown'}
            value={'option2'}
            onSelectionChange={(e) => console.log(e)}
          />
        </div>
      </div>
      {/* <div className="col-span-6"> */}
      <HiveDatagrid />
      {/* </div> */}
    </div>
  )
}

export default HiveWarehouse
