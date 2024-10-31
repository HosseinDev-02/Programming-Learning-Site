import SiteStructure from "../../SiteStructure/SiteStructure";
import SectionTitle from "../../Titles/SectionTitle";
import { useEffect, useState } from "react";
import { articles as data, articleCategories, courseCategoriesFilter, coursesSortFilter } from "../../../data";
import Article from "../Home/Articles/Article";
import Accordion from "../../Accordion/Accordion";
import { getArticles } from "../../../Utils";

export default function ArticlesPage() {
    const [articles, setArticles] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [showCategories, setShowCategories] = useState(false);
    const [showFilteringModal, setShowFilteringModal] = useState(false);
    const [filtering, setFiltering] = useState("");
    const [filteringMenu, setFilteringMenu] = useState(false);
    const [categoriesFiltering, setCategoriesFiltering] = useState(courseCategoriesFilter)
    const [sortingArticles, setSortingArticles] = useState(coursesSortFilter)
    const [selectedSorting, setSelectedSorting] = useState("جدیدترین")

    useEffect(() => {
        getAllArticles();
    }, []);

    useEffect(() => {
        console.log(selectedCategory)
    }, [selectedCategory])

    const getAllArticles = async () => {
        const data = await getArticles();
        setArticles(data);
    };

    const filteringModalHandler = () => {
        setShowFilteringModal((prevState) => !prevState);
    };

    const sortingMenuHandler = (e) => {
        setSelectedSorting(e.currentTarget.value)
    }

    const categoriesSelection = event => {
        setSelectedCategory(event.currentTarget.value)
        event.currentTarget.setAttribute('checked', true)
    }

    const filteringCoursesHandler = (e) => {
        setFiltering(e.target.innerHTML);
    };

    return (
        <SiteStructure>
            <main className="py-5">
                <div className="container">
                    <div className="space-y-8">
                        <SectionTitle
                            lineHeight="1rem"
                            fontSize="12px"
                            title="مقالات آموزشی"
                            text="از گوشه و اطراف دنیای برنامه نویسی"
                        ></SectionTitle>
                        <div className="md:grid grid-cols-12 gap-5 items-start">
                            {/*  Courses Side Bar  */}
                            <div className="col-span-4 lg:col-span-3 hidden md:block md:sticky md:top-24">
                                <div>
                                    <span className="font-YekanBakh-Black text-title inline-block">
                                        تگ های محبوب
                                    </span>
                                    <div className="flex items-center gap-3 flex-wrap mt-5">
                                        <a
                                            className="flex hover:text-primary transition-colors items-center justify-center rounded-xl px-4 h-10 bg-secondary text-xs font-YekanBakh-Bold"
                                            href="#"
                                        >
                                            <span># لاراول</span>
                                        </a>
                                        <a
                                            className="flex hover:text-primary transition-colors items-center justify-center rounded-xl px-4 h-10 bg-secondary text-xs font-YekanBakh-Bold"
                                            href="#"
                                        >
                                            <span># پی_اچ_پی</span>
                                        </a>
                                        <a
                                            className="flex hover:text-primary transition-colors items-center justify-center rounded-xl px-4 h-10 bg-secondary text-xs font-YekanBakh-Bold"
                                            href="#"
                                        >
                                            <span># تلویند</span>
                                        </a>
                                        <a
                                            className="flex hover:text-primary transition-colors items-center justify-center rounded-xl px-4 h-10 bg-secondary text-xs font-YekanBakh-Bold"
                                            href="#"
                                        >
                                            <span># جاوااسکریپت</span>
                                        </a>
                                        <a
                                            className="flex hover:text-primary transition-colors items-center justify-center rounded-xl px-4 h-10 bg-secondary text-xs font-YekanBakh-Bold"
                                            href="#"
                                        >
                                            <span># فلاتر</span>
                                        </a>
                                        <a
                                            className="flex hover:text-primary transition-colors items-center justify-center rounded-xl px-4 h-10 bg-secondary text-xs font-YekanBakh-Bold"
                                            href="#"
                                        >
                                            <span># وردپرس</span>
                                        </a>
                                        <a
                                            className="flex hover:text-primary transition-colors items-center justify-center rounded-xl px-4 h-10 bg-secondary text-xs font-YekanBakh-Bold"
                                            href="#"
                                        >
                                            <span># متفرقه</span>
                                        </a>
                                        <a
                                            className="flex hover:text-primary transition-colors items-center justify-center rounded-xl px-4 h-10 bg-secondary text-xs font-YekanBakh-Bold"
                                            href="#"
                                        >
                                            <span># لاراول</span>
                                        </a>
                                        <a
                                            className="flex hover:text-primary transition-colors items-center justify-center rounded-xl px-4 h-10 bg-secondary text-xs font-YekanBakh-Bold"
                                            href="#"
                                        >
                                            <span># پی_اچ_پی</span>
                                        </a>
                                        <a
                                            className="flex hover:text-primary transition-colors items-center justify-center rounded-xl px-4 h-10 bg-secondary text-xs font-YekanBakh-Bold"
                                            href="#"
                                        >
                                            <span># تلویند</span>
                                        </a>
                                    </div>
                                </div>
                                {/*  Courses Accordion boxes  */}
                                <div className="divide-y divide-border">
                                    {/*  Courses Accordion Categories Filtering  */}
                                    <Accordion items={categoriesFiltering} value={selectedCategory} itemSelectionHandler={categoriesSelection} title='دسته بندی مقاله ها'></Accordion>
                                </div>
                            </div>
                            {/*  Courses Wrapper  */}
                            <div className="col-span-8 lg:col-span-9">
                                {/*  Courses Wrapper Header  */}
                                <div className="flex gap-3 items-center mb-3">
                                    <div className="flex items-center gap-1 h-11">
                                        <span>
                                            <svg className="w-5 h-5">
                                                <use href="#adjustments"></use>
                                            </svg>
                                        </span>
                                        <span className="text-xs font-YekanBakh-SemiBold hidden sm:inline">
                                            مرتب سازی :
                                        </span>
                                    </div>
                                    <Accordion position='absolute' title={selectedSorting} itemSelectionHandler={sortingMenuHandler} value={selectedSorting} items={coursesSortFilter}></Accordion>
                                    {/*  Courses Filtering Buttons  */}
                                    <button
                                        onClick={() =>
                                            setFilteringMenu(
                                                (prevState) => !prevState
                                            )
                                        }
                                        className="flex md:hidden items-center gap-1 h-11 px-4 text-title bg-secondary rounded-2xl"
                                    >
                                        <span>
                                            <svg className="w-5 h-5">
                                                <use href="#funnel"></use>
                                            </svg>
                                        </span>
                                        <span className="font-YekanBakh-SemiBold text-xs flex items-center gap-1">
                                            فیلتر
                                            <span className="hidden sm:inline">
                                                دوره ها
                                            </span>
                                        </span>
                                    </button>
                                    {/*  Courses Filtering Menu  */}
                                    <div
                                        style={
                                            filteringMenu
                                                ? { right: "0" }
                                                : { right: "-18rem" }
                                        }
                                        className="transition-all h-screen fixed top-0 bg-background rounded-tl-xl rounded-bl-xl w-72 z-50 p-4 md:hidden"
                                    >
                                        <div className="flex items-center justify-between mb-8 text-title">
                                            <span className="font-YekanBakh-Bold text-sm">
                                                فیلتر دوره ها
                                            </span>
                                            <span
                                                onClick={() =>
                                                    setFilteringMenu(
                                                        (prevState) =>
                                                            !prevState
                                                    )
                                                }
                                            >
                                                <svg className="w-6 h-6">
                                                    <use href="#x-mark"></use>
                                                </svg>
                                            </span>
                                        </div>

                                        {/*  Courses Accordion boxes  */}
                                        <div className="space-y-5">
                                            <div>
                                                <span className="font-YekanBakh-Black text-title">
                                                    تگ های محبوب
                                                </span>
                                                <div className="flex items-center gap-3 flex-wrap mt-5">
                                                    <a
                                                        className="flex hover:text-primary transition-colors items-center justify-center rounded-xl px-4 h-10 bg-secondary text-xs font-YekanBakh-Bold"
                                                        href="#"
                                                    >
                                                        <span># لاراول</span>
                                                    </a>
                                                    <a
                                                        className="flex hover:text-primary transition-colors items-center justify-center rounded-xl px-4 h-10 bg-secondary text-xs font-YekanBakh-Bold"
                                                        href="#"
                                                    >
                                                        <span># پی_اچ_پی</span>
                                                    </a>
                                                    <a
                                                        className="flex hover:text-primary transition-colors items-center justify-center rounded-xl px-4 h-10 bg-secondary text-xs font-YekanBakh-Bold"
                                                        href="#"
                                                    >
                                                        <span># تلویند</span>
                                                    </a>
                                                    <a
                                                        className="flex hover:text-primary transition-colors items-center justify-center rounded-xl px-4 h-10 bg-secondary text-xs font-YekanBakh-Bold"
                                                        href="#"
                                                    >
                                                        <span>
                                                            # جاوااسکریپت
                                                        </span>
                                                    </a>
                                                    <a
                                                        className="flex hover:text-primary transition-colors items-center justify-center rounded-xl px-4 h-10 bg-secondary text-xs font-YekanBakh-Bold"
                                                        href="#"
                                                    >
                                                        <span># فلاتر</span>
                                                    </a>
                                                    <a
                                                        className="flex hover:text-primary transition-colors items-center justify-center rounded-xl px-4 h-10 bg-secondary text-xs font-YekanBakh-Bold"
                                                        href="#"
                                                    >
                                                        <span># وردپرس</span>
                                                    </a>
                                                    <a
                                                        className="flex hover:text-primary transition-colors items-center justify-center rounded-xl px-4 h-10 bg-secondary text-xs font-YekanBakh-Bold"
                                                        href="#"
                                                    >
                                                        <span># متفرقه</span>
                                                    </a>
                                                    <a
                                                        className="flex hover:text-primary transition-colors items-center justify-center rounded-xl px-4 h-10 bg-secondary text-xs font-YekanBakh-Bold"
                                                        href="#"
                                                    >
                                                        <span># لاراول</span>
                                                    </a>
                                                    <a
                                                        className="flex hover:text-primary transition-colors items-center justify-center rounded-xl px-4 h-10 bg-secondary text-xs font-YekanBakh-Bold"
                                                        href="#"
                                                    >
                                                        <span># پی_اچ_پی</span>
                                                    </a>
                                                    <a
                                                        className="flex hover:text-primary transition-colors items-center justify-center rounded-xl px-4 h-10 bg-secondary text-xs font-YekanBakh-Bold"
                                                        href="#"
                                                    >
                                                        <span># تلویند</span>
                                                    </a>
                                                </div>
                                            </div>
                                            {/*  Courses Accordion Categories Filtering  */}
                                            <Accordion items={categoriesFiltering} value={selectedCategory} itemSelectionHandler={categoriesSelection} title='دسته بندی مقاله ها'></Accordion>
                                        </div>
                                    </div>
                                    {/*  Courses Filtering Menu Cover  */}
                                    <div
                                        style={
                                            filteringMenu
                                                ? {
                                                      visibility: "visible",
                                                      opacity: "1",
                                                  }
                                                : {}
                                        }
                                        onClick={() =>
                                            setFilteringMenu(
                                                (prevState) => !prevState
                                            )
                                        }
                                        className="fixed inset-0 bg-secondary/80 z-40 invisible opacity-0 transition-all"
                                    ></div>
                                </div>
                                {/*  Courses wrapper Content  */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                    {articles.map((article) => (
                                        <Article
                                            className={
                                                "!rounded-none shadow-lg"
                                            }
                                            roundedImg={false}
                                            key={article.article_id}
                                            {...article}
                                        ></Article>
                                    ))}
                                </div>
                            </div>
                            {/*  Courses Wrapper  */}
                        </div>
                    </div>
                </div>
            </main>
        </SiteStructure>
    );
}
