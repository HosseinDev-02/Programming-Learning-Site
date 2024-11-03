import SubTitle from "../../../Components/Titles/SubTitle";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSubMenus, MySwal } from "../../../Utils";
import supabase from "../../../database";
import EmptyTableMsg from "../../../Components/Modals/EmptyTableMsg";
import TableModalAction from "../../../Components/Modals/TableModalAction";
import TableModalDetail from "../../../Components/Modals/TableModalDetail";

export default function SubMenus() {
    const [subMenus, setSubMenus] = useState([]);
    const [showActionModal, setShowActionModal] = useState(false);
    const [showDetailModal, setShowDetailModal] = useState(false);
    const [mainSubmenu, setMainSubmenu] = useState({});
    const [submenuId, setSubmenuId] = useState(null);

    useEffect(() => {
        getAllSubMenus();
    }, []);

    async function getAllSubMenus() {
        const data = await getSubMenus();
        setSubMenus(data);
    }

    async function removeSubMenuHandler(submenuId) {
        MySwal.fire({
            title: "از حذف زیرمنو اطمینان دارید ؟",
            icon: "question",
            confirmButtonText: "بله",
            showCancelButton: true,
            cancelButtonText: "خیر",
        }).then(async (res) => {
            if (res.isConfirmed) {
                const response = await supabase
                    .from("submenus")
                    .delete()
                    .eq("submenu_id", submenuId);
                if (response.status === 204) {
                    MySwal.fire({
                        title: "زیرمنو با موفقیت حذف شد",
                        icon: "success",
                        confirmButtonText: "اوکی",
                    });
                    getAllSubMenus();
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
                    title="زیرمنو ها"
                ></SubTitle>
            </div>
            <div className="pt-8 md:pt-10">
                {subMenus.length ? (
                    <table className="w-full">
                        <thead className="text-sm h-12 text-center font-YekanBakh-Black text-title child:text-nowrap">
                            <tr className="border-b border-border child:px-3">
                                <th className="lg:hidden"></th>
                                <th className="hidden sm:table-cell">شناسه</th>
                                <th>عنوان</th>
                                <th className="hidden sm:table-cell">منو</th>
                                <th>لینک</th>
                                <th className="hidden lg:table-cell">عمل ها</th>
                            </tr>
                        </thead>
                        <tbody>
                            {subMenus.map((submenu, index) => (
                                <tr
                                    key={submenu.submenu_id}
                                    className="text-center text-xs h-16 font-YekanBakh-Bold odd:bg-background even:bg-secondary child:px-3 child:text-nowrap"
                                >
                                    <td className="lg:hidden">
                                        <div className="flex items-center justify-center relative">
                                            <span
                                                onClick={() => {
                                                    showActionModalHandler();
                                                    setMainSubmenu(submenu);
                                                    setSubmenuId(
                                                        submenu.submenu_id
                                                    );
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
                                    <td>{submenu.title}</td>
                                    <td className="hidden sm:table-cell">
                                        {submenu.menus.title}
                                    </td>
                                    <td dir="ltr">{submenu.link}</td>
                                    <td className="hidden lg:table-cell">
                                        <div className="flex items-center gap-2 justify-center">
                                            <Link
                                                to={`../submenu-form/${submenu.submenu_id}`}
                                                className="cursor-pointer text-primary"
                                            >
                                                <svg className="w-5 h-5">
                                                    <use href="#edit"></use>
                                                </svg>
                                            </Link>
                                            <span
                                                onClick={() =>
                                                    removeSubMenuHandler(
                                                        submenu.submenu_id
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
                        id={submenuId}
                        removeHandler={removeSubMenuHandler}
                        editHandler={`../submenu-form/${submenuId}`}
                        closeActionModalHandler={closeActionModalHandler}
                        showDetailModalHandler={showDetailModalHandler}
                    ></TableModalAction>
                )}

                {/* Detail Modal */}

                {showDetailModal && (
                    <TableModalDetail
                        title="مشخصات آیتم"
                        closeDetailModalHandler={closeDetailModalHandler}
                    >
                        <div className="flex flex-col items-center gap-2 py-2">
                            <span className="text-primary font-YekanBakh-Black">
                                عنوان زیرمنو
                            </span>
                            <span className="text-caption text-xs font-YekanBakh-SemiBold">
                                {mainSubmenu.title}
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-2 py-2">
                            <span className="text-primary font-YekanBakh-Black">
                                لینک زیرمنو
                            </span>
                            <span
                                dir="ltr"
                                className="text-caption text-xs font-YekanBakh-SemiBold"
                            >
                                {mainSubmenu.link}
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-2 py-2">
                            <span className="text-primary font-YekanBakh-Black">
                                منوی مربوطه
                            </span>
                            <span className="text-caption text-xs font-YekanBakh-SemiBold">
                                {mainSubmenu.menus.title}
                            </span>
                        </div>
                    </TableModalDetail>
                )}
            </div>
        </div>
    );
}
