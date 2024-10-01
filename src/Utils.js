import withReactContent from 'sweetalert2-react-content'
import supabase from "./database";
import Swal from "sweetalert2";
import {useParams} from "react-router-dom";

export async function getUsers() {
    const { data } = await supabase.from("users").select('*')
    return data
}

export async function getCourses() {
    const {data} = await supabase.from('courses').select('*')
   return data
}

const MySwal = withReactContent(Swal)


export { MySwal }
