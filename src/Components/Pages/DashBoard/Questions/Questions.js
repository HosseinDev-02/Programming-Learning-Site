import SubTitle from "../../../Titles/SubTitle";
import {useState} from "react";
import UserQuestion from "./UserQuestion";

export default function Questions() {

    const [userQuestions, setUserQuestions] = useState([
        {
            id: 1,
            text: 'من این دوره رو خریدم و میخوام نکست هم بعدا یادبگیرم چون نیاز بیشتری دارم به آموزش های این دوره میشه بدون اینکه نکست رو ببینم این دوره رو ببینم ؟',
            title: 'دوره پروژه محور React و Next',
            img: '../images/Courses/04.jpg',
            status: true
        },
        {
            id: 2,
            text: 'من این دوره رو خریدم و میخوام نکست هم بعدا یادبگیرم چون نیاز بیشتری دارم به آموزش های این دوره میشه بدون اینکه نکست رو ببینم این دوره رو ببینم ؟',
            title: 'دوره پروژه محور React و Next',
            img: '../images/Courses/03.jpg',
            status: false
        },
    ])

    return (
        <div>
            <div className='my-5'>
                <SubTitle title='دیدگاه و پرسشهای شما'></SubTitle>
                <div className='overflow-x-auto'>
                    <ul className='bg-secondary rounded-full inline-flex items-center gap-5 border border-border p-1 mt-5'>
                        <li>
                            <button
                                className='flex items-center gap-2 h-10 rounded-full px-5 hover:bg-background hover:text-title transition-colors user-courses-menu__item--active'>
                            <span>
                                <svg className='w-5 h-5'>
                                    <use href='#education'></use>
                                </svg>
                            </span>
                                <span className='text-sm font-YekanBakh-Bold text-nowrap'>
                                دوره های آموزشی
                            </span>
                            </button>
                        </li>
                        <li>
                            <button
                                className='flex items-center gap-2 h-10 rounded-full px-5 hover:bg-background hover:text-title transition-colors'>
                            <span>
                                <svg className='w-5 h-5'>
                                    <use href='#document-text'></use>
                                </svg>
                            </span>
                                <span className='text-sm font-YekanBakh-Bold text-nowrap'>
                                مقالات آموزشی
                            </span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='divide-y divide-border'>
                {
                    userQuestions.map(question => (
                        <UserQuestion key={question.id} {...question}></UserQuestion>
                    ))
                }
            </div>
        </div>
    )
}