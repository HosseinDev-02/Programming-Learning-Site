import withReactContent from 'sweetalert2-react-content'
import supabase from "./database";
import Swal from "sweetalert2";

async function getUsers() {
    const { data } = await supabase.from("users").select('*')
    return data
}
const MySwal = withReactContent(Swal)

export default getUsers
export { MySwal }

