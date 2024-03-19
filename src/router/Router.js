import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Welcome from '../views/welcome/Welcome'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Welcome />} />
                {/* <Route path="/phonebook" element={<PhonebookMain />} />
              <Route path="/phonebook/team/:userID" element={<TeamView />} />
              <Route path="/login" element={<LoginForm />} /> */}
                {/* <Route path="/dashboard/" element={<Dashboard />}>
                  <Route exact path="" element={<Main />} />
                  <Route path="personel/:teamId" element={<Personel />} />
                  <Route path="manage-slides" element={<SlideshowManager />} />
              </Route> */}
                {/* <Route path="/groups" element={<Groups />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default Router;