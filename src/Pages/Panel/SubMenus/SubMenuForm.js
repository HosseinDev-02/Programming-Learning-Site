import SubTitle from "../../../Components/Titles/SubTitle";
import PrimaryButton from "../../../Components/Buttons/PrimaryButton";
import { useEffect, useState } from "react";
import { getMenus, getSubMenus, MySwal } from "../../../Utils";
import supabase from "../../../database";
import useMainParam from "../../../hooks/useMainParam";
import useInput from "../../../hooks/useInput";
import { useNavigate } from "react-router-dom";

export default function SubMenuForm() {
    const subMenuId = useMainParam();
    const [selectedMenu, setSelectedMenu] = useState("");
    const [menusMenuShow, setMenusMenuShow] = useState("");
    const [menus, setMenus] = useState([]);
    const [
        subMenuTitle,
        setSubMenuTitle,
        resetSubMenuTitle,
        bindingSubMenuTitle,
    ] = useInput("");
    const [subMenuLink, setSubMenuLink, resetSubMenuLink, bindingSubMenuLink] =
        useInput("");
    const [menuId, setMenuId] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (subMenuId) {
            getMainSubMenu();
        }
        getAllMenus();
    }, []);

    function selectMenu(elem) {
        setSelectedMenu(elem.target.innerHTML);
        setMenuId(elem.target.dataset.id);
        setMenusMenuShow((prevState) => !prevState);
    }

    async function getAllMenus() {
        const data = await getMenus();
        setMenus(data);
    }

    function clearStates() {
        resetSubMenuLink();
        resetSubMenuTitle();
        setMenuId("");
        setSelectedMenu("");
    }

    async function addNewSubMenu() {
        const newSubMenu = {
            title: subMenuTitle,
            link: subMenuLink,
            menu_id: menuId,
        };
        const response = await supabase.from("submenus").insert(newSubMenu);
        if (response.status === 201) {
            MySwal.fire({
                title: "زیرمنو با موفقیت ثبت شد",
                icon: "success",
                confirmButtonText: "اوکی",
            });
            clearStates();
        }
    }

    async function getMainSubMenu() {
        const data = await getSubMenus();
        const mainSubMenu = data.find(
            (submenu) => submenu.submenu_id === subMenuId
        );
        setSubMenuLink(mainSubMenu.link);
        setSubMenuTitle(mainSubMenu.title);
        setSelectedMenu(mainSubMenu.menus.title);
        setMenuId(mainSubMenu.menus.menu_id);
    }

    async function editSubMenuHandler() {
        MySwal.fire({
            title: "آیا از انجام این کار اطمینان دارید ؟",
            icon: "question",
            confirmButtonText: "بله",
            showCancelButton: true,
            cancelButtonText: "خیر",
        }).then(async (res) => {
            if (res.isConfirmed) {
                const response = await supabase
                    .from("submenus")
                    .update({
                        title: subMenuTitle,
                        link: subMenuLink,
                        menu_id: menuId,
                    })
                    .eq("submenu_id", subMenuId);
                if (response.status === 204) {
                    MySwal.fire({
                        title: "بروزرسانی انجام شد",
                        icon: "success",
                        confirmButtonText: "اوکی",
                    }).then((res) => {
                        if (res.isConfirmed || res.isDismissed) {
                            navigate(-2);
                        }
                    });
                }
            }
        });
    }

    return (
        <div className="w-full h-full">
            <div className="h-12 md:h-20 flex items-center">
                {subMenuId ? (
                    <SubTitle
                        className="text-lg md:text-2xl"
                        title="ویرایش زیرمنو"
                    ></SubTitle>
                ) : (
                    <SubTitle
                        className="text-lg md:text-2xl"
                        title="افزودن زیرمنو"
                    ></SubTitle>
                )}
            </div>
            <div className="flex flex-col sm:flex-row gap-5 pt-8 md:pt-10">
                <div className="flex flex-col gap-2 items-start w-full sm:w-1/3">
                    <label
                        className="text-xs font-YekanBakh-SemiBold"
                        htmlFor="#"
                    >
                        عنوان زیر منو
                    </label>
                    <input
                        {...bindingSubMenuTitle}
                        className="bg-background border border-border h-11 rounded-xl w-full outline-none px-2 text-title"
                        type="text"
                    />
                </div>
                <div className="flex flex-col gap-2 items-start w-full sm:w-1/3">
                    <label
                        className="text-xs font-YekanBakh-SemiBold"
                        htmlFor="#"
                    >
                        لینک زیر منو
                    </label>
                    <input
                        {...bindingSubMenuLink}
                        dir="ltr"
                        className="bg-back ground border border-border h-11 rounded-xl w-full outline-none px-2 text-title"
                        type="text"
                    />
                </div>
                <div className="flex flex-col gap-2 items-start w-full sm:w-1/3">
                    <span className="text-xs font-YekanBakh-SemiBold">
                        انتخاب منو
                    </span>
                    <div className="w-full rounded-2xl relative space-y-2">
                        <button
                            onClick={() =>
                                setMenusMenuShow((prevState) => !prevState)
                            }
                            className="flex items-center w-full justify-between px-4 outline-none bg-background rounded-2xl h-11 text-title font-YekanBakh-SemiBold"
                        >
                            <span className="text-xs">
                                {selectedMenu ? selectedMenu : "انتخاب کنید"}
                            </span>
                            <span>
                                <svg className="w-5 h-5">
                                    <use href="#chevron-down"></use>
                                </svg>
                            </span>
                        </button>
                        <div
                            style={
                                menusMenuShow
                                    ? { display: "block" }
                                    : { display: "none" }
                            }
                            className="bg-background shadow rounded-2xl overflow-hidden transition-all absolute right-0 left-0 top-11 z-10"
                        >
                            <ul
                                onClick={(elem) => selectMenu(elem)}
                                className="text-xs font-YekanBakh-SemiBold flex flex-col"
                            >
                                {menus.map((menu) => (
                                    <li
                                        data-id={menu.menu_id}
                                        key={menu.menu_id}
                                        className="py-3 px-4 hover:bg-background transition-colors hover:text-title cursor-pointer"
                                    >
                                        {menu.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="inline-flex items-center gap-3 mt-5">
                {subMenuId ? (
                    <>
                        <PrimaryButton
                            clickEvent={() => editSubMenuHandler()}
                            icon="#check"
                            title="بروزرسانی"
                        ></PrimaryButton>
                        <PrimaryButton
                            className="bg-red-500"
                            clickEvent={() => navigate(-1)}
                            icon="#x-mark"
                            title="بازگشت"
                        ></PrimaryButton>
                    </>
                ) : (
                    <PrimaryButton
                        clickEvent={() => addNewSubMenu()}
                        icon="#check"
                        title="ثبت زیرمنو جدید"
                    ></PrimaryButton>
                )}
            </div>
        </div>
    );
}
