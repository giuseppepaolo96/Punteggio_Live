import { axiosInstance } from "utils";

export const checkUsername = async (username: string) => {
  return axiosInstance.get(
    `auth/authentication/check-username?username=${username}`
  );
};
