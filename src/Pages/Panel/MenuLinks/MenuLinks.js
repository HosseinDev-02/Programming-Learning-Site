import SubTitle from "../../../Components/Titles/SubTitle";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMenuLinks, MySwal } from "../../../Utils";
import supabase from "../../../database";
import EmptyTableMsg from "../../../Components/Modals/EmptyTableMsg";
import TableModalAction from "../../../Components/Modals/TableModalAction";
import TableModalDetail from "../../../Components/Modals/TableModalDetail";

export default function MenuLinks() {
    const [menuLinks, setMenuLinks] = useState([]);
    const [showActionModal, setShowActionModal] = useState(false);
    const [showDetailModal, setShowDetailModal] = useState(false);
    const [mainMenuLink, setMaminMenuLink] = useState({});
    const [menuLinkId, setMenuLinkId] = useState(null);

    useEffect(() => {
        getAllMenuLinks();
    }, []);

    async function getAllMenuLinks() {
        const data = await getMenuLinks();
        setMenuLinks(data);
    }

    async function removeMenuLinkHandler(menuLinkId) {
        MySwal.fire({
            title: "از حذف لینک اطمینان دارید ؟",
            icon: "question",
            confirmButtonText: "بله",
            showCancelButton: true,
            cancelButtonText: "خیر",
        }).then(async (res) => {
            if (res.isConfirmed) {
                const response = await supabase
                    .from("menulinks")
                    .delete()
                    .eq("menulink_id", menuLinkId);
                if (response.status === 204) {
                    MySwal.fire({
                        title: "لینک با موفقیت حذف شد",
                        icon: "success",
                        confirmButtonText: "اوکی",
                    });
                    getAllMenuLinks();
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
                    title="لینک ها"
                ></SubTitle>
            </div>
            <div className="pt-8 md:pt-10">
                {menuLinks.length ? (
                    <table className="w-full">
                        <thead className="text-sm h-12 text-center font-YekanBakh-Black text-title child:text-nowrap">
                            <tr className="border-b border-border child:px-3">
                                <th className="lg:hidden"></th>
                                <th className="hidden sm:table-cell">شناسه</th>
                                <th>عنوان</th>
                                <th className="hidden sm:table-cell">زیرمنو</th>
                                <th>لینک</th>
                                <th className="hidden lg:table-cell">عمل ها</th>
                            </tr>
                        </thead>
                        <tbody>
                            {menuLinks.map((menulink, index) => (
                                <tr
                                    key={menulink.menulink_id}
                                    className="text-center text-xs h-16 font-YekanBakh-Bold odd:bg-background even:bg-secondary child:px-3 child:text-nowrap"
                                >
                                    <td className="lg:hidden">
                                        <div className="flex items-center justify-center relative">
                                            <span
                                                onClick={() => {
                                                    showActionModalHandler();
                                                    setMaminMenuLink(menulink);
                                                    setMenuLinkId(
                                                        menulink.menulink_id
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
                                    <td>{menulink.title}</td>
                                    <td className="hidden sm:table-cell">
                                        {menulink.submenus.title}
                                    </td>
                                    <td dir="ltr">{menulink.link}</td>
                                    <td className="hidden lg:table-cell">
                                        <div className="flex items-center gap-2 justify-center">
                                            <Link
                                                to={`../menulink-form/${menulink.menulink_id}`}
                                                className="cursor-pointer text-primary"
                                            >
                                                <svg className="w-5 h-5">
                                                    <use href="#edit"></use>
                                                </svg>
                                            </Link>
                                            <span
                                                onClick={() =>
                                                    removeMenuLinkHandler(
                                                        menulink.menulink_id
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
                    <EmptyTableMsg title="آیتمی وجود ندارد !"></EmptyTableMsg>
                )}
                {/* Action Modal */}

                {showActionModal && (
                    <TableModalAction
                        editHandler={`../menulink-form/${menuLinkId}`}
                        removeHandler={removeMenuLinkHandler}
                        id={menuLinkId}
                        closeActionModalHandler={closeActionModalHandler}
                        showDetailModalHandler={showDetailModalHandler}
                    ></TableModalAction>
                )}

                {/* Detail Modal */}

                {showDetailModal && (
                    <TableModalDetail
                        title="مشخصات لینک"
                        closeDetailModalHandler={closeDetailModalHandler}
                    >
                        <div className="flex flex-col items-center gap-2 py-2">
                            <span className="text-primary font-YekanBakh-Black">
                                عنوان لینک
                            </span>
                            <span className="text-caption text-xs font-YekanBakh-SemiBold">
                                {mainMenuLink.title}
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-2 py-2">
                            <span className="text-primary font-YekanBakh-Black">
                                آدرس 
                            </span>
                            <span
                                dir="ltr"
                                className="text-caption text-xs font-YekanBakh-SemiBold"
                            >
                                {mainMenuLink.link}
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-2 py-2">
                            <span className="text-primary font-YekanBakh-Black">
                                زیرمنوی مربوطه
                            </span>
                            <span className="text-caption text-xs font-YekanBakh-SemiBold">
                                {mainMenuLink.submenus.title}
                            </span>
                        </div>
                    </TableModalDetail>
                )}
            </div>
        </div>
    );
}
