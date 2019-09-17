import React from 'react';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';
import logo from '~/assets/logo-purple.svg';
import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>João Phellipe</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://avatars0.githubusercontent.com/u/3310246?s=400&v=4"
              alt="João Phellipe"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
