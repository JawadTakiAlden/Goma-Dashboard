import { useSnackbar } from "notistack";
import { request } from "./request";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useChangeStatusOfService = () => {
    const { enqueueSnackbar } = useSnackbar();
    const queryClient = useQueryClient()
    const changeStatusOfRequest = ({status , serviceID}) => {
      return request({
        url: `/services/${serviceID}`,
        method: "patch",
        data : {
            status
        },
      });
    };
  
    const mutation = useMutation({
      mutationKey: ["change-status-of-request"],
      mutationFn: changeStatusOfRequest,
      onSuccess: (data) => {
        queryClient.refetchQueries(['get-services'])
        enqueueSnackbar(`change applyed successfully`, {
          variant: "success",
        });
      },
      onError: (error) => {
        console.log(error);
        if (error.response) {
          enqueueSnackbar(error.response?.data?.message);
        }
      },
    });
  
    return mutation;
}

export default useChangeStatusOfService