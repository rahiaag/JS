import Sidebar from '../components/Sidebar';
import VendorTable from '../components/VendorTable';
//import '../styles/Dashboard.css'; // You’ll create this CSS file

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <h1 className="dashboard-heading">Vendor List</h1>
        <VendorTable />
      </div>
    </div>
  );
};

export default Dashboard;
