import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Table } from './styles';

import Header from './Header';
import Row from './Row';

const Component = ({ visits }) => (
  <Table>
    <Header />
    {
      visits.length !== 0
        ? visits.map((visit) => <Row key={visit.id} visit={visit} />)
        : (
          <>
            <div className="empty-row">
              <p>Sem visitas agendadas.</p>
            </div>
            <div className="separator" />
          </>
        )
    }
  </Table>
);

Component.propTypes = { visits: PropTypes.arrayOf(PropTypes.object).isRequired };

const mapStateToProps = (state) => ({ visits: state.visits });

export default connect(mapStateToProps)(Component);
