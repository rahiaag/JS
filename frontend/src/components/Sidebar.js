import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('/add')}>
        Add Vendor
      </button>
      <button onClick={() => navigate('/')}>
        Logout
      </button>
    </div>
  );
};
export default Sidebar;