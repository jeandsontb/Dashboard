import { useQuery } from "react-query";
import { api } from "../api";

interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

type GetUserResponse = {
  totalCount: number;
  users: User[];
};

const getUsers = async (page: number): Promise<GetUserResponse> => {
  const { data, headers } = await api.get("/users", {
    params: {
      page,
    },
  });

  const totalCount = Number(headers["x-total-count"]);

  const users = data.users.map((user: any) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString("pt-BT", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    };
  });

  return { users, totalCount };
};

const useUsers = (page: number) => {
  return useQuery(["users", page], () => getUsers(page), {
    staleTime: 1000 * 60 * 10,
  });
};

export { getUsers, useUsers };
