import { useMutation } from "@tanstack/react-query";
import { request } from "./request";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router";

const useLogin = () => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate()
  const loginRequest = (data) => {
    return request({
      url: "/login",
      method: "post",
      data,
    });
  };

  const mutation = useMutation({
    mutationKey: ["login"],
    mutationFn: loginRequest,
    onSuccess: (data) => {
      localStorage.setItem('goma_admin_token' , data?.data?.access_token);
      enqueueSnackbar(`welcome back mr ${data?.data?.user?.name || "Admin"}`, {
        variant: "success",
      });
      navigate('/dashboard')
    },
    onError: (error) => {
      console.log(error);
      if (error.response) {
        enqueueSnackbar(error.response?.data?.message);
      }
    },
  });

  return mutation;
};

export default useLogin;
