import SectionTitle from "../../Components/Titles/SectionTitle";
import { useEffect, useState } from "react";
import Course from "../../Components/Course/Course";
import data, { courseCategoriesFilter, courseTypesFilter, coursesSortFilter } from "../../data";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import SiteStructure from "../../Components/SiteStructure/SiteStructure";
import { getCourses } from "../../Utils";
import Accordion from "../../Components/Accordion/Accordion";

export default function CoursesPage() {
    const [courses, setCourses] = useState([]);
    const [started, setStarted] = useState(false);
    const [showFilteringModal, setShowFilteringModal] = useState(false);
    const [filtering, setFiltering] = useState("");
    const [filteringMenu, setFilteringMenu] = useState(false);
    const [categoriesFiltering, setCategoriesFiltering] = useState(
        courseCategoriesFilter
    );
    const [typesFiltering, setTypesFiltering] = useState(courseTypesFilter);
    const [sortingCourses, setSortingCourses] = useState(coursesSortFilter)
    const [selectedSorting, setSelectedSorting] = useState("جدیدترین")
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedType, setSelectedType] = useState("");

    useEffect(() => {
        setCoursesState();
    }, []);

    async function setCoursesState() {
        const data = await getCourses();
        setCourses(data);
        console.log(data)
    }

    const typesMenuHandler = (e) => {
        setSelectedType(e.currentTarget.value);
    };

    const categoriesMenuHandler = (e) => {
        setSelectedCategory(e.currentTarget.value);
    };

    const sortingMenuHandler = (e) => {
        setSelectedSorting(e.currentTarget.value)
    }

    const filteringModalHandler = () => {
        setShowFilteringModal((prevState) => !prevState);
    };

    const filteringCoursesHandler = (e) => {
        setFiltering(e.target.innerHTML);
    };

    return (
        <SiteStructure>
            <main className="py-5">
                <div className="container">
                    <div className="space-y-8">
                        <SectionHeader>
                            <SectionTitle
                                lineHeight="1rem"
                                fontSize="12px"
                                title="دوره های آموزشی"
                                text="دوره ببین، تمرین کن، برنامه نویس شو"
                            ></SectionTitle>
                        </SectionHeader>
                        <div className="md:grid grid-cols-12 gap-5 items-start">
                            {/*  Courses Side Bar  */}
                            <div className="col-span-4 lg:col-span-3 hidden md:block md:sticky md:top-24">
                                {/*  Courses Search Box  */}
                                <div className="mb-3">
                                    <span className="text-sm text-title font-YekanBakh-Bold inline-block mb-3">
                                        جستجو دوره
                                    </span>
                                    <form
                                        className="flex items-center px-3 bg-secondary rounded-xl overflow-hidden h-11"
                                        action="#"
                                    >
                                        <input
                                            placeholder="عنوان دوره ..."
                                            className="bg-transparent outline-none w-full h-full text-sm"
                                            type="text"
                                        />
                                        <span className="shrink-0">
                                            <svg className="w-5 h-5">
                                                <use href="#search"></use>
                                            </svg>
                                        </span>
                                    </form>
                                </div>
                                {/*  Courses Begin CheckBox  */}
                                <label className="flex items-center justify-between bg-secondary rounded-xl overflow-hidden h-11 px-3 mb-3">
                                    <span className="text-title font-YekanBakh-Bold text-sm">
                                        درحال برگزاری
                                    </span>
                                    <input
                                        onChange={() =>
                                            setStarted(
                                                (prevState) => !prevState
                                            )
                                        }
                                        className="peer sr-only"
                                        type="checkbox"
                                    />
                                    <div className="inline-block cursor-pointer border-2 border-zinc-200 dark:border-[#1d4ed8] h-5 w-11 bg-white dark:bg-[#1d4ed8] relative rounded-xl before:w-3 before:h-3 before:bg-zinc-200 before:absolute before:left-0 before:transition-all peer-checked:border-primary before:translate-x-[2px] before:rounded-full before:top-0 before:bottom-0 before:my-auto peer-checked:bg-primary peer-checked:before:bg-background peer-checked:before:translate-x-[26px] transition-all"></div>
                                </label>
                                {/*  Courses Accordion boxes  */}
                                <div className="divide-y divide-border">
                                    {/*  Courses Accordion Free Or Not Free Filtering  */}
                                    <Accordion
                                        itemSelectionHandler={typesMenuHandler}
                                        items={typesFiltering}
                                        title="نوع دوره"
                                        value={selectedType}
                                    ></Accordion>
                                    {/*  Courses Accordion Categories Filtering  */}
                                    <Accordion
                                        value={selectedCategory}
                                        itemSelectionHandler={
                                            categoriesMenuHandler
                                        }
                                        items={categoriesFiltering}
                                        title="دسته بندی ها"
                                    ></Accordion>
                                </div>
                            </div>
                            {/*  Courses Wrapper  */}
                            <div className="col-span-8 lg:col-span-9">
                                {/*  Courses Wrapper Header  */}
                                <div className="flex gap-3 items-center mb-3">
                                    <div className="flex items-center gap-1">
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
                                        {/*  Courses Search Box  */}
                                        <div className="mb-3">
                                            <span className="text-sm text-title font-YekanBakh-Bold inline-block mb-3">
                                                جستجو دوره
                                            </span>
                                            <form
                                                className="flex items-center px-3 bg-secondary rounded-xl overflow-hidden h-10"
                                                action="#"
                                            >
                                                <input
                                                    placeholder="عنوان دوره ..."
                                                    className="bg-transparent outline-none w-full h-full text-sm"
                                                    type="text"
                                                />
                                                <span className="shrink-0">
                                                    <svg className="w-5 h-5">
                                                        <use href="#search"></use>
                                                    </svg>
                                                </span>
                                            </form>
                                        </div>
                                        {/*  Courses Begin CheckBox  */}
                                        <label className="flex items-center justify-between bg-secondary rounded-xl overflow-hidden h-10 px-3 mb-3">
                                            <span className="text-title font-YekanBakh-Bold text-sm">
                                                درحال برگزاری
                                            </span>
                                            <input
                                                onChange={() =>
                                                    setStarted(
                                                        (prevState) =>
                                                            !prevState
                                                    )
                                                }
                                                className="peer sr-only"
                                                type="checkbox"
                                            />
                                            <div className="inline-block cursor-pointer border-2 border-zinc-200 dark:border-[#1d4ed8] h-5 w-11 bg-white dark:bg-[#1d4ed8] relative rounded-xl before:w-3 before:h-3 before:bg-zinc-200 before:absolute before:left-0 before:transition-all peer-checked:border-primary before:translate-x-[2px] before:rounded-full before:top-0 before:bottom-0 before:my-auto peer-checked:bg-primary peer-checked:before:bg-background peer-checked:before:translate-x-[26px] transition-all"></div>
                                        </label>
                                        {/*  Courses Accordion boxes  */}
                                        <div className="divide-y divide-border">
                                            {/*  Courses Accordion Free Or Not Free Filtering  */}
                                            <Accordion
                                                itemSelectionHandler={
                                                    typesMenuHandler
                                                }
                                                items={typesFiltering}
                                                title="نوع دوره"
                                            ></Accordion>
                                            {/*  Courses Accordion Categories Filtering  */}
                                            <Accordion
                                                itemSelectionHandler={
                                                    categoriesMenuHandler
                                                }
                                                items={categoriesFiltering}
                                                title="دسته بندی ها"
                                            ></Accordion>
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
                                    {courses.map((course) => (
                                        <Course
                                            key={course.course_id}
                                            {...course}
                                        ></Course>
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
