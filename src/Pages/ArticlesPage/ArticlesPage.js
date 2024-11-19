import SiteStructure from "../../Components/SiteStructure/SiteStructure";
import SectionTitle from "../../Components/Titles/SectionTitle";
import { useEffect, useState } from "react";
import {
    articles as data,
    articleCategories,
    courseCategoriesFilter,
    coursesSortFilter,
} from "../../data";
import Article from "../Home/Articles/Article";
import Accordion from "../../Components/Accordion/Accordion";
import Cover from "../../Components/Cover/Cover";

export default function ArticlesPage() {
    const [articles, setArticles] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [showCategories, setShowCategories] = useState(false);
    const [showFilteringModal, setShowFilteringModal] = useState(false);
    const [filtering, setFiltering] = useState("");
    const [modalCategoriesShow, setModalCategoriesShow] = useState(false);
    const [indexActive, setIndexActive] = useState(null);
    const [filteringMenu, setFilteringMenu] = useState(false);
    const [categories, setCategories] = useState(courseCategoriesFilter);
    const [sortingItems, setSortingItems] = useState(coursesSortFilter);
    const [selectedSorting, setSelectedSorting] = useState("جدیدترین");
    const [popularItem, setPopularItem] = useState("");

    const setPopularItemHandler = (event) => {
        event.preventDefault();
        setPopularItem(event.currentTarget.dataset.key);
        console.log(popularItem);
    };

    useEffect(() => {
        setArticles(data);
    }, []);

    return (
        <>
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
                                <div
                                    className={`fixed h-screen top-0 bg-background rounded-tl-xl rounded-bl-xl w-72 z-50 p-4 md:rounded-none md:w-auto md:h-auto md:p-0 md:block col-span-4 lg:col-span-3 md:sticky md:top-24 transition-all ${
                                        filteringMenu ? "right-0" : "-right-72"
                                    }`}
                                >
                                    <div className="flex md:hidden items-center justify-between mb-8 text-title">
                                        <span className="font-YekanBakh-Bold text-sm">
                                            فیلتر دوره ها
                                        </span>
                                        <span
                                            onClick={() =>
                                                setFilteringMenu(
                                                    (prevState) => !prevState
                                                )
                                            }
                                        >
                                            <svg className="w-6 h-6">
                                                <use href="#x-mark"></use>
                                            </svg>
                                        </span>
                                    </div>
                                    <div>
                                        <span className="font-YekanBakh-Black text-title inline-block">
                                            تگ های محبوب
                                        </span>
                                        <div className="flex items-center gap-3 flex-wrap mt-5">
                                            <a
                                                className={`flex hover:text-primary transition-colors items-center justify-center rounded-xl px-4 h-10 bg-secondary text-xs font-YekanBakh-Bold ${
                                                    popularItem === "laravel" &&
                                                    "text-primary"
                                                }`}
                                                href="#"
                                                data-key="laravel"
                                                onClick={setPopularItemHandler}
                                            >
                                                <span># لاراول</span>
                                            </a>
                                            <a
                                                className={`flex hover:text-primary transition-colors items-center justify-center rounded-xl px-4 h-10 bg-secondary text-xs font-YekanBakh-Bold ${
                                                    popularItem === "php" &&
                                                    "text-primary"
                                                }`}
                                                href="#"
                                                data-key="php"
                                                onClick={setPopularItemHandler}
                                            >
                                                <span># پی_اچ_پی</span>
                                            </a>
                                            <a
                                                className={`flex hover:text-primary transition-colors items-center justify-center rounded-xl px-4 h-10 bg-secondary text-xs font-YekanBakh-Bold ${
                                                    popularItem ===
                                                        "tailwind" &&
                                                    "text-primary"
                                                }`}
                                                href="#"
                                                data-key="tailwind"
                                                onClick={setPopularItemHandler}
                                            >
                                                <span># تلویند</span>
                                            </a>
                                            <a
                                                className={`flex hover:text-primary transition-colors items-center justify-center rounded-xl px-4 h-10 bg-secondary text-xs font-YekanBakh-Bold ${
                                                    popularItem ===
                                                        "javascript" &&
                                                    "text-primary"
                                                }`}
                                                href="#"
                                                data-key="javascript"
                                                onClick={setPopularItemHandler}
                                            >
                                                <span># جاوااسکریپت</span>
                                            </a>
                                            <a
                                                className={`flex hover:text-primary transition-colors items-center justify-center rounded-xl px-4 h-10 bg-secondary text-xs font-YekanBakh-Bold ${
                                                    popularItem === "flutter" &&
                                                    "text-primary"
                                                }`}
                                                href="#"
                                                data-key="flutter"
                                                onClick={setPopularItemHandler}
                                            >
                                                <span># فلاتر</span>
                                            </a>
                                            <a
                                                className={`flex hover:text-primary transition-colors items-center justify-center rounded-xl px-4 h-10 bg-secondary text-xs font-YekanBakh-Bold ${
                                                    popularItem ===
                                                        "wordpress" &&
                                                    "text-primary"
                                                }`}
                                                href="#"
                                                data-key="wordpress"
                                                onClick={setPopularItemHandler}
                                            >
                                                <span># وردپرس</span>
                                            </a>
                                            <a
                                                className={`flex hover:text-primary transition-colors items-center justify-center rounded-xl px-4 h-10 bg-secondary text-xs font-YekanBakh-Bold ${
                                                    popularItem === "other" &&
                                                    "text-primary"
                                                }`}
                                                href="#"
                                                data-key="other"
                                                onClick={setPopularItemHandler}
                                            >
                                                <span># متفرقه</span>
                                            </a>
                                        </div>
                                    </div>
                                    {/*  Courses Accordion boxes  */}
                                    <Accordion
                                        icon="#grid-boxes-outline"
                                        title="دسته بندی مقاله ها"
                                    >
                                        <div
                                            className={`p-3 rounded-xl overflow-hidden bg-secondary space-y-2 left-0 right-0 top-full mt-2`}
                                        >
                                            {categories.map((item) => (
                                                <label
                                                    key={item.id}
                                                    className={`flex items-center gap-3 text-sm cursor-pointer xl:hover:text-primary transition-colors has-[:checked]:text-primary`}
                                                >
                                                    <input
                                                        value={item.title}
                                                        className="bg-border w-4 h-4 appearance-none rounded-full checked:bg-transparent transition-all border-primary border-0 checked:border-[5px]"
                                                        type="radio"
                                                        name="category"
                                                    />
                                                    <span>{item.title}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </Accordion>
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
                                        <Accordion title="مرتب سازی بر اساس">
                                            <div
                                                className={`p-3 rounded-xl overflow-hidden bg-secondary space-y-2 left-0 right-0 top-full z-50 absolute`}
                                            >
                                                {sortingItems.map((item) => (
                                                    <label
                                                        key={item.id}
                                                        className={`flex items-center gap-3 text-sm cursor-pointer xl:hover:text-primary transition-colors has-[:checked]:text-primary`}
                                                    >
                                                        <input
                                                            value={item.title}
                                                            className="bg-border w-4 h-4 appearance-none rounded-full checked:bg-transparent transition-all border-primary border-0 checked:border-[5px]"
                                                            type="radio"
                                                            name="category"
                                                        />
                                                        <span>
                                                            {item.title}
                                                        </span>
                                                    </label>
                                                ))}
                                            </div>
                                        </Accordion>

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
                                            <span className="hidden font-YekanBakh-SemiBold text-xs xs:flex items-center gap-1">
                                                فیلتر
                                                <span className="hidden sm:inline">
                                                    دوره ها
                                                </span>
                                            </span>
                                        </button>
                                    </div>
                                    {/*  Courses wrapper Content  */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                        {articles.map((article) => (
                                            <Article
                                                className={
                                                    "!rounded-none shadow-lg"
                                                }
                                                roundedImg={false}
                                                key={article.id}
                                                {...article}
                                            ></Article>
                                        ))}
                                    </div>
                                </div>
                                {/*  Courses Filtering Menu Cover  */}
                                {filteringMenu && (
                                    <Cover setElemStatus={setFilteringMenu} />
                                )}
                            </div>
                        </div>
                    </div>
                </main>
            </SiteStructure>
        </>
    );
}
