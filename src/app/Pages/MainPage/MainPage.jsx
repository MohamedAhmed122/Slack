
import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import ChatContainer from '../../Components/Chat/ChatContainer/ChatContainer'
import Info from '../../Components/Info/info'
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
                            <Route exact path='/' >
                                <div className='info'>
                                 <Info />
                                </div>
                            </Route>
                            <Route exact path='/room/:roomId'>
                                <ChatContainer />
                            </Route>
                            <Route
                                exact
                                path="/room/5GISHfnhX4i0DuyWgNFy"
                                render={() =>
                                    isAuthenticated ? <Redirect to="/" /> : <ChatContainer />
                                }
                            />
                        </Switch>        
                    </div>
                </Fragment>
            }
        </div>
    )
}
