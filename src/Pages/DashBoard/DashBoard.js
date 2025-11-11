import { useEffect, useState } from "react";
import { Link, Outlet, useMatch } from "react-router-dom";
import SiteStructure from "../../Components/SiteStructure/SiteStructure";
import { dashboardLinks } from "../../data";

export default function DashBoard() {
    const match = useMatch("/:dashboard/*");
    const [pathname, setPathname] = useState(match.params["*"]);
    const [activeTab, setActiveTab] = useState(match.params["*"]);

    useEffect(() => {
        setActiveTab(match.params["*"]);
    }, [match]);

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
                                {dashboardLinks.map((link) => (
                                    <Link
                                        key={link.id}
                                        to={link.href}
                                        className={`flex items-center gap-3 rounded-full px-5 bg-background hover:bg-primary hover:text-white transition-colors w-full h-11 cursor-pointer ${
                                            activeTab === link.href
                                                ? "dashboard__item--active"
                                                : ""
                                        }`}
                                    >
                                        <span>
                                            <svg className="w-5 h-5">
                                                <use href={link.icon}></use>
                                            </svg>
                                        </span>
                                        <span className="text-xs font-YekanBakh-SemiBold line-clamp-1">
                                            {link.title}
                                        </span>
                                    </Link>
                                ))}
                                <Link
                                    to="/login"
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
                                </Link>
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
