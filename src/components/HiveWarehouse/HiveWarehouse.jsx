import React, { useEffect } from 'react'
import HiveFormInput from '../HiveFormInput/HiveFormInput'
import HiveDatagrid from '../HiveDatagrid/HiveDatagrid'
import HiveCombobox from '../HiveCombobox/HiveCombobox'

const AddCompany = ({ warehouse }) => {
  const options = [
    {
      label: 'Cherry',
      value: '1011'
    },
    {
      label: 'Apple',
      value: '1012'
    },
    {
      label: 'Banana',
      value: '1013'
    },
    {
      label: 'Grip',
      value: '1014'
    },
  ];
  return (
    <>
      <HiveCombobox className='col-span-4' label={'Company'} value={warehouse.companies[0].companyId}
        onSelectionChange={(e) => console.log(e)} offlineData={options} labelKeyList={['label', 'value']} valueKey={"value"} />
      <HiveFormInput className='col-span-4' type='number' label='Phone Number' />
    </>
  )
}

const HiveWarehouse = ({ warehouseId }) => {
  const warehouses = [
    {
      warehouseId: 1,
      warehouseName: 'Main Warehouse',
      warehouseAddress: '',
      companies: [
        {
          companyId: '1011',
          companyName: 'Cherry',
          phoneNumber: '09380309950'
        }
      ]
    },
    {
      warehouseId: 2,
      warehouseName: 'Secondary Warehouse',
      warehouseAddress: 'Tehran, Tarasht',
      companies: [
        {
          companyId: '1012',
          companyName: 'Apple',
          phoneNumber: '09215942682'
        }
      ]
    }
  ];

  const warehouse = warehouses.find(warehouse => warehouse.warehouseId === Number(warehouseId))
  return (
    // <div>
    //   <h1>AppWarehouse {warehouseId}</h1>
    //   {/* <HiveButton type={'button'} label={'test'} btnIcon={signIn} /> */}
    //   <div className="grid grid-flow-row-dense grid-cols-12 gap-4">
    //     <div className="col-span-2">
    //       <HiveFormInput
    //         type={'text'}
    //         label={'Test Input'}
    //         description={'Descript'}
    //         value={'text'}
    //         onChange={(e) => console.log(e)}
    //       />
    //     </div>
    //     <div className="col-span-2">
    //       <HiveDropdown
    //         label={'Test Dropdown'}
    //         value={'option2'}
    //         onSelectionChange={(e) => console.log(e)}
    //       />
    //     </div>
    //   </div>
    //   {/* <div className="col-span-6"> */}
    //   <HiveDatagrid />
    //   {/* </div> */}
    // </div>
    <>
      <div className='grid grid-cols-12 gap-4'>
        <HiveFormInput className='col-span-4' value={warehouse.warehouseName} label={'Name'} placeholder={'Add your warehouse name'} />
        <HiveFormInput className='col-span-8' label={'Address'} placeholder={'Add your warehouse address'} />
      </div>
      <div className="grid grid-cols-12 gap-4 card">
        <AddCompany warehouse={warehouse} />
      </div>
      <HiveDatagrid />
    </>
  )
}

export default HiveWarehouse
