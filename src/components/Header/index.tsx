import './header.scss';

import logo from '@assets/images/logo-todo-list.svg'

export function Header() {
  return(
    <header className="header">
      <img className='logo' src={logo} alt="Logotipo To-do list App" />
    </header>
  )
}