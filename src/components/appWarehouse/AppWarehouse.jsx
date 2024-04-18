import React from 'react'
import AppButton from '../AppButton/AppButton'
import { barIcon, signIn } from '../../assets/svg'

const AppWarehouse = ({ warehouseId }) => {
  return (
    <div>
      AppWarehouse {warehouseId}
      <AppButton type={'button'} label={'test'} btnIcon={signIn} />
    </div>
  )
}

export default AppWarehouse
