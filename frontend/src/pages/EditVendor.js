import { useParams } from 'react-router-dom';
import VendorForm from '../components/VendorForm';

const EditVendor = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Edit Vendor</h1>
      <VendorForm mode="edit" vendorId={id} />
    </div>
  );
};
export default EditVendor;
