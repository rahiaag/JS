import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const VendorTable = () => {
  const navigate = useNavigate();
  const [vendors, setVendors] = useState([]);
  const [page, setPage] = useState(1);

  const fetchVendors = () => {
    fetch(`http://localhost:5000/vendors?page=${page}`)
      .then(res => res.json())
      .then(data => setVendors(data));
  };

  useEffect(() => {
    fetchVendors();
  }, [page]);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this vendor?')) {
      await fetch(`http://localhost:5000/vendors/${id}`, { method: 'DELETE' });
      fetchVendors();
    }
  };

  return (
    <div className="vendor-table-wrapper">
      <table className="vendor-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Account No</th>
            <th>Bank Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {vendors.map(v => (
            <tr key={v._id}>
              <td>{v.name}</td>
              <td>{v.accountNo}</td>
              <td>{v.bankName}</td>
              <td>
                <button onClick={() => navigate(`/edit/${v._id}`)}>Edit</button>
                <button onClick={() => handleDelete(v._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
};

export default VendorTable;
