import withReactContent from 'sweetalert2-react-content'
import supabase from "./database";
import Swal from "sweetalert2";

export async function getUsers() {
    const { data } = await supabase.from("users").select('*')
    return data
}

export async function getCourses() {
    let {data: courses, error} = await supabase
        .from('courses')
        .select(`
            *,
    categories (
      *
    ),
    sessions (
        *
    )
  `)
    return courses
}

export async function getSessions() {
    const {data} = await supabase.from('sessions')
        .select(`
            *,
            courses(
                *
            )
        `)
    return data
}

export async function getCategories() {
    const {data} = await supabase.from('categories').select('*')
    return data
}

const MySwal = withReactContent(Swal)


export { MySwal }

