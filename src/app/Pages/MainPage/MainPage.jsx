import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import ChatContainer from '../../Components/Chat/ChatContainer/ChatContainer'
import Login from '../../Components/Login/Login'

import Header from '../../Layouts/Header/Header'
import SidebarContainer from '../../Layouts/Sidebar/SidebarContainer/SidebarContainer'


import './StyleMainPage.css'

export default function MainPage() {
    const { isAuthenticated} = useSelector(state => state.auth)
    return (
        <div>
            {!isAuthenticated ? 
                <Login />
                :
                <Fragment>
                    <Header />
                    <div className='app_body'>
                        <SidebarContainer />
                        <Switch>
                            <Route exact path='/'>
                                <h1>hello there</h1>
                            </Route>
                            <Route exact path='/room/:roomId'>
                                <ChatContainer />
                            </Route>
                        </Switch>        
                    </div>
                </Fragment>
            }
            </div>
    )
}
