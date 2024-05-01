import { request } from './request'
import { useQuery } from '@tanstack/react-query'

const useGetServicesRequest = () => {
    const getServicesRequest = () => {
        return request({
            url : '/services'
        })
    }

    const query = useQuery({
        queryKey : ['get-services'],
        queryFn : getServicesRequest
    })

    return query
}

export default useGetServicesRequest