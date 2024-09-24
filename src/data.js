const data = [
    {
        id: 1,
        title: 'آموزش فلاتر از صفر',
        price: 1_990_000,
        costPrice: 1_250_000,
        isFree: false,
        time: 25,
        sections: 12,
        isCompleted: true,
        teacher: 'حسین رستمی',
        img: 'images/Courses/03.jpg',
        teacherImg: 'images/profile.jpeg'
    },
    {
        id: 2,
        title: 'آموزش پروژه محور ری اکت و نکست',
        price: 1_560_000,
        costPrice: 0,
        isFree: false,
        time: 32,
        sections: 24,
        isCompleted: true,
        teacher: 'حسین رستمی',
        img: 'images/Courses/01.jpg',
        teacherImg: 'images/profile.jpeg'
    },
    {
        id: 3,
        title: 'قدم صفر برنامه نویسی',
        price: 0,
        costPrice: 0,
        isFree: true,
        time: 8,
        sections: 4,
        isCompleted: true,
        teacher: 'حسین رستمی',
        img: 'images/Courses/02.jpg',
        teacherImg: 'images/profile.jpeg'
    }
]

const userCourses = [
    {
        id: 1,
        title: 'آموزش فلاتر از صفر',
        price: 1_990_000,
        costPrice: 1_250_000,
        isFree: false,
        time: 25,
        sections: 12,
        isCompleted: true,
        teacher: 'حسین رستمی',
        img: '../images/Courses/03.jpg',
        teacherImg: '../images/profile.jpeg',
        completed: '75%'
    },
    {
        id: 2,
        title: 'آموزش پروژه محور ری اکت و نکست',
        price: 1_560_000,
        costPrice: 0,
        isFree: false,
        time: 32,
        sections: 24,
        isCompleted: true,
        teacher: 'حسین رستمی',
        img: '../images/Courses/01.jpg',
        teacherImg: '../images/profile.jpeg',
        completed: '35%'
    },
    {
        id: 3,
        title: 'آموزش پایتون مقدماتی تا پیشرفته',
        price: 890_000,
        costPrice: 760_000,
        isFree: false,
        time: 89,
        sections: 45,
        isCompleted: true,
        teacher: 'حسین رستمی',
        img: '../images/Courses/02.jpg',
        teacherImg: '../images/profile.jpeg',
        completed: '50%'
    },
]

const userFavoritesCourses = [
    {
        id: 1,
        title: 'آموزش پروژه محور ری اکت و نکست',
        price: 1_560_000,
        costPrice: 890_000,
        isFree: false,
        time: 32,
        sections: 24,
        isCompleted: true,
        teacher: 'حسین رستمی',
        img: '../images/Courses/01.jpg',
        teacherImg: '../images/profile.jpeg'
    },
    {
        id: 2,
        title: 'قدم صفر برنامه نویسی',
        price: 0,
        costPrice: 0,
        isFree: true,
        time: 8,
        sections: 4,
        isCompleted: true,
        teacher: 'حسین رستمی',
        img: '../../images/Courses/02.jpg',
        teacherImg: '../../images/profile.jpeg'
    }
]

const articles = [
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
]

export default data
export {userCourses, userFavoritesCourses, articles}