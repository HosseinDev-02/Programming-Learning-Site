import {useEffect, useState} from "react";
import SubTitle from "../../../Components/Titles/SubTitle";
import Box from "./box";
import UserCourse from "./UserCourse";
import {userBasket as data} from "../../../data";

export default function Counter() {

    const [boxes, setBoxes] = useState([
        {id: 1, title: 'باقیمانده اشتراک', text: 'عضو ویژه نیستید', icon: '#cursor', color: 'rgb(6, 182, 212)'},
        {id: 2, title: 'در حال یادگیری', text: '7 دوره', icon: '#education', color: 'rgb(34, 197, 94)'},
        {id: 3, title: 'امتیازات', text: '85,480 ستاره', icon: '#star-fill', color: 'rgb(234, 179, 8)'},
        {id: 4, title: 'موجودی کیف پول', text: '1,079,000 تومان', icon: '#wallet-fill', color: 'rgb(139, 92, 246)'}
    ])

    const [courses, setCourses] = useState([])

    useEffect(() => {
        setCourses(data)
    }, [])

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
                        courses.length ? (
                            courses.map(order => (
                                <UserCourse key={order.id} {...order}></UserCourse>
                            ))
                        ) : (
                            ''
                        )
                    }
                </div>
            </div>
        </div>
    )
}