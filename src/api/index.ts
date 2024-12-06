import axios from "axios";
import {useQuery} from "@tanstack/react-query";

const baseUrl = 'https://674cad8354e1fca9290d4939.mockapi.io/api/todoapp-codedouterie';

// export const getAllProducts = async ()=> {
//   const response = await axios.get<Promise<IAllProductsResponse[]>>(baseUrl);
//
//   return response.data; // [{},{}]
//
// }

export const getAllProducts = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery({
    queryKey: ["getAllProducts"],
    queryFn: async () => {
      const response = await axios.get<IAllProductsResponse[]>(baseUrl);

      return response.data;



    },

  })
}

