import axios from "axios";

const client = axios.create({
  baseURL: "https://api.dev2.gomaplus.tech/api",
});

client.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      localStorage.removeItem("goma_admin_token");
      window.location.href = "/auth/login";
    }
  }
);

export const request = async ({ ...options }) => {
  client.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem("goma_admin_token")}`;
  return client(options).then((res) => res);
};
