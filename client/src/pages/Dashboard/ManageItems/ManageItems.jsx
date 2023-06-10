import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import SectionTitle from "../../../compoents/SectionTitle/SectionTitle";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useMenu from "../../../hooks/useMenu";


const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    // const [axiosSecure] = useAxiosSecure();

    // const handleDelete = item => {
    //     Swal.fire({
    //         title: 'Are you sure?',
    //         text: "You won't be able to revert this!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!'
    //       }).then((result) => {
    //         if (result.isConfirmed) {

    //             axiosSecure.delete(`/menu/${item._id}`)
    //             .then(res => {
    //                 console.log('deleted res', res.data);
    //                 refetch()
    //                 if(res.data.deletedCount > 0) {
    //                     Swal.fire(
    //                         'Deleted!',
    //                         'Your file has been deleted.',
    //                         'success'
    //                         )
    //                     }
    //             })

    //         }
    //       })
    // }

    const handleDelete = item => {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`http://localhost:5000/menu/${item._id}`, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('access-token')}`
              }
            })
            .then(response => response.json())
            .then(data => {
              console.log('deleted data', data);
              refetch();
              if (data.deletedCount > 0) {
                Swal.fire(
                  'Deleted!',
                  'Your file has been deleted.',
                  'success'
                );
              }
            })
            .catch(error => {
              console.error('Error deleting the item:', error);
            });
          }
        });
      }
      

    return (
        <div className="w-full">
            <SectionTitle heading="Manage All Items" subHeading="Hurry Up"></SectionTitle>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Item</th>
        <th>Category</th>
        <th>Price</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        menu.map((item, index) => <tr key={item._id}>
            <td>
              {index + 1}
            </td>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{item.name}</div>
                </div>
              </div>
            </td>
            <td>{item.category}</td>
            <td className="text-right">${item.price}</td>
            <td>
              <button className="btn btn-ghost btn-xs">details</button>
            </td>
            <td>
            <button
                    onClick={() => handleDelete(item)}
                    className="btn bg-red-600 text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
            </td>
          </tr>)
      }
      
    </tbody>    
  </table>
</div>
        </div>
    );
};

export default ManageItems;