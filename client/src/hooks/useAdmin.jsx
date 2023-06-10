// import { useQuery } from "@tanstack/react-query";
// import useAuth from "./useAuth";
// import useAxiosSecure from "./useAxiosSecure";

// const useAdmin = () => {
//     const {user} = useAuth();
//     const [axiosSecure] = useAxiosSecure();
//     // use axios secure with react query
//     const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
//         queryKey: ['isAdmin', user?.email],
//         // enabled: !loading,
//         queryFn: async () => {
//             const res = await axiosSecure.get(`/users/admin/${user?.email}`);
//             return res.data.admin;
//         }
//     })
//     return [isAdmin, isAdminLoading]
// }
// export default useAdmin;

import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const useAdmin = () => {
  const { user } = useAuth();

  const fetchAdminStatus = async () => {
    const token = localStorage.getItem('access-token');
    const email = user?.email;
    if (token && email) {
      const response = await fetch(`http://localhost:5000/users/admin/${email}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        return data.admin;
      } else {
        throw new Error('Error fetching admin status');
      }
    }
    return false;
  };

  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ['isAdmin', user?.email],
    queryFn: fetchAdminStatus
  });

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
