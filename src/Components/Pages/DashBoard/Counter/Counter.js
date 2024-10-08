import {useState} from "react";
import SubTitle from "../../../Titles/SubTitle";
import Box from "./box";
import UserCourse from "./UserCourse";
import {userCourses as courses} from "../../../../data";

export default function Counter() {

    const [boxes, setBoxes] = useState([
        {id: 1, title: 'باقیمانده اشتراک', text: 'عضو ویژه نیستید', icon: '#cursor', color: 'rgb(6, 182, 212)'},
        {id: 2, title: 'در حال یادگیری', text: '7 دوره', icon: '#education', color: 'rgb(34, 197, 94)'},
        {id: 3, title: 'امتیازات', text: '85,480 ستاره', icon: '#star-fill', color: 'rgb(234, 179, 8)'},
        {id: 4, title: 'موجودی کیف پول', text: '1,079,000 تومان', icon: '#wallet-fill', color: 'rgb(139, 92, 246)'}
    ])

    const [userCourses, setUserCourses] = useState(courses)

    return (
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10'>
                {
                    boxes.map(box => (
                        <Box key={box.id} {...box}></Box>
                    ))
                }
            </div>
            <div>
                <SubTitle title='دوره های در حال یادگیری'></SubTitle>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
                    {
                        userCourses.map(course => (
                            <UserCourse key={course.id} {...course}></UserCourse>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}