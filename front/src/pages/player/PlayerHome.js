import { useNavigate } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import { FlagState } from '../../context/FlagProvider';

const PlayerHome = () => {
  const navigate = useNavigate();
  const logoutUser = async () => {
    console.log('logged out');
    await fetch('/api/player/logout', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });
    setLoginflag(false);
    console.log('logged out');
    return navigate('/');
  };

  const gotoPlayerPlayer = () => {
    return navigate('/player/playerplayer');
  };
  const { loginflag, setLoginflag } = FlagState();

  const gotoPlayerCoach = () => {
    return navigate('/player/playerCoach');
  };

  return (
    <div>
      <div className='newcode'>
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              maxHeight: '1000px',
              maxWidth: '900px',
              backgroundColor: '#fff',
              padding: '40px',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h1
              style={{
                fontSize: '2.5rem',
                marginBottom: '30px',
                color: '#333',
              }}
            >
              Welcome to Sports Connect
            </h1>
            <p
              style={{
                fontSize: '1.2rem',
                marginBottom: '30px',
                color: '#666',
              }}
            >
              Ready to take your game to the next level?
            </p>

            <div
              style={{
                display: 'inline-block',
                padding: '15px 40px',
                fontSize: '1.2rem',
                backgroundColor: '#007bff',
                color: '#fff',
                textDecoration: 'none',
                border: 'none',
                borderRadius: '25px',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
                margin: '10px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
              }}
            >
              <button onClick={gotoPlayerPlayer}>Find players</button>
            </div>
            <div
              style={{
                display: 'inline-block',
                padding: '15px 40px',
                fontSize: '1.2rem',
                backgroundColor: '#007bff',
                color: '#fff',
                textDecoration: 'none',
                border: 'none',
                borderRadius: '25px',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
                margin: '10px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
              }}
            >
              <button onClick={gotoPlayerCoach}>Find coaches</button>
            </div>

            <div
              style={{
                display: 'inline-block',
                padding: '15px 40px',
                fontSize: '1.2rem',
                backgroundColor: 'red',
                color: '#fff',
                textDecoration: 'none',
                border: 'none',
                borderRadius: '25px',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
                margin: '10px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
              }}
            >
              <button onClick={logoutUser}>sign out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerHome;
