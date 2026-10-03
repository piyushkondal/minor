import { Outlet, useNavigate } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminFooter from "./AdminFooter";
import AuthService from "../../../services/AuthService";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function AdminLayout(){
    const nav=useNavigate()
    let userType=AuthService.getUserType()
    useEffect(()=>{
        if(userType != 1){
            toast.warning("you are not allowed")
            nav("/login")
        }
    })
    return (
        <>
        <AdminHeader/>
        <Outlet/>
        <AdminFooter/>
        </>
    )
}