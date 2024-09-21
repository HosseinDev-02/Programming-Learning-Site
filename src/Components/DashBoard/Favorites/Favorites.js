import SubTitle from "../../Titles/SubTitle";
import {useState} from "react";
import {userFavoritesCourses} from "../../../data";
import FavoriteCourse from "./FavoriteCourse";

export default function Favorites() {

    const [favoritesCourses, setFavoritesCourses] = useState(userFavoritesCourses)

    return (
        <div>
            <SubTitle title='دوره هایی که پسندیدید'/>
            <div className='divide-y divide-border mt-5'>
                {
                    favoritesCourses.map(course => (
                        <FavoriteCourse {...course} key={course.id}></FavoriteCourse>
                    ))
                }
            </div>
        </div>
    )
}