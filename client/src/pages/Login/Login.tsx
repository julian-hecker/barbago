import React, { useContext } from 'react';

import { UserContext } from '../../context/UserContext';

const Login: React.FC = () => {
  const { setUser } = useContext(UserContext);

  return (
    <div>
      Login
      <button onClick={() => setUser({ user: 'someone' })}>
        aaaaaaaa
      </button>
    </div>
  );
};

export default Login;
