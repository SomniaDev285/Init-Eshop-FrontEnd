import React from 'react'
import { AppWarehouse } from '../../components'
import { useParams } from 'react-router-dom'
// import { useTranslation } from 'react-i18next'

const Warehouse = () => {
  // const { t } = useTranslation()
  let { warehouseId } = useParams()
  console.log(warehouseId)
  return (
    <>
      <AppWarehouse warehouseId={warehouseId} />
    </>
  )
}

export default Warehouse
