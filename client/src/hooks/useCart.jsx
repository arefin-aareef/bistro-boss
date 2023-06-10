// import { useQuery } from '@tanstack/react-query';
// import useAuth from './useAuth';
// import useAxiosSecure from './useAxiosSecure';

// const useCart = () => {
//   const { user, loading } = useAuth();
//   const [axiosSecure] = useAxiosSecure();


//   const { refetch, data: cart = [] } = useQuery({
//     queryKey: ['cart', user?.email],
//     enabled: !loading,
//     queryFn: async () => {
//       const res = await axiosSecure.get(`/carts?email=${user.email}`);
//       return res.data;
//     },
//   });

//   return [cart, refetch];
// };

// export default useCart;

import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const useCart = () => {
  const { user, loading } = useAuth();

  const fetchCart = async () => {
    const token = localStorage.getItem('access-token');
    const email = user?.email;
    if (token && email) {
      const response = await fetch(`http://localhost:5000/carts?email=${email}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Error fetching cart data');
      }
    }
    return [];
  };

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ['cart', user?.email],
    enabled: !loading,
    queryFn: fetchCart,
  });

  return [cart, refetch];
};

export default useCart;
