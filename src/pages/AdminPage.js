import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const permission = false; //pozwolenie=false

const AdminPage = () => {
    return (
      <Route render={() => (
        permission ? (<h3>Panel admina - dzie dobry</h3>) : (
          <Redirect to='/login' />
        )
      )} />
    );
}

export default AdminPage; 