import React, { useEffect, useRef, useState } from 'react'
import './Welcome.css'
import { AppInput } from '../../components'
import { welcomeNext } from '../../assets/svg'

const Welcome = () => {
    const [companyName, setCompanyName] = useState('')
    const [welcomeTopic, setWelcomeTopic] = useState({ firstLine: 'You haven’t created your company yet!', secondLine: 'Pick a name for your company:', label: 'Company Name' })
    const ref = useRef(null)

    useEffect(() => {
        console.log(companyName)
        if (companyName.length > 0) {
            ref.current.style = 'opacity: 1; cursor: pointer'
        } else {
            ref.current.style = 'opacity: 0.5; cursor: default'
        }
    }, [companyName, setCompanyName])

    return (
        <div className="welcome w-full h-full flex justify-center items-center">
            <div className='border- w-1/2 h-1/2 bg-slate-300 rounded-3xl flex flex-col justify-center items-center relative'>
                <p className='p-4 text-3xl'>{welcomeTopic.firstLine}</p>
                <p className='p-4 mb-10 text-3xl'>{welcomeTopic.secondLine}</p>
                <div className="p-4 w-96">
                    <AppInput label={welcomeTopic.label} value={e => setCompanyName(e)} />
                </div>
                <div className='absolute right-7 bottom-7 opacity-50' ref={ref}>
                    <img src={welcomeNext}></img>
                </div>
            </div>

        </div>
    )
}

export default Welcome