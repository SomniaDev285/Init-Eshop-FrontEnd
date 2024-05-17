import React from 'react'
import HiveFormInput from '../HiveFormInput/HiveFormInput'
import HiveCombobox from '../HiveCombobox/HiveCombobox'
import comboboxData from '../../mock/comboboxData.json'

function CreateWarehouse({ warehouse }) {
    return (
        <>
            <div className='grid grid-cols-12 gap-4 card'>
                <HiveFormInput className='col-span-4' value={warehouse.warehouseName} label={'Name'} placeholder={'Add your warehouse name'} />
                <HiveFormInput className='col-span-8' label={'Address'} placeholder={'Add your warehouse address'} />
            </div>
            <div className="grid grid-cols-12 gap-4 card">
                <HiveCombobox className='col-span-4' label={'Company'} value={warehouse.companies[0].companyId}
                    onSelectionChange={(e) => console.log(e)} offlineData={comboboxData} labelKeyList={['first_name', 'last_name']} valueKey={"id"} />
                <HiveFormInput className='col-span-4' type='number' label='Phone Number' />
            </div>
        </>
    )
}

export default CreateWarehouse