import { Outlet, useNavigate } from "react-router-dom"
import TeacherHeader from "./TeacherHeader"
import TeacherFooter from "./TeacherFooter"
import AuthService from "../../../services/AuthService"

export default function TeacherLayout(){
    return (
        <>
        <TeacherHeader/>
        <Outlet/>
        <TeacherFooter/>
        </>
    )
}