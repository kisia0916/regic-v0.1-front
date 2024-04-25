import React, { createContext, useContext, useEffect, useState } from 'react';
import './App.css';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import EditorPage from './pages/EditorPage';
import { userInfoInterface } from './interface/userInfoInterface';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProjectMain from './components/DashboardMain/ProjectMian/ProjectMain';


export const UserInfoContext = createContext<{data:userInfoInterface,setData:any}|undefined>(undefined)

function App() {
  const [userInfo,setUserInfo] = useState<userInfoInterface>({
    userId:"",
    userName:"",
    pass:"",
    email:""
  })
  useEffect(()=>{
    console.log(userInfo)
  },[userInfo])
  return (
    <div className="App">
      <UserInfoContext.Provider value={{data:userInfo,setData:setUserInfo}}>
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/dashboard' element={<DashboardPage/>}/>
            <Route path='/project/:id' element={<EditorPage/>}/>
          </Routes>
        </BrowserRouter>
      </UserInfoContext.Provider>
    </div>
  );
}

export default App;
