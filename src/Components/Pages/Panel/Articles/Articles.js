import SubTitle from "../../../Titles/SubTitle";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticles, MySwal } from "../../../../Utils";
import supabase from "../../../../database";
import EmptyTableMsg from "../../../Modals/EmptyTableMsg";
import TableModalAction from "../../../Modals/TableModalAction";
import TableModalDetail from "../../../Modals/TableModalDetail";

export default function Articles() {
    const [articles, setArticles] = useState([]);
    const [showDetailModal, setShowDetailModal] = useState(false);
    const [showActionModal, setShowActionModal] = useState(false);
    const [mainArticle, setMainArticle] = useState({});
    const [articleId, setArticleId] = useState(null);

    useEffect(() => {
        getAllArticles();
    }, []);

    async function getAllArticles() {
        const data = await getArticles();
        setArticles(data);
    }

    async function removeArticleHandler(articleId) {
        MySwal.fire({
            title: "از حذف مقاله اطمینان دارید ؟",
            icon: "question",
            confirmButtonText: "بله",
            showCancelButton: true,
            cancelButtonText: "خیر",
        }).then(async (res) => {
            if (res.isConfirmed) {
                const response = await supabase
                    .from("articles")
                    .delete()
                    .eq("article_id", articleId);
                if (response.status === 204) {
                    MySwal.fire({
                        title: "مقاله با موفقیت حذف شد",
                        icon: "success",
                        confirmButtonText: "اوکی",
                    }).then((res) => {
                        if (res.isConfirmed || res.isDismissed) {
                            getAllArticles();
                        }
                    });
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
                    title="مقاله ها"
                ></SubTitle>
            </div>
            <div className="pt-8 md:pt-10 relative">
                {articles.length ? (
                    <table className="w-full">
                        <thead className="text-xs h-12 font-YekanBakh-Black child:text-nowrap">
                            <tr className="border-b border-border child:px-3">
                                <th className="lg:hidden"></th>
                                <th className="hidden lg:table-cell">شناسه</th>
                                <th>عنوان</th>
                                <th>تصویر</th>
                                <th className="hidden sm:table-cell">
                                    توضیحات
                                </th>
                                <th className="hidden sm:table-cell">
                                    دسته بندی
                                </th>
                                <th className="hidden lg:table-cell">
                                    تایم مطالعه
                                </th>
                                <th className="hidden lg:table-cell">
                                    نویسنده
                                </th>
                                <th className="hidden lg:table-cell">عمل ها</th>
                            </tr>
                        </thead>
                        <tbody>
                            {articles.map((article, index) => (
                                <tr
                                    key={article.article_id}
                                    className="text-center text-xs h-16 font-YekanBakh-Bold odd:bg-background even:bg-secondary child:px-3 child:text-nowrap"
                                >
                                    <td className="lg:hidden">
                                        <div className="flex items-center justify-center relative">
                                            <span
                                                onClick={() => {
                                                    showActionModalHandler();
                                                    setMainArticle(article);
                                                    setArticleId(
                                                        article.article_id
                                                    );
                                                }}
                                            >
                                                <svg className="w-4 h-4">
                                                    <use href="#submenu"></use>
                                                </svg>
                                            </span>
                                        </div>
                                    </td>
                                    <td className="hidden lg:table-cell">
                                        {index + 1}
                                    </td>
                                    <td className="max-w-[180px] text-ellipsis whitespace-nowrap overflow-hidden">
                                        {article.title}
                                    </td>
                                    <td>
                                        <div className="w-16 h-12 flex items-center justify-center mx-auto">
                                            <img
                                                className="rounded object-cover"
                                                src={article.img}
                                                alt={article.title}
                                            />
                                        </div>
                                    </td>
                                    <td className="hidden sm:table-cell max-w-[180px] text-ellipsis whitespace-nowrap overflow-hidden">
                                        {article.description}
                                    </td>
                                    <td className="hidden sm:table-cell">
                                        {article.categories.title}
                                    </td>
                                    <td className="hidden lg:table-cell">
                                        {article.time}
                                    </td>
                                    <td className="hidden lg:table-cell">
                                        {`${article.users.firstname} ${article.users.lastname}`}
                                    </td>
                                    <td className="hidden lg:table-cell">
                                        <div className="flex items-center gap-2 justify-center">
                                            <Link
                                                to={`../article-form/${article.article_id}`}
                                                className="cursor-pointer text-primary"
                                            >
                                                <svg className="w-5 h-5">
                                                    <use href="#edit"></use>
                                                </svg>
                                            </Link>
                                            <span
                                                onClick={() =>
                                                    removeArticleHandler(
                                                        article.article_id
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
                    <EmptyTableMsg></EmptyTableMsg>
                )}
                {/* Action Modal */}

                {showActionModal && (
                    <TableModalAction
                        id={articleId}
                        editHandler={`../article-form/${articleId}`}
                        removeHandler={removeArticleHandler}
                        showDetailModalHandler={showDetailModalHandler}
                        closeActionModalHandler={closeActionModalHandler}
                    ></TableModalAction>
                )}

                {/* Detail Modal */}

                {showDetailModal && (
                    <TableModalDetail
                        title="مشخصات مقاله"
                        closeDetailModalHandler={closeDetailModalHandler}
                    >
                        <div className="flex flex-col items-center gap-2 py-2">
                            <span className="text-primary font-YekanBakh-Black">
                                نام دوره
                            </span>
                            <span className="text-caption text-xs font-YekanBakh-SemiBold">
                                {mainArticle.title}
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-2 py-2">
                            <span className="text-primary font-YekanBakh-Black">
                                تصویر
                            </span>
                            <span className="w-16 h-16 mx-auto rounded-md overflow-hidden">
                                <img
                                    className="w-full h-full object-cover"
                                    src={mainArticle.img}
                                    alt={mainArticle.title}
                                />
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-2 py-2">
                            <span className="text-primary font-YekanBakh-Black">
                                دسته بندی
                            </span>
                            <span className="text-caption text-xs font-YekanBakh-SemiBold">
                                {mainArticle.categories.title}
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-2 py-2">
                            <span className="text-primary font-YekanBakh-Black">
                                توضیحات
                            </span>
                            <span className="text-caption text-xs font-YekanBakh-SemiBold text-center">
                                {mainArticle.description}
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-2 py-2">
                            <span className="text-primary font-YekanBakh-Black">
                                تایم مطالعه
                            </span>
                            <span className="text-caption text-xs font-YekanBakh-SemiBold">
                                {mainArticle.time}
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-2 py-2">
                            <span className="text-primary font-YekanBakh-Black">
                                نویسنده مقاله
                            </span>
                            <span className="text-caption text-xs font-YekanBakh-SemiBold">
                                {`${mainArticle.users.firstname} ${mainArticle.users.lastname}`}
                            </span>
                        </div>
                    </TableModalDetail>
                )}
            </div>
        </div>
    );
}
