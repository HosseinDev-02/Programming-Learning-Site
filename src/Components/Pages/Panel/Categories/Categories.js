import SubTitle from "../../../Titles/SubTitle";
import { Link, useAsyncError } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCategories, MySwal } from "../../../../Utils";
import supabase from "../../../../database";
import EmptyTableMsg from "../../../Modals/EmptyTableMsg";
import TableModalAction from "../../../Modals/TableModalAction";
import TableModalDetail from "../../../Modals/TableModalDetail";

export default function Categories() {
    const [categories, setCategoris] = useState([]);
    const [showActionModal, setShowActionModal] = useState(false);
    const [showDetailModal, setShowDetailModal] = useState(false);
    const [categoryId, setCategoryId] = useState(null);
    const [mainCategory, setMainCategory] = useState({});

    useEffect(() => {
        getAllCategories();
    }, []);

    async function getAllCategories() {
        const data = await getCategories();
        setCategoris(data);
    }

    function removeCategoryHandler(categoryId) {
        MySwal.fire({
            title: "از حذف دسته بندی اطمینان دارید ؟",
            icon: "question",
            confirmButtonText: "بله",
            showCancelButton: true,
            cancelButtonText: "خیر",
        }).then(async (res) => {
            if (res.isConfirmed) {
                const response = await supabase
                    .from("categories")
                    .delete()
                    .eq("category_id", categoryId);
                if (response.status === 204) {
                    MySwal.fire({
                        title: "دسته بندی با موفقیت حذف شد",
                        icon: "success",
                        confirmButtonText: "اوکی",
                    });
                    closeActionModalHandler()
                    getAllCategories();
                }else if(response.status === 409) {
                    MySwal.fire({
                        title: "دسته بندی فوق با جداول دیگر تداخل دارد",
                        icon: "warning",
                        confirmButtonText: "اوکی",
                    });
                    closeActionModalHandler()
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
                    title="دسته بندی ها"
                ></SubTitle>
            </div>
            <div className="pt-8 md:pt-10">
                {categories.length ? (
                    <table className="w-full">
                        <thead className="text-xs h-12 font-YekanBakh-Black child:text-nowrap">
                            <tr className="border-b border-border child:px-3">
                                <th className="lg:hidden"></th>
                                <th>شناسه</th>
                                <th>عنوان</th>
                                <th className="hidden lg:table-cell">عمل ها</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((category, index) => (
                                <tr
                                    key={category.category_id}
                                    className="text-center text-xs h-16 font-YekanBakh-Bold odd:bg-background even:bg-secondary child:px-3 child:text-nowrap"
                                >
                                    <td className="lg:hidden">
                                        <div className="flex items-center justify-center relative">
                                            <span
                                                onClick={() => {
                                                    setCategoryId(
                                                        category.category_id
                                                    );
                                                    setMainCategory(category);
                                                    showActionModalHandler();
                                                }}
                                            >
                                                <svg className="w-4 h-4">
                                                    <use href="#submenu"></use>
                                                </svg>
                                            </span>
                                        </div>
                                    </td>
                                    <td>{index + 1}</td>
                                    <td>{category.title}</td>
                                    <td className="hidden lg:table-cell">
                                        <div className="flex items-center gap-2 justify-center">
                                            <Link
                                                to={`../category-form/${category.category_id}`}
                                                className="cursor-pointer text-primary"
                                            >
                                                <svg className="w-5 h-5">
                                                    <use href="#edit"></use>
                                                </svg>
                                            </Link>
                                            <span
                                                onClick={() =>
                                                    removeCategoryHandler(
                                                        category.category_id
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
                    <EmptyTableMsg title="دسته بندی یافت نشد !"></EmptyTableMsg>
                )}

                {/* Category Actions Modal */}
                {showActionModal && (
                    <TableModalAction
                        editHandler={`../category-form/${categoryId}`}
                        id={categoryId}
                        closeActionModalHandler={closeActionModalHandler}
                        removeHandler={removeCategoryHandler}
                        showDetailModalHandler={showDetailModalHandler}
                    ></TableModalAction>
                )}
                {/* Category Detail Modal */}
                {showDetailModal && (
                    <TableModalDetail
                        closeDetailModalHandler={closeDetailModalHandler}
                        title="مشخصات دسته بندی"
                    >
                        <div className="flex flex-col items-center gap-2 py-2">
                            <span className="text-primary font-YekanBakh-Black">
                                عنوان دسته بندی
                            </span>
                            <span className="text-caption text-xs font-YekanBakh-SemiBold">{mainCategory.title}</span>
                        </div>
                        
                    </TableModalDetail>
                )}
            </div>
        </div>
    );
}
