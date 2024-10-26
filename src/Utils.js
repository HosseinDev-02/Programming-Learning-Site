import withReactContent from "sweetalert2-react-content";
import supabase from "./database";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

export async function getUsers() {
    const { data } = await supabase.from("users").select("*");
    return data;
}

export async function getCourses() {
    let { data: courses, error } = await supabase.from("courses").select(`
            *,
    categories (
      *
    ),
    sessions (
        *
    ),
    users (
        *
    )
  `);
    return courses;
}

export async function getMenuLinks() {
    const { data } = await supabase.from("menulinks").select(`
        *, 
        submenus (
            *
        )
    `);
    return data;
}

export async function getSubMenus() {
    const { data } = await supabase.from("submenus").select(`
        *,
        menus (
            *
        ),
        menulinks (
            *
        )
    `);
    return data;
}

export async function getMenus() {
    const { data } = await supabase.from("menus").select(`
        *,
        submenus (
            *,
            menulinks (
                *
            )
        )
    `);
    return data;
}

export async function getSessions() {
    const { data } = await supabase.from("sessions").select(`
            *,
            courses(
                *
            )
        `);
    return data;
}

export async function getCategories() {
    const { data } = await supabase.from("categories").select("*");
    return data;
}

export async function getArticles() {
    const { data } = await supabase.from("articles").select(`
    *,
    categories (
        *
    ),
    users (
        *
    )
    `);
    return data;
}

export async function getMainCourse(value) {
    const { data } = await supabase.from("courses").select(`
                *,
                sessions (
                    *
                ),
                categories (
                    *
                ),
                users (
                    *
                )
            `).eq('shortName', value)
            console.log(data)
            return data[0]
}

export default function userLogOutHandler() {
    localStorage.removeItem("token");
}

const MySwal = withReactContent(Swal);

export { MySwal };
