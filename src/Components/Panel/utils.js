import supabase from "../../database";

async function getUsers() {
    const { data } = await supabase.from("users").select('*')
    return data
}



export default getUsers