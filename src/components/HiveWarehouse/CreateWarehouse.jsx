import React from 'react'
import HiveFormInput from '../HiveFormInput/HiveFormInput'
import HiveCombobox from '../HiveCombobox/HiveCombobox'
import comboboxData from '../../mock/comboboxData.json'
import HiveButton from '../HiveButton/HiveButton'
import { useForm } from 'react-hook-form'

function CreateWarehouse({ warehouse }) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log('Form Data:', data);
    };
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-12 gap-4'>
                    <HiveFormInput className='md:col-span-4 col-span-12' value={warehouse.warehouseName} label={'Name'} name='warehouseName'
                        placeholder={'Add your warehouse name'} {...register('warehouseName', { required: 'Warehouse name is required' })}
                        error={errors.warehouseName} />
                    <HiveFormInput className='md:col-span-8 col-span-12' label={'Address'} name={'warehouseAddress'} placeholder={'Add your warehouse address'}
                        {...register('warehouseAddress', { required: 'Warehouse address is required' })}
                        error={errors.warehouseAddress} />
                </div>
                <div className="grid grid-cols-12 gap-4 mt-5">
                    <HiveCombobox className='md:col-span-4 col-span-12' label={'Company'} name={'warehouseCompany'} value={warehouse.companies[0].companyId}
                        onSelectionChange={(e) => console.log(e)} offlineData={comboboxData} labelKeyList={['first_name', 'last_name']} valueKey={"id"}
                        {...register('warehouseCompany', { required: 'Warehouse related company is required' })}
                        error={errors.warehouseCompany} />
                    <HiveFormInput className='md:col-span-4 col-span-12' type='number' label='Phone Number' name={'warehousePhoneNumber'}
                        {...register('warehousePhoneNumber')}
                        error={errors.warehousePhoneNumber} />
                </div>

                <div className='grid grid-cols-12 gap-4 mt-5'>
                    <HiveButton type='submit' label='Submit' className='md:col-span-2 col-span-6' />
                </div>
            </form>
        </>
    )
}

export default CreateWarehouse