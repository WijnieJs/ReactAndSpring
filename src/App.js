import React, { useState } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'

import Layout from './components/Layout/Layout'
import ToolBar from './components/Navigation/ToolBar/ToolBar'
import MobileNav from './components/Navigation/MobileNav/MobileNav'
import MainNav from './components/Navigation/MainNav/MainNav'
import BackDrop from './components/UI-interfaces/Backdrop'
import Home from './pages/Home'
import PageOne from './pages/PageOne'
import ProductSingle from './pages/ProductSingle'

function App() {
  const [navState, setNavState] = useState({
    showBackdrop: false,
    showMobileNav: false,
    error: null,
  })
  const [auth, setAuth] = useState(true)

  const mobileNavHandler = (isOpen) => {
    setNavState({ showMobileNav: isOpen, showBackdrop: isOpen })
  }

  const backdropClickHandler = () => {
    setNavState({ showBackdrop: false, showMobileNav: false, error: null })
  }

  const logoutHandler = () => {
    // setAuth(false)
    console.log('Logout')
    // localStorage.removeItem('token')
    // localStorage.removeItem('expiryDate')
    // localStorage.removeItem('userId')
  }

  let routes = (
    <Switch>
      <Route path="/" exact render={(props) => <Home {...props} />} />
      <Route path="/pageone" exact render={(props) => <PageOne {...props} />} />
      <Route
        path="/single"
        exact
        render={(props) => <ProductSingle {...props} />}
      />
    </Switch>
  )
  return (
    <React.Fragment>
      {navState.showBackdrop && <BackDrop onClick={backdropClickHandler} />}

      <Layout
        header={
          <ToolBar>
            <MainNav
              onOpenMobileNav={() => mobileNavHandler(true)}
              onLogout={logoutHandler}
              isAuth={auth}
            />
          </ToolBar>
        }
        mobileNav={
          <MobileNav
            open={navState.showMobileNav}
            mobile
            onChooseItem={() => mobileNavHandler(false)}
            onLogout={logoutHandler}
            isAuth={auth}
          />
        }
      />
      {routes}
    </React.Fragment>
  )
}

export default withRouter(App)
