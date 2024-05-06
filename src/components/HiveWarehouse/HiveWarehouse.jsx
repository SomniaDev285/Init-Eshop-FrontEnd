import React from 'react'
import HiveFormInput from '../HiveFormInput/HiveFormInput'
import HiveDatagrid from '../HiveDatagrid/HiveDatagrid'
import HiveCombobox from '../HiveCombobox/HiveCombobox'

const AddCompany = () => {
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
      <HiveCombobox className='col-span-4' label={'Company'} value={'Cherry'} dispLabelList={['label', 'value']}
        onSelectionChange={(e) => console.log(e)} offlineData={options} labelKey={"label"} valueKey={"value"} />
      <HiveFormInput className='col-span-4' type='number' label='Phone Number' />
    </>
  )
}

const HiveWarehouse = ({ warehouseId }) => {
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
        <HiveFormInput className='col-span-4' label={'Name'} placeholder={'Add your warehouse name'} />
        <HiveFormInput className='col-span-8' label={'Address'} placeholder={'Add your warehouse address'} />
      </div>
      <div className="grid grid-cols-12 gap-4 card">
        <AddCompany />
      </div>
      <HiveDatagrid />
    </>
  )
}

export default HiveWarehouse
