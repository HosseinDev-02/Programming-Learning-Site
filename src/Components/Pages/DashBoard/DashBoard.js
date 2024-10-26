import Counter from "./Counter/Counter";
import { useEffect, useState } from "react";
import { Link, Outlet, useMatch } from "react-router-dom";
import SiteStructure from "../../SiteStructure/SiteStructure";
import userLogOutHandler from "../../../Utils";
import routes from "../../../routes";

export default function DashBoard() {
    let match = useMatch("/:dashboard/*");
    const [activeTab, setActiveTab] = useState(match.params["*"]);
    const [routesArray, setRoutesArray] = useState(routes);
    const [dashboardRoutes, setDashboardRoutes] = useState([]);
    useEffect(() => {
        getDashboardRoutesArray();
    }, []);

    const getDashboardRoutesArray = () => {
        let mainRoutes = routes.find((route) => route.path === "/dashboard");
        setDashboardRoutes(mainRoutes.children);
    };
    return (
        <SiteStructure>
            <main className="pt-5">
                <div className="container">
                    <div className="md:grid md:grid-cols-12 md:items-start md:gap-5">
                        <div className="md:col-span-4 lg:col-span-3 mb-5 md:mb-0">
                            <div className="flex items-center gap-3">
                                <span className="block overflow-hidden w-10 h-10 rounded-full shrink-0">
                                    <img
                                        className="w-full h-full object-cover"
                                        src="./../images/profile.jpeg"
                                        alt=""
                                    />
                                </span>
                                <div className="flex flex-col gap-1 text-xs font-YekanBakh-SemiBold">
                                    <span className="line-clamp-1 text-xs">
                                        خوش آمدید
                                    </span>
                                    <span className="line-clamp-1 font-YekanBakh-Bold text-sm">
                                        حسین رستمی
                                    </span>
                                </div>
                            </div>
                            <ul className="flex flex-col gap-3 bg-secondary rounded-2xl p-5 mt-5">
                                {/* active class dashboard__item--active */}
                                <Link
                                    to="counter"
                                    className={`flex items-center gap-3 rounded-full px-5 bg-background hover:bg-primary hover:text-white transition-colors w-full h-11 cursor-pointer ${console.log(
                                        this
                                    )} dashboard__item--active`}
                                >
                                    <span>
                                        <svg className="w-5 h-5">
                                            <use href="#counter"></use>
                                        </svg>
                                    </span>
                                    <span className="text-xs font-YekanBakh-SemiBold line-clamp-1">
                                        پیشخوان
                                    </span>
                                </Link>
                                <Link
                                    to="courses"
                                    className="flex items-center gap-3 rounded-full px-5 bg-background hover:bg-primary hover:text-white transition-colors w-full h-11 cursor-pointer"
                                >
                                    <span>
                                        <svg className="w-5 h-5">
                                            <use href="#education-outline"></use>
                                        </svg>
                                    </span>
                                    <span className="text-xs font-YekanBakh-SemiBold line-clamp-1">
                                        دوره ها
                                    </span>
                                </Link>
                                <Link
                                    to="favorites"
                                    className="flex items-center gap-3 rounded-full px-5 bg-background hover:bg-primary hover:text-white transition-colors w-full h-11 cursor-pointer"
                                >
                                    <span>
                                        <svg className="w-5 h-5">
                                            <use href="#heart-outline"></use>
                                        </svg>
                                    </span>
                                    <span className="text-xs font-YekanBakh-SemiBold line-clamp-1">
                                        علاقه مندی ها
                                    </span>
                                </Link>
                                <Link
                                    to="wallet"
                                    className="flex items-center gap-3 rounded-full px-5 bg-background hover:bg-primary hover:text-white transition-colors w-full h-11 cursor-pointer"
                                >
                                    <span>
                                        <svg className="w-5 h-5">
                                            <use href="#wallet"></use>
                                        </svg>
                                    </span>
                                    <span className="text-xs font-YekanBakh-SemiBold line-clamp-1">
                                        مالی و اشتراک
                                    </span>
                                </Link>
                                <Link
                                    to="questions"
                                    className="flex items-center gap-3 rounded-full px-5 bg-background hover:bg-primary hover:text-white transition-colors w-full h-11 cursor-pointer"
                                >
                                    <span>
                                        <svg className="w-5 h-5">
                                            <use href="#comments-outline"></use>
                                        </svg>
                                    </span>
                                    <span className="text-xs font-YekanBakh-SemiBold line-clamp-1">
                                        دیدگاه و پرسش های شما
                                    </span>
                                </Link>
                                <Link
                                    to="notifications"
                                    className={`flex items-center gap-3 rounded-full px-5 bg-background hover:bg-primary hover:text-white transition-colors w-full h-11 cursor-pointer`}
                                >
                                    <span>
                                        <svg className="w-5 h-5">
                                            <use href="#notification"></use>
                                        </svg>
                                    </span>
                                    <span className="text-xs font-YekanBakh-SemiBold line-clamp-1">
                                        اعلانات
                                    </span>
                                </Link>
                                <Link
                                    to="edit"
                                    className={`flex items-center gap-3 rounded-full px-5 bg-background hover:bg-primary hover:text-white transition-colors w-full h-11 cursor-pointer`}
                                >
                                    <span>
                                        <svg className="w-5 h-5">
                                            <use href="#edit-profile"></use>
                                        </svg>
                                    </span>
                                    <span className="text-xs font-YekanBakh-SemiBold line-clamp-1">
                                        ویرایش پروفایل
                                    </span>
                                </Link>
                                <a
                                    onClick={(event) => {
                                        // event.preventDefault()
                                        userLogOutHandler();
                                    }}
                                    href="/login"
                                    className="flex items-center gap-3 rounded-full px-5 bg-background hover:bg-red-500 text-red-500 hover:text-white transition-colors w-full h-11 cursor-pointer"
                                >
                                    <span>
                                        <svg className="w-5 h-5">
                                            <use href="#logout"></use>
                                        </svg>
                                    </span>
                                    <span className="text-xs font-YekanBakh-SemiBold line-clamp-1">
                                        خروج از حساب
                                    </span>
                                </a>
                            </ul>
                        </div>
                        <div className="md:col-span-8 lg:col-span-9">
                            {<Outlet />}
                        </div>
                    </div>
                </div>
            </main>
        </SiteStructure>
    );
}
