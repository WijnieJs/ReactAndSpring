import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../../Forms/Button'
import './NavItems.css'

const navItems = [
  { id: 'home', text: 'home', link: '/', auth: true },
  { id: 'one', text: 'one', link: '/pageone', auth: true },
  { id: 'byId', text: 'Single', link: '/single', auth: true },
  { id: 'login', text: 'Login', link: '/login', auth: false },
  { id: 'signup', text: 'Signup', link: '/signup', auth: false },
]

const NavItems = (props) => [
  ...navItems
    .filter((item) => item.auth === props.isAuth)
    .map((item) => (
      <li
        key={item.id}
        className={['navigation-item', props.mobile ? 'mobile' : ''].join(' ')}
      >
        <NavLink to={item.link} exact onClick={props.onChoose}>
          {item.text}
        </NavLink>
      </li>
    )),
  props.isAuth && (
    <li key="logout">
      <Button
        mode="raised"
        design="accent"
        type="submit"
        onClick={props.onLogout}
      >
        Logout
      </Button>
    </li>
  ),
]

export default NavItems
