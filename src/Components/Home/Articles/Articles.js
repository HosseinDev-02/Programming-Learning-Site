import SectionTitle from "../../Titles/SectionTitle";
import Article from "./Article";
import {useState} from "react";

export default function Articles() {

    const [articles] = useState([
        {
            id: 1,
            title: 'دوره پروژه محور React و Next Js',
            img: 'images/Courses/01.jpg',
            time: 20,
            writer: 'حسین رستمی',
            writerImg: 'images/profile.jpeg',
            category: 'فرانت اند'
        },
        {
            id: 2,
            title: 'دوره پروژه محور React و Next Js',
            img: 'images/Courses/02.jpg',
            time: 15,
            writer: 'حسین رستمی',
            writerImg: 'images/profile.jpeg',
            category: 'امنیت'
        },
        {
            id: 3,
            title: 'دوره پروژه محور React و Next Js',
            img: 'images/Courses/03.jpg',
            time: 32,
            writer: 'حسین رستمی',
            writerImg: 'images/profile.jpeg',
            category: 'بک اند'
        },
        {
            id: 4,
            title: 'دوره پروژه محور React و Next Js',
            img: 'images/Courses/04.jpg',
            time: 10,
            writer: 'حسین رستمی',
            writerImg: 'images/profile.jpeg',
            category: 'اندروید'
        },
    ])

    return (
        <section>
            <div className="container">
                <div
                    className='bg-gradient-to-l from-secondary to-background rounded-2xl flex flex-col lg:flex-row items-center justify-between p-5 lg:p-3 xl:p-10 gap-10'>
                    <SectionTitle
                        text='نوشتن کار جالبیه که از هزاران سال همراه ما بوده و کمک کرده تا همیشه به روز باشیم، ما در نابغه فضای رو به شکلی آماده کردیم تا شما  بتونید ایده‌ها و مطالب جالب حوزه برنامه‌نویسی رو در اختیار هزاران برنامه‌نویس عضو نابغه قرار بدید.'
                        title='از گوشه و اطراف دنیای برنامه نویسی'
                        alignItems='start'
                        color='#6b7280'
                    >
                    </SectionTitle>
                    <div className='grid grid-cols-1 grid-rows-2 sm:grid-cols-2 gap-5'>
                        {
                            articles.map(article => {
                                return <Article key={article.id} {...article}></Article>
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}