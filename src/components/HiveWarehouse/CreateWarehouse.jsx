import React from 'react'
import HiveFormInput from '../HiveFormInput/HiveFormInput'
import HiveCombobox from '../HiveCombobox/HiveCombobox'
import comboboxData from '../../mock/comboboxData.json'

function CreateWarehouse({ warehouse }) {
    return (
        <>
            <div className='grid grid-cols-12 gap-4 card'>
                <HiveFormInput className='md:col-span-4 col-span-12' value={warehouse.warehouseName} label={'Name'} placeholder={'Add your warehouse name'} />
                <HiveFormInput className='md:col-span-8 col-span-12' label={'Address'} placeholder={'Add your warehouse address'} />
            </div>
            <div className="grid grid-cols-12 gap-4 card">
                <HiveCombobox className='md:col-span-4 col-span-12' label={'Company'} value={warehouse.companies[0].companyId}
                    onSelectionChange={(e) => console.log(e)} offlineData={comboboxData} labelKeyList={['first_name', 'last_name']} valueKey={"id"} />
                <HiveFormInput className='md:col-span-4 col-span-12' type='number' label='Phone Number' />
            </div>
        </>
    )
}

export default CreateWarehouse