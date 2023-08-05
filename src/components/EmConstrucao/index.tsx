import './emConstrucao.scss';

import logo from '../../assets/images/logo-todo-list.svg'

export function EmConstrucao() {
  return (
    <div className='wrapper-em-construcao'>
      <img src={logo} alt="Logotipo to-do list" />
      <p>Está página está destinada à um projeto de lista de tarefas</p>
      <p>Página em construção</p>
    </div>
  );
}