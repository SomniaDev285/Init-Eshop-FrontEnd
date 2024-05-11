import React from 'react'
import { HiveWarehouse } from '../../components'
import { useParams } from 'react-router-dom'
// import { useTranslation } from 'react-i18next'

const Warehouse = () => {
  // const { t } = useTranslation()
  const { warehouseId } = useParams()
  return (
    <>
      <HiveWarehouse warehouseId={warehouseId} />
    </>
  )
}

export default Warehouse
