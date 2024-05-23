import React, { useEffect, useState } from 'react'
import HiveDatagrid from '../HiveDatagrid/HiveDatagrid'
import warehouses from '../../mock/warehouses.json'
import aggridConfig from './aggridConfig.json'
import { aggridData } from '../../mock'
import HiveModal from '../HiveModal/HiveModal'
import { useTranslation } from 'react-i18next'
import HiveButton from '../HiveButton/HiveButton'
import CreateWarehouse from './CreateWarehouse'

const HiveWarehouse = ({ warehouseId }) => {
  const warehouse = warehouses.find(warehouse => warehouse.warehouseId === Number(warehouseId))
  const { t, i18n } = useTranslation()
  const [showCreateForm, setShowCreateForm] = useState(false)
  return (
    <>
      <div className="w-48 my-2">
        <HiveButton label={t("warehouse.createWarehouse")} onClick={() => setShowCreateForm(true)} />
      </div>
      <HiveModal showModal={showCreateForm} onClose={() => setShowCreateForm(false)} modalTitle={t("warehouse.createTitle")}>
        <CreateWarehouse warehouse={warehouse} />
      </HiveModal>
      <HiveDatagrid aggridConfig={aggridConfig.aggridColumnDef} rowData={aggridData} />
    </>
  )
}

export default HiveWarehouse
