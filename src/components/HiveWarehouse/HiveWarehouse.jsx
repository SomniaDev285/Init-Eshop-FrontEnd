import React from 'react'
import { signIn } from '../../assets/svg'
import HiveButton from '../HiveButton/HiveButton'
import HiveFormInput from '../HiveFormInput/HiveFormInput'
import HiveDropdown from '../HiveDropdown/HiveDropdown'
import HiveDatagrid from '../HiveDatagrid/HiveDatagrid'

const HiveWarehouse = ({ warehouseId }) => {
  return (
    <div>
      <h1>AppWarehouse {warehouseId}</h1>
      {/* <HiveButton type={'button'} label={'test'} btnIcon={signIn} /> */}
      <HiveFormInput
        type={'text'}
        label={'Test Input'}
        description={'Descript'}
        value={'text'}
        onChange={(e) => console.log(e)}
      />
      <HiveDropdown
        label={'Test Dropdown'}
        value={'option2'}
        onSelectionChange={(e) => console.log(e)}
      />
      <HiveDatagrid />
    </div>
  )
}

export default HiveWarehouse
