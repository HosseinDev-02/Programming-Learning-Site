export const courses = [
    {
        id: 1,
        title: 'آموزش فلاتر از صفر',
        price: 1_990_000,
        costPrice: 1_250_000,
        isFree: false,
        time: 25,
        sections: 12,
        isCompleted: false,
        teacher: 'حسین رستمی',
        img: 'images/Courses/03.jpg',
        teacherImg: 'images/profile.jpeg',
        category: 'اندروید',
        offer: 12
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
        teacherImg: 'images/profile.jpeg',
        category: 'فرانت اند',
        offer: 0
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
        teacherImg: 'images/profile.jpeg',
        category: 'فرانت اند',
        offer: 0
    }
]

const userBasket = [
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
        img: '/images/Courses/03.jpg',
        teacherImg: '/images/profile.jpeg',
        offer: 12
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
        img: '/images/Courses/01.jpg',
        teacherImg: '/images/profile.jpeg',
        offer: 12
    }, 
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
        title: 'تفاوت بک اند و فرانت اند',
        img: 'images/Courses/01.jpg',
        time: '20:00',
        writer: 'حسین رستمی',
        writerImg: '/images/profile.jpeg',
        category: 'فرانت اند'
    },
    {
        id: 2,
        title: 'چگونه به یک هکر تبدیل بشیم ؟',
        img: 'images/Courses/02.jpg',
        time: '15:00',
        writer: 'حسین رستمی',
        writerImg: '/images/profile.jpeg',
        category: 'امنیت'
    },
    {
        id: 3,
        title: 'بازار کار برنامه نویسی وب چگونه است ؟',
        img: 'images/Courses/03.jpg',
        time: '32:00',
        writer: 'حسین رستمی',
        writerImg: '/images/profile.jpeg',
        category: 'فرانت اند'
    },
    {
        id: 4,
        title: 'دیتابیس چیست ؟',
        img: 'images/Courses/04.jpg',
        time: '10:00',
        writer: 'حسین رستمی',
        writerImg: '/images/profile.jpeg',
        category: 'بک اند'
    },
]

const articleCategories = [
    {id: '1', title: 'فرانت اند'},
    {id: '2', title: 'بک اند'},
    {id: '3', title: 'امنیت'},
    {id: '4', title: 'طراحی سایت'},
    {id: '5', title: 'فلاتر'}
]

let years = [
    {id: 1, title: 1385},
    {id: 2, title: 1386},
    {id: 3, title: 1387},
    {id: 4, title: 1388},
    {id: 5, title: 1389},
    {id: 6, title: 1390},
    {id: 7, title: 1391},
    {id: 8, title: 1392},
    {id: 9, title: 1393},
    {id: 10, title: 1394},
    {id: 11, title: 1395},
    {id: 12, title: 1396},
    {id: 13, title: 1397},
    {id: 14, title: 1398},
    {id: 15, title: 1399},
    {id: 16, title: 1400}
]

let days = [
    {id: 1, title: 1},
    {id: 2, title: 2},
    {id: 3, title: 3},
    {id: 4, title: 4},
    {id: 5, title: 5},
    {id: 6, title: 6},
    {id: 7, title: 7},
    {id: 8, title: 8},
    {id: 9, title: 9},
    {id: 10, title: 10},
    {id: 11, title: 11},
    {id: 12, title: 12},
    {id: 13, title: 13},
    {id: 14, title: 14},
    {id: 15, title: 15},
    {id: 16, title: 16},
    {id: 17, title: 17},
    {id: 18, title: 18},
    {id: 19, title: 19},
    {id: 20, title: 20},
    {id: 21, title: 21},
    {id: 22, title: 22},
    {id: 23, title: 23},
    {id: 24, title: 24},
    {id: 25, title: 25},
    {id: 26, title: 26},
    {id: 27, title: 27},
    {id: 28, title: 28},
    {id: 29, title: 29},
    {id: 30, title: 30},
    {id: 31, title: 31},
]

