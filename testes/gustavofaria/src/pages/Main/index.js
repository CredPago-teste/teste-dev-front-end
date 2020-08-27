import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Main, Navbar } from './styles';

import Logo from '../../assets/Logo.svg';

import Loading from '../../components/Loading';
import Table from '../../components/Table';
import ModalAdd from '../../components/Modal/ModalAdd';
import ModalDelete from '../../components/Modal/ModalDelete';
import ModalEdit from '../../components/Modal/ModalEdit';

import * as ModalActions from '../../store/actions/modal';

const Component = ({ handleOpenAddModal }) => {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState('');

  useEffect(() => {
    window.document.title = 'CredPago';
    const user = window.localStorage.getItem('user');
    if (!user) {
      window.location.replace('/login');
    } else {
      const { name } = JSON.parse(user);
      setUsername(name);
      setLoading(false);
    }
  }, []);

  const handleLogout = () => {
    window.localStorage.clear();
    window.location.replace('/login');
  };

  return (
    <Main>
      <Loading visible={loading} />

      <ModalAdd />
      <ModalDelete />
      <ModalEdit />

      <Navbar>
        <div className="container">
          <img src={Logo} alt="Logo" />

          <div className="nav-items">
            <p>MEU PERFIL</p>
            <div className="separator" />
            <div onClick={handleLogout} role="button" tabIndex="0" aria-hidden="true">
              <p>SAIR</p>
            </div>
          </div>

          <p>{username}</p>
        </div>
      </Navbar>

      <div className="container">
        <div className="header">
          <p>Próximas Visitas</p>
          <button type="button" onClick={handleOpenAddModal}>+ Novo Agendamento</button>
        </div>

        <Table />

      </div>
    </Main>
  );
};

Component.propTypes = { handleOpenAddModal: PropTypes.func.isRequired };

const mapStateToProps = (state) => ({ state });
const mapDispatchToProps = (dispatch) => ({
  handleOpenAddModal: () => dispatch(ModalActions.openAddModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
