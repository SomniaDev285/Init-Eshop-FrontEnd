import React, { useEffect, useRef, useState } from 'react'
import './Welcome.css'
import { AppButton, AppInput } from '../../components'
import { welcomeNext } from '../../assets/svg'

const Welcome = () => {
  const [companyName, setCompanyName] = useState('')
  const [warehouseName, setWarehouseName] = useState('')
  const [stepper, setStepper] = useState('company')
  const [welcomeTopic, setWelcomeTopic] = useState({
    firstLine: 'You haven’t created your company yet!',
    secondLine: 'Pick a name for your company:',
    label: 'Company Name',
  })
  const ref = useRef(null)

  useEffect(() => {
    if (companyName.length > 0 && stepper == 'company') {
      ref.current.style = 'opacity: 1; cursor: pointer'
    } else {
      ref.current.style = 'opacity: 0.5; cursor: default'
    }
  }, [companyName, setCompanyName])
  useEffect(() => {
    if (warehouseName.length > 0 && stepper == 'warehouse') {
      ref.current.style = 'opacity: 1; cursor: pointer'
    } else {
      ref.current.style = 'opacity: 0.5; cursor: default'
    }
  }, [warehouseName, setWarehouseName])

  const addProfile = () => {
    console.log('company: ', companyName)
    console.log('warehouse: ', warehouseName)
  }

  const handleNextWelcoming = () => {
    if (companyName.length > 0 && stepper == 'company') {
      setStepper('warehouse')
      if (warehouseName.length === 0) {
        ref.current.style = 'opacity: 0.5; cursor: default'
      }
      setWelcomeTopic({
        firstLine: 'Pick a name for your warehouse:',
        secondLine: '',
        label: 'Warehouse Name',
      })
    } else if (warehouseName.length > 0 && stepper == 'warehouse') {
      setStepper('finish')
      setWelcomeTopic({
        firstLine: 'Congratulations!',
        secondLine: 'You created your first company on E-Shop',
        label: '',
      })
    } else if (stepper == 'finish') {
      addProfile()
    }
  }

  const handleBackWelcoming = () => {
    if (stepper === 'warehouse') {
      setStepper('company')
      setWelcomeTopic({
        firstLine: 'You haven’t created your company yet!',
        secondLine: 'Pick a name for your company:',
        label: 'Company Name',
      })
    } else if (stepper === 'finish') {
      setStepper('warehouse')
      setWelcomeTopic({
        firstLine: 'Pick a name for your warehouse:',
        secondLine: '',
        label: 'Warehouse Name',
      })
    }
  }

  return (
    <div className="welcome w-full h-full flex justify-center items-center">
      <div className="border- w-1/2 h-1/2 bg-slate-300 rounded-[48px] flex flex-col justify-center items-center relative">
        <p className="p-4 text-3xl">{welcomeTopic.firstLine}</p>
        {welcomeTopic.secondLine && (
          <p className="p-4 mb-10 text-3xl">{welcomeTopic.secondLine}</p>
        )}
        {stepper === 'company' && (
          <div className="p-4 w-96">
            <AppInput
              label={welcomeTopic.label}
              value={companyName}
              onChangeValue={(e) => setCompanyName(e)}
            />
          </div>
        )}
        {stepper === 'warehouse' && (
          <div className="p-4 mt-5 w-96">
            <AppInput
              label={welcomeTopic.label}
              value={warehouseName}
              onChangeValue={(e) => setWarehouseName(e)}
            />
          </div>
        )}
        {stepper !== 'finish' ? (
          <div
            className="absolute right-7 bottom-7 opacity-50"
            onClick={handleNextWelcoming}
            ref={ref}
          >
            <img src={welcomeNext}></img>
          </div>
        ) : (
          <div className="absolute right-7 bottom-7 w-48">
            <AppButton label="finish" />
          </div>
        )}
        {stepper !== 'company' && (
          <div
            className="absolute left-7 bottom-7 cursor-pointer rotate-180"
            onClick={handleBackWelcoming}
          >
            <img src={welcomeNext}></img>
          </div>
        )}
      </div>
    </div>
  )
}

export default Welcome