let months = [
    {id: 1, title: 'فروردین'},
    {id: 2, title: 'اردیبهشت'},
    {id: 3, title: 'خرداد'},
    {id: 4, title: 'تبر'},
    {id: 5, title: 'مرداد'},
    {id: 6, title: 'شهریور'},
    {id: 7, title: 'مهر'},
    {id: 8, title: 'آبان'},
    {id: 9, title: 'آذر'},
    {id: 10, title: 'دی'},
    {id: 11, title: 'بهمن'},
    {id: 12, title: 'اسفند'},
]

let sidebarItems = [
    {
        id: 1,
        title: 'کاربران',
        links: [
            {title: 'کاربران', href: 'users'},
            {title: 'افزودن کاربر', href: 'user-form'}
        ]
    },
    {
        id: 2,
        title: 'دوره ها',
        links: [
            {title: 'دوره ها', href: 'courses'},
            {title: 'افزودن دوره', href: 'course-form'}
        ]
    },
    {
        id: 3,
        title: 'دسته بندی ها',
        links: [
            {title: 'دسته بندی ها', href: 'categories'},
            {title: 'افزودن دسته بندی', href: 'category-form'}
        ]
    },
    {
        id: 4,
        title: 'جلسات دوره ها',
        links: [
            {title: 'جلسات دوره ها', href: 'sessions'},
            {title: 'افزودن جلسه', href: 'session-form'}
        ]
    },
    {
        id: 5,
        title: 'منو ها',
        links: [
            {title: 'منو ها', href: 'menus'},
            {title: 'افزودن منو', href: 'menu-form'}
        ]
    },
    {
        id: 6,
        title: 'زیرمنو ها',
        links: [
            {title: 'زیرمنو ها', href: 'submenus'},
            {title: 'افزودن زیرمنو', href: 'submenu-form'}
        ]
    },
    {
        id: 7,
        title: 'لینک ها',
        links: [
            {title: 'لینک ها', href: 'menulinks'},
            {title: 'افزودن لینک', href: 'menulink-form'}
        ]
    },
    {
        id: 8,
        title: 'مقاله ها',
        links: [
            {title: 'مقاله ها', href: 'articles'},
            {title: 'افزودن مقاله', href: 'article-form'}
        ]
    },
]

let dashboardLinks = [
    {
        id: 1,
        title: 'پیشخوان',
        icon: '#counter',
        href: 'counter'
    },
    {
        id: 2,
        title: 'دوره ها',
        icon: '#education',
        href: 'courses'
    },
    {
        id: 3,
        title: 'علاقه مندی ها',
        icon: '#heart-outline',
        href: 'favorites'
    },
    {
        id: 4,
        title: 'مالی و اشتراک',
        icon: '#wallet',
        href: 'wallet'
    },
    {
        id: 5,
        title: 'دیدگاه و پرسش های شما',
        icon: '#comments-outline',
        href: 'questions'
    },
    {
        id: 6,
        title: 'اعلانات',
        icon: '#notification',
        href: 'notifications'
    },
    {
        id: 7,
        title: 'ویرایش پروفایل',
        icon: '#edit-profile',
        href: 'edit'
    },
]

const courseCategoriesFilter = [
    {id: 1, title: 'فرانت اند'},
    {id: 2, title: 'بک اند'},
    {id: 3, title: 'اندروید'}
]

const courseTypesFilter = [
    {id: 1, title: 'پولی'},
    {id: 2, title: 'رایگان'},
    {id: 3, title: 'همه'}
]

const coursesSortFilter = [
    {id: 1, title: 'جدیدترین'},
    {id: 2, title: 'پرفروش ترین'},
    {id: 3, title: 'گران ترین'},
    {id: 4, title: 'ارزان ترین'}
]



export {userCourses, userFavoritesCourses, articles, articleCategories, years, months, days, sidebarItems, dashboardLinks, courseCategoriesFilter, courseTypesFilter, coursesSortFilter, userBasket}