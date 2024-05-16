import React, { useState } from 'react'
import HiveFormInput from '../HiveFormInput/HiveFormInput'
import HiveDatagrid from '../HiveDatagrid/HiveDatagrid'
import HiveCombobox from '../HiveCombobox/HiveCombobox'
import comboboxData from '../../mock/comboboxData.json'
import warehouses from '../../mock/warehouses.json'
import aggridConfig from './aggridConfig.json'
import { aggridData } from '../../mock'
import HiveModal from '../HiveModal/HiveModal'
import { useTranslation } from 'react-i18next'
import HiveButton from '../HiveButton/HiveButton'

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
  const { t, i18n } = useTranslation()
  const [testModal, setTestModal] = useState(false)
  return (
    <>
      <div className="w-48 my-2">
        <HiveButton label={t("warehouse.createWarehouse")} onClick={() => setTestModal(true)} />
      </div>
      <HiveModal showModal={testModal} onClose={() => setTestModal(false)} modalTitle={t("warehouse.createTitle")}>
        <div className='grid grid-cols-12 gap-4'>
          <HiveFormInput className='col-span-4' value={warehouse.warehouseName} label={'Name'} placeholder={'Add your warehouse name'} />
          <HiveFormInput className='col-span-8' label={'Address'} placeholder={'Add your warehouse address'} />
        </div>
        <div className="grid grid-cols-12 gap-4 card">
          <AddCompany warehouse={warehouse} />
        </div>
      </HiveModal>
      <HiveDatagrid aggridConfig={aggridConfig.aggridColumnDef} rowData={aggridData} />
    </>
  )
}

export default HiveWarehouse
