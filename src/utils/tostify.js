import { toast } from "react-toastify"

export const handleSuccess = (message) => {
    toast.success(message , {
        position : "top-right",
        autoClose : 1000,
        closeOnClick : true,
        pauseOnHover : true
    })
}


export const handleError = (message) => {
    toast.error(message , {
        position : "top-right",
        autoClose : 1000,
        closeOnClick : true,
        pauseOnHover : true
    })
}