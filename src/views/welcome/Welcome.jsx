import React, { useEffect, useRef, useState } from 'react'
import './Welcome.css'
import { HiveButton, HiveInput } from '../../components'
import { welcomeNext } from '../../assets/svg'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const Welcome = () => {
  const { t } = useTranslation()
  const [companyName, setCompanyName] = useState('')
  const [warehouseName, setWarehouseName] = useState('')
  const [stepper, setStepper] = useState('company')
  const [welcomeTopic, setWelcomeTopic] = useState({
    firstLine: t('welcome.companyFirstLine'),
    secondLine: t('welcome.companySecondLine'),
    label: t('welcome.CompanyName'),
  })
  const nextButtonRef = useRef(null)
  useEffect(() => {
    if (companyName.length > 0 && stepper === 'company') {
      nextButtonRef.current.style = 'opacity: 1; cursor: pointer'
    } else {
      nextButtonRef.current.style = 'opacity: 0.5; cursor: default'
    }
  }, [companyName, setCompanyName, stepper])
  useEffect(() => {
    if (warehouseName.length > 0 && stepper === 'warehouse') {
      nextButtonRef.current.style = 'opacity: 1; cursor: pointer'
    } else {
      nextButtonRef.current.style = 'opacity: 0.5; cursor: default'
    }
  }, [warehouseName, setWarehouseName, stepper])

  const addProfile = () => {
    console.log('company: ', companyName)
    console.log('warehouse: ', warehouseName)
  }

  const handleNextWelcoming = () => {
    if (companyName.length > 0 && stepper === 'company') {
      setStepper('warehouse')
      if (warehouseName.length === 0) {
        nextButtonRef.current.style = 'opacity: 0.5; cursor: default'
      }
      setWelcomeTopic({
        firstLine: t('welcome.warehouseFirstLine'),
        secondLine: '',
        label: t('welcome.WarehouseName'),
      })
    } else if (warehouseName.length > 0 && stepper === 'warehouse') {
      setStepper('finish')
      setWelcomeTopic({
        firstLine: t('welcome.doneFirstLine'),
        secondLine: t('welcome.doneSecondLine'),
        label: '',
      })
    } else if (stepper === 'finish') {
      addProfile()
    }
  }

  const handleBackWelcoming = () => {
    if (stepper === 'warehouse') {
      setStepper('company')
      setWelcomeTopic({
        firstLine: t('welcome.companyFirstLine'),
        secondLine: t('welcome.companySecondLine'),
        label: t('welcome.CompanyName'),
      })
    } else if (stepper === 'finish') {
      setStepper('warehouse')
      setWelcomeTopic({
        firstLine: t('welcome.warehouseFirstLine'),
        secondLine: '',
        label: t('welcome.WarehouseName'),
      })
    }
  }

  return (
    <div className="App welcome w-full h-full flex justify-center items-center">
      <div className="border- w-1/2 h-1/2 bg-slate-300 rounded-[48px] flex flex-col justify-center items-center relative">
        <p className="p-4 text-3xl">{welcomeTopic.firstLine}</p>
        {welcomeTopic.secondLine && (
          <p className="p-4 mb-10 text-3xl">{welcomeTopic.secondLine}</p>
        )}
        {stepper === 'company' && (
          <div className="p-4 w-96">
            <HiveInput
              label={welcomeTopic.label}
              value={companyName}
              onChangeValue={(e) => setCompanyName(e)}
            />
          </div>
        )}
        {stepper === 'warehouse' && (
          <div className="p-4 mt-5 w-96">
            <HiveInput
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
            ref={nextButtonRef}
          >
            <img src={welcomeNext} alt="next icon"></img>
          </div>
        ) : (
          <div className="absolute right-7 bottom-7 w-48">
            <Link to="/dashboard">
              <HiveButton label={t('welcome.finish')} />
            </Link>
          </div>
        )}
        {stepper !== 'company' && (
          <div
            className="absolute left-7 bottom-7 cursor-pointer rotate-180"
            onClick={handleBackWelcoming}
          >
            <img src={welcomeNext} alt="back icon"></img>
          </div>
        )}
      </div>
    </div>
  )
}

export default Welcome
