import Logo from "../Logo/Logo";
import { useEffect, useLayoutEffect, useState } from "react";
import RoundButton from "../Buttons/RoundButton";
import { getMenus, getUserOrders, getUsers } from "../../Utils";
import PrimaryButton from "../Buttons/PrimaryButton";
import { useNavigate } from "react-router-dom";

function Header() {
    let localStorageValue = localStorage.getItem("theme");
    const [mobileMenuShow, setMobileMenuShow] = useState(false);
    const [searchModalShow, setSearchModalShow] = useState(false);
    const [darkMode, setDarkMode] = useState(localStorageValue);
    const [showMobileCategoryMenu, setShowMobileCategoryMenu] = useState(false);
    const [showMobileCategorySubMenu, setShowMobileCategorySubMenu] =
        useState(false);
    const [mobileMenuSelected, setMobileMenuSelected] = useState("");
    const [mobileSubmenuSelected, setMobileSubmenuSelected] = useState("");
    const [userProfileShow, setUserProfileShow] = useState(false);
    const [mainUserId, setMainUserId] = useState(localStorage.getItem("token"));
    const [isLogin, setIsLogin] = useState(false);
    const [mainUser, setMainUser] = useState({});
    const [menus, setMenus] = useState([]);
    const [ordersCount, setOrdersCount] = useState(null);
    const navigate = useNavigate();

    useLayoutEffect(() => {
        getAllMenus();
        checkUserLogin();
        getOrdersCount();
    }, []);

    async function getAllMenus() {
        const data = await getMenus();
        setMenus(data);
    }

    const getOrdersCount = async () => {
        const data = await getUserOrders();
        if(data) {
            setOrdersCount(data.length);
            console.log(data.length);
        }
    };

    const checkUserLogin = async () => {
        let allUsers = await getUsers();
        let isUserLogin = allUsers.some((user) => {
            if (user.user_id === mainUserId) {
                setMainUser(user);
                return true;
            }
        });
        setIsLogin(isUserLogin);
    };

    const themeHandler = () => {
        if (darkMode === "dark") {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
        setDarkMode((prevStat) => {
            if (prevStat === "dark") {
                return "light";
            } else {
                return "dark";
            }
        });
    };

    const userLogOutHandler = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <>
            <header className="h-20 border-b border-b-border backdrop-blur-xl sticky top-0 left-0 right-0 flex items-center justify-center bg-background/80 z-30">
                <div className="container">
                    <nav className="flex items-center justify-between relative">
                        {/* header right side */}
                        <div className="flex items-center gap-3 lg:gap-8">
                            {/* header mobile menu btn */}
                            <RoundButton
                                className={"flex lg:hidden"}
                                clickEvent={() => setMobileMenuShow(true)}
                                icon="#bars-3"
                            ></RoundButton>
                            {/* header logo */}
                            <Logo></Logo>
                            {/* header menu */}
                            <ul className="hidden lg:flex items-center gap-5 font-YekanBakh-SemiBold text-sm child-hover:text-title child:transition-colors">
                                {menus.map((menu) => (
                                    <li
                                        key={menu.menu_id}
                                        className="group/categories"
                                    >
                                        <a
                                            className="flex items-center gap-1"
                                            href={menu.link}
                                        >
                                            <span className="">
                                                {menu.title}
                                            </span>
                                            {menu.submenus.length ? (
                                                <svg className="w-5 h-5 group-hover/categories:rotate-180 transition-all">
                                                    <use href="#chevron-down"></use>
                                                </svg>
                                            ) : (
                                                ``
                                            )}
                                        </a>
                                        {/* header categories menu */}
                                        {menu.submenus.length ? (
                                            <ul className="invisible shadow opacity-0 group-hover/categories:visible group-hover/categories:opacity-100 absolute top-full bg-background border border-border w-56 flex flex-col gap-1 child:leading-5 delay-75 transition-all shadow-black/5 text-title z-20">
                                                {menu.submenus.map(
                                                    (submenu) => (
                                                        <li
                                                            key={
                                                                submenu.submenu_id
                                                            }
                                                            className="group/subcategories"
                                                        >
                                                            <a
                                                                className="flex items-center justify-between p-3 hover:text-primary transition-colors"
                                                                href={
                                                                    submenu.link
                                                                }
                                                            >
                                                                <span>
                                                                    {
                                                                        submenu.title
                                                                    }
                                                                </span>
                                                                {submenu
                                                                    .menulinks
                                                                    .length ? (
                                                                    <svg className="w-5 h-5">
                                                                        <use href="#chevron-left"></use>
                                                                    </svg>
                                                                ) : (
                                                                    ``
                                                                )}
                                                            </a>
                                                            {/* header categories submenu */}
                                                            {submenu.menulinks
                                                                .length ? (
                                                                <ul className="invisible shadow opacity-0 group-hover/subcategories:visible group-hover/subcategories:opacity-100 transition-all delay-75 flex flex-col flex-wrap space-y-3 px-3 pt-8 pb-3 bg-background border border-border w-96 absolute right-full -top-px -bottom-px text-caption text-sm">
                                                                    <li className="absolute top-2 font-YekanBakh-Bold pointer-events-none">
                                                                        محبوب
                                                                        ترین
                                                                        موضوعات
                                                                    </li>
                                                                    {submenu.menulinks.map(
                                                                        (
                                                                            menulink
                                                                        ) => (
                                                                            <li
                                                                                key={
                                                                                    menulink.menulink_id
                                                                                }
                                                                                className="w-1/2"
                                                                            >
                                                                                <a
                                                                                    className='relative before:w-1 before:h-1 before:bg-gray-600 before:rounded-full before:content-[""] before:inline-block flex items-center gap-2 before:right-0 before:top-0 before:bottom-0 before:my-auto hover:text-primary transition-colors hover:before:bg-primary'
                                                                                    href={
                                                                                        menulink.link
                                                                                    }
                                                                                >
                                                                                    {
                                                                                        menulink.title
                                                                                    }
                                                                                </a>
                                                                            </li>
                                                                        )
                                                                    )}
                                                                </ul>
                                                            ) : (
                                                                ``
                                                            )}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        ) : (
                                            ``
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* header left side */}
                        <div className="flex items-center gap-3 md:gap-5">
                            {/* header search btn */}
                            <RoundButton
                                className={"hidden lg:flex cursor-pointer"}
                                clickEvent={() => setSearchModalShow(true)}
                                icon="#search"
                            ></RoundButton>
                            {/* modal search wrapper */}
                            <div
                                style={searchModalShow ? { top: "0" } : {}}
                                id="header-search-modal"
                                className="transition-all fixed left-0 right-0 -top-20 bg-background z-50 hidden lg:flex items-center justify-center h-20"
                            >
                                <div className="container">
                                    <div className="flex items-center justify-between gap-5">
                                        <form
                                            className="block w-full h-10"
                                            action="#"
                                        >
                                            <input
                                                className="placeholder:text-caption w-full h-full outline-none text-title bg-transparent"
                                                placeholder="نام دوره،مقاله و یا دسته بندی را وارد نمایید.."
                                                type="text"
                                            />
                                        </form>
                                        <RoundButton
                                            className="w-9 h-9 shrink-0 cursor-pointer"
                                            icon="#x-mark"
                                            clickEvent={() =>
                                                setSearchModalShow(false)
                                            }
                                        ></RoundButton>
                                    </div>
                                </div>
                            </div>
                            {/* header change theme btn */}
                            {darkMode === "dark" ? (
                                <RoundButton
                                    className={"hidden lg:flex cursor-pointer"}
                                    clickEvent={themeHandler}
                                    icon="#sun"
                                ></RoundButton>
                            ) : (
                                <RoundButton
                                    className={"hidden lg:flex cursor-pointer"}
                                    clickEvent={themeHandler}
                                    icon="#moon"
                                ></RoundButton>
                            )}
                            {/* header basket btn */}
                            {ordersCount ? (
                                <RoundButton
                                    link={true}
                                    href="/orders"
                                    count={ordersCount}
                                    icon="#bag"
                                ></RoundButton>
                            ) : (
                                <RoundButton
                                    link={true}
                                    href="/orders"
                                    icon="#bag"
                                ></RoundButton>
                            )}
                            {/* header user profile btn */}
                            {isLogin ? (
                                <div className="group/profile">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setUserProfileShow(
                                                (prevState) => !prevState
                                            )
                                        }
                                        className="flex items-center gap-3 cursor-pointer"
                                    >
                                        <RoundButton icon="#user"></RoundButton>
                                        <span className="hidden xs:flex flex-col gap-1 items-start text-xs pointer-events-none">
                                            <span className="text-title font-YekanBakh-SemiBold">
                                                {mainUser.name}
                                            </span>
                                            <span className="font-YekanBakh-SemiBold">
                                                خوش آمـــدید
                                            </span>
                                        </span>
                                        <svg
                                            style={
                                                userProfileShow
                                                    ? {
                                                          transform:
                                                              "rotate(180deg)",
                                                      }
                                                    : {}
                                            }
                                            className="w-5 h-5 hidden xs:block transition-all"
                                        >
                                            <use href="#chevron-down"></use>
                                        </svg>
                                    </button>
                                    {/* header user profile menu */}
                                    <div
                                        id="user-profile"
                                        style={
                                            userProfileShow
                                                ? {
                                                      visibility: "visible",
                                                      opacity: "1",
                                                  }
                                                : {}
                                        }
                                        className="rounded-xl shadow border border-border absolute top-full left-0 w-56 p-3 flex flex-col bg-background invisible opacity-0 transition-all delay-75 child:transition-colors font-YekanBakh-SemiBold text-xs text-title"
                                    >
                                        <a
                                            className="hover:text-primary flex items-center gap-2 py-2 px-3"
                                            href="/dashboard/counter"
                                        >
                                            <span>
                                                <svg className="w-5 h-5">
                                                    <use href="#stars"></use>
                                                </svg>
                                            </span>
                                            <span>مشاهده پروفایل</span>
                                        </a>
                                        <a
                                            className="hover:text-primary flex items-center gap-2 py-2 px-3"
                                            href="#"
                                        >
                                            <span>
                                                <svg className="w-5 h-5">
                                                    <use href="#education-outline"></use>
                                                </svg>
                                            </span>
                                            <span>دوره ها</span>
                                        </a>
                                        <a
                                            className="hover:text-primary flex items-center gap-2 py-2 px-3"
                                            href="#"
                                        >
                                            <span>
                                                <svg className="w-5 h-5">
                                                    <use href="#money"></use>
                                                </svg>
                                            </span>
                                            <span>مالی</span>
                                        </a>
                                        <a
                                            className="hover:text-primary flex items-center gap-2 py-2 px-3"
                                            href="#"
                                        >
                                            <span>
                                                <svg className="w-5 h-5">
                                                    <use href="#comment"></use>
                                                </svg>
                                            </span>
                                            <span>پرسش و دیدگاه ها</span>
                                        </a>
                                        <a
                                            onClick={() => userLogOutHandler()}
                                            className="hover:text-red-700 text-red-500 flex items-center gap-2 py-2 px-3"
                                            href="#"
                                        >
                                            <span>
                                                <svg className="w-5 h-5">
                                                    <use href="#logout"></use>
                                                </svg>
                                            </span>
                                            <span>خروج از حساب</span>
                                        </a>
                                    </div>
                                </div>
                            ) : (
                                <RoundButton
                                    link={true}
                                    href="/register"
                                    icon="#login"
                                ></RoundButton>
                            )}
                        </div>
                    </nav>
                </div>
            </header>
            {/* Mobile Menu */}
            <div
                id="mobile-menu"
                className={`lg:hidden transition-all h-screen overflow-y-auto fixed top-0 bg-background rounded-tl-xl rounded-bl-xl w-72 xs:w-80 p-4 space-y-5 z-50 ${
                    mobileMenuShow ? "right-0" : "-right-72 xs:-right-80"
                }`}
            >
                {/*  mobile menu header  */}
                <div className="flex items-center justify-between mb-8">
                    <Logo></Logo>
                    <span
                        onClick={() => setMobileMenuShow(false)}
                        className="text-title"
                    >
                        <svg className="w-6 h-6">
                            <use href="#x-mark"></use>
                        </svg>
                    </span>
                </div>
                {/*  mobile search box  */}
                <form
                    action="#"
                    className="rounded-xl flex items-center bg-secondary relative h-10 px-12 py-2 border border-border"
                >
                    <span className="absolute right-4 top-0 bottom-0 m-auto flex items-center justify-center text-title">
                        <svg className="w-5 h-5">
                            <use href="#search"></use>
                        </svg>
                    </span>
                    <input
                        placeholder="دنبال چی میگردی ؟"
                        className="w-full h-full bg-transparent outline-none text-title placeholder:text-caption text-sm"
                        type="text"
                    />
                </form>
                {/*  mobile change them wrapper  */}
                <label className="flex items-center justify-between border-y border-y-border py-4">
                    <span className="text-title font-YekanBakh-Bold text-sm">
                        تم تاریک
                    </span>
                    <input
                        onChange={themeHandler}
                        className="peer sr-only"
                        type="checkbox"
                    />
                    <div className="inline-block cursor-pointer border-2 border-zinc-200 dark:border-primary h-5 w-11 bg-white dark:bg-primary relative rounded-xl transition-all">
                        <span
                            style={
                                darkMode === "dark"
                                    ? {
                                          transform: "translateX(26px)",
                                          backgroundColor: "#000",
                                      }
                                    : {}
                            }
                            className="w-3 h-3 bg-zinc-200 absolute left-0 translate-x-[2px] rounded-full top-0 bottom-0 my-auto transition-all"
                        ></span>
                    </div>
                </label>
                {/*  Mobile Menu Categories  */}
                <div>
                    <ul className="flex flex-col gap-5">
                        {menus.map((menu) => (
                            <li key={menu.menu_id}>
                                <a
                                    onClick={(event) => {
                                        event.preventDefault();
                                        setMobileMenuSelected(menu.title);
                                        setShowMobileCategoryMenu(
                                            (prevState) => !prevState
                                        );
                                    }}
                                    className="flex items-center justify-between"
                                    href="#"
                                >
                                    <span className="flex items-center gap-2">
                                        <span>
                                            <svg className="w-5 h-5">
                                                <use href={menu.icon}></use>
                                            </svg>
                                        </span>
                                        <span className="text-xs font-YekanBakh-SemiBold">
                                            {menu.title}
                                        </span>
                                    </span>
                                    {menu.submenus.length ? (
                                        <span>
                                            <svg
                                                className={`w-5 h-5 ${
                                                    showMobileCategoryMenu &&
                                                    mobileMenuSelected ===
                                                        menu.title
                                                        ? "rotate-180"
                                                        : ""
                                                }`}
                                            >
                                                <use href="#chevron-down"></use>
                                            </svg>
                                        </span>
                                    ) : (
                                        ""
                                    )}
                                </a>
                                {menu.submenus.length &&
                                showMobileCategoryMenu &&
                                mobileMenuSelected === menu.title ? (
                                    <ul
                                        className={`child:py-2 inline-block relative before:absolute before:content-[""] before:top-0 before:bottom-0 before:right-3 before:bg-zinc-200 dark:before:bg-zinc-900 before:h-full before:w-px pr-8 mt-4 child:text-xs text-zinc-400`}
                                    >
                                        {menu.submenus.map((submenu) => (
                                            <li key={submenu.submenu_id}>
                                                <a
                                                    onClick={() => {
                                                        setShowMobileCategorySubMenu(
                                                            (prevState) =>
                                                                !prevState
                                                        );
                                                        setMobileSubmenuSelected(
                                                            submenu.title
                                                        );
                                                    }}
                                                    className={`flex items-center gap-1 ${
                                                        showMobileCategoryMenu
                                                            ? "text-title"
                                                            : ""
                                                    }`}
                                                    href={submenu.link}
                                                >
                                                    {submenu.menulinks
                                                        .length ? (
                                                        <svg
                                                            className={`w-4 h-4 ${
                                                                showMobileCategorySubMenu &&
                                                                mobileSubmenuSelected ===
                                                                    submenu.title
                                                                    ? "-rotate-45"
                                                                    : ""
                                                            }`}
                                                        >
                                                            <use href="#chevron-left"></use>
                                                        </svg>
                                                    ) : (
                                                        ""
                                                    )}
                                                    {submenu.title}
                                                </a>
                                                {submenu.menulinks.length &&
                                                mobileSubmenuSelected ===
                                                    submenu.title ? (
                                                    <ul
                                                        style={
                                                            showMobileCategorySubMenu
                                                                ? {
                                                                      display:
                                                                          "inline-block",
                                                                  }
                                                                : {}
                                                        }
                                                        className='child:py-2 relative before:absolute before:content-[""] before:top-0 before:bottom-0 before:right-3 before:bg-zinc-200 dark:before:bg-zinc-900 before:h-full before:w-px pr-8 mt-4 text-xs text-zinc-400 hidden'
                                                    >
                                                        {submenu.menulinks.map(
                                                            (menulink) => (
                                                                <li
                                                                    key={
                                                                        menulink.menulink_id
                                                                    }
                                                                >
                                                                    <a
                                                                        className="flex items-center gap-2"
                                                                        href={
                                                                            menulink.link
                                                                        }
                                                                    >
                                                                        <span className="w-2 h-px bg-border"></span>
                                                                        {
                                                                            menulink.title
                                                                        }
                                                                    </a>
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                ) : (
                                                    ""
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    ""
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/*  mobile menu cover elem  */}
            <div
                onClick={() => setMobileMenuShow(false)}
                style={
                    mobileMenuShow
                        ? { visibility: "visible", opacity: "1" }
                        : {}
                }
                id="cover-elem"
                className="fixed inset-0 bg-secondary/80 z-40 invisible opacity-0 transition-all"
            ></div>
        </>
    );
}

export default Header;
