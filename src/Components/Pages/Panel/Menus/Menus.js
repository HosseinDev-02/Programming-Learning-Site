import SubTitle from "../../../Titles/SubTitle";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMenus, MySwal } from "../../../../Utils";
import supabase from "../../../../database";
import EmptyTableMsg from "../../../Modals/EmptyTableMsg";
import TableModalAction from "../../../Modals/TableModalAction";
import TableModalDetail from "../../../Modals/TableModalDetail";

export default function Menus() {
    const [menus, setMenus] = useState([]);
    const [showActionModal, setShowActionModal] = useState(false);
    const [showDetailModal, setShowDetailModal] = useState(false);
    const [mainMenu, setMainMenu] = useState({});
    const [menuId, setMenuId] = useState(null);

    useEffect(() => {
        getAllMenus();
    }, []);

    async function getAllMenus() {
        const data = await getMenus();
        setMenus(data);
    }

    async function removeMenuHandler(menuId) {
        MySwal.fire({
            title: "از حذف منو اطمینان دارید ؟",
            icon: "question",
            confirmButtonText: "بله",
            showCancelButton: true,
            cancelButtonText: "خیر",
        }).then(async (res) => {
            if (res.isConfirmed) {
                const response = await supabase
                    .from("menus")
                    .delete()
                    .eq("menu_id", menuId);
                if (response.status === 204) {
                    MySwal.fire({
                        title: "منو با موفقیت حذف شد",
                        icon: "success",
                        confirmButtonText: "اوکی",
                    });
                    getAllMenus();
                }
            }
        });
    }

    const showActionModalHandler = () => {
        setShowActionModal(true);
    };

    const closeActionModalHandler = () => {
        setShowActionModal(false);
    };

    const showDetailModalHandler = () => {
        setShowDetailModal(true);
    };

    const closeDetailModalHandler = () => {
        setShowDetailModal(false);
    };

    return (
        <div className="w-full h-full">
            <div className="h-12 md:h-20 flex items-center">
                <SubTitle
                    className="text-lg md:text-2xl"
                    title="منو ها"
                ></SubTitle>
            </div>
            <div className="pt-8 md:pt-10">
                {menus.length ? (
                    <table className="w-full">
                        <thead className="text-sm h-12 text-center font-YekanBakh-Black text-title child:text-nowrap">
                            <tr className="border-b border-border child:px-3">
                                <th className="lg:hidden"></th>
                                <th className="hidden sm:table-cell">شناسه</th>
                                <th>عنوان</th>
                                <th>لینک</th>
                                <th className="hidden lg:table-cell">عمل ها</th>
                            </tr>
                        </thead>
                        <tbody>
                            {menus.map((menu, index) => (
                                <tr
                                    key={menu.menu_id}
                                    className="text-center text-xs h-16 font-YekanBakh-Bold odd:bg-background even:bg-secondary child:px-3 child:text-nowrap"
                                >
                                    <td className="lg:hidden">
                                        <div className="flex items-center justify-center relative">
                                            <span
                                                onClick={() => {
                                                    showActionModalHandler();
                                                    setMainMenu(menu);
                                                    setMenuId(menu.menu_id);
                                                }}
                                            >
                                                <svg className="w-4 h-4">
                                                    <use href="#submenu"></use>
                                                </svg>
                                            </span>
                                        </div>
                                    </td>
                                    <td className="hidden sm:table-cell">
                                        {index + 1}
                                    </td>
                                    <td>{menu.title}</td>
                                    <td dir="ltr">{menu.link}</td>
                                    <td className="hidden lg:table-cell">
                                        <div className="flex items-center gap-2 justify-center">
                                            <Link
                                                to={`../menu-form/${menu.menu_id}`}
                                                className="cursor-pointer text-primary"
                                            >
                                                <svg className="w-5 h-5">
                                                    <use href="#edit"></use>
                                                </svg>
                                            </Link>
                                            <span
                                                onClick={() =>
                                                    removeMenuHandler(
                                                        menu.menu_id
                                                    )
                                                }
                                                className="cursor-pointer text-red-500"
                                            >
                                                <svg className="w-5 h-5">
                                                    <use href="#x-mark"></use>
                                                </svg>
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <EmptyTableMsg title="آیتمی یافت نشد !"></EmptyTableMsg>
                )}
                {/* Action Modal */}

                {showActionModal && (
                    <TableModalAction
                        id={menuId}
                        removeHandler={removeMenuHandler}
                        closeActionModalHandler={closeActionModalHandler}
                        showDetailModalHandler={showDetailModalHandler}
                        editHandler={`../menu-form/${menuId}`}
                    ></TableModalAction>
                )}

                {/* Detail Modal */}

                {showDetailModal && (
                    <TableModalDetail
                        title="مشخصات منو"
                        closeDetailModalHandler={closeDetailModalHandler}
                    >
                        <div className="flex flex-col items-center gap-2 py-2">
                            <span className="text-primary font-YekanBakh-Black">
                                عنوان منو
                            </span>
                            <span className="text-caption text-xs font-YekanBakh-SemiBold">
                                {mainMenu.title}
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-2 py-2">
                            <span className="text-primary font-YekanBakh-Black">
                                لینک منو
                            </span>
                            <span
                                dir="ltr"
                                className="text-caption text-xs font-YekanBakh-SemiBold"
                            >
                                {mainMenu.link}
                            </span>
                        </div>
                    </TableModalDetail>
                )}
            </div>
        </div>
    );
}
