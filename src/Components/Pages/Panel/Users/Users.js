import SubTitle from "../../../Titles/SubTitle";
import React, { useEffect, useState } from "react";
import { getUsers } from "../../../../Utils";
import supabase from "../../../../database";
import { MySwal } from "../../../../Utils";
import { Link } from "react-router-dom";
import TableModalAction from "../../../Modals/TableModalAction";

export default function Users() {
    const [users, setUsers] = useState([]);
    const [getData, setGetData] = useState(false);
    const [selectedUserAction, setSelectedUserAction] = useState("");
    const [showDetailModal, setShowDetailModal] = useState(false);

    useEffect(() => {
        getAllUsers();
    }, [getData]);

    async function getAllUsers() {
        const data = await getUsers();
        setUsers(data);
    }
    async function removeUserHandler(userId) {
        MySwal.fire({
            title: "از حذف کاربر اطمینان دارید ؟",
            icon: "question",
            showCancelButton: true,
            cancelButtonText: "خیر",
            confirmButtonText: "بله",
        }).then(async (res) => {
            if (res.isConfirmed) {
                const response = await supabase
                    .from("users")
                    .delete()
                    .eq("user_id", userId);
                if (response.status === 204) {
                    MySwal.fire({
                        title: "کاربر با موفقیت حذف شد",
                        icon: "success",
                        confirmButtonText: "اوکی",
                    });
                    setGetData((prevState) => !prevState);
                }
            }
        });
    }

    return (
        <div className="w-full h-full">
            <div className="h-12 md:h-20 flex items-center">
                <SubTitle
                    className="text-lg md:text-2xl"
                    title="کاربران"
                ></SubTitle>
            </div>
            <div>
                <div className="pt-8 md:pt-10">
                    <table className="w-full">
                        <thead className="text-sm h-12 text-center font-YekanBakh-Black text-title child:text-nowrap">
                            <tr className="border-b border-border child:px-2">
                                <th className="lg:hidden"></th>
                                <th className="hidden lg:table-cell">شناسه</th>
                                <th>تصویر</th>
                                <th>نام کامل</th>
                                <th className="hidden md:table-cell">
                                    شماره تماس
                                </th>
                                <th className="hidden md:table-cell">ایمیل</th>
                                <th className="hidden sm:table-cell">دسترسی</th>
                                <th className="hidden lg:table-cell">عمل ها</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.length ? (
                                users.map((user, index) => (
                                    <tr
                                        key={user.user_id}
                                        className="text-center text-xs h-16 font-YekanBakh-Bold odd:bg-background even:bg-secondary child:px-3 child:text-nowrap"
                                    >
                                        <td className="lg:hidden">
                                            <div className="flex items-center justify-center relative">
                                                <span
                                                    onClick={() =>
                                                        setSelectedUserAction(
                                                            user.user_id
                                                        )
                                                    }
                                                >
                                                    <svg className="w-4 h-4">
                                                        <use href="#submenu"></use>
                                                    </svg>
                                                </span>
                                                {/* User Actions Modal */}
                                                <TableModalAction
                                                    editHandler={`../user-form/${user.user_id}`}
                                                    selectedItemAction={
                                                        selectedUserAction
                                                    }
                                                    id={user.user_id}
                                                    setSelectedItemAction={
                                                        setSelectedUserAction
                                                    }
                                                    removeHandler={
                                                        removeUserHandler
                                                    }
                                                    setShowDetailModal={
                                                        setShowDetailModal
                                                    }
                                                ></TableModalAction>
                                                {/* User Detail Modal */}
                                                <div
                                                    className={`fixed inset-0 items-center justify-center gap-2 flex-col bg-black/30 ${
                                                        selectedUserAction ===
                                                            user.user_id &&
                                                        showDetailModal
                                                            ? "flex"
                                                            : "hidden"
                                                    }`}
                                                >
                                                    <span
                                                        className="flex items-center justify-center bg-secondary w-10 h-10 rounded-full"
                                                        onClick={() =>
                                                            setShowDetailModal(
                                                                false
                                                            )
                                                        }
                                                    >
                                                        <svg className="w-5 h-5">
                                                            <use href="#x-mark-mini"></use>
                                                        </svg>
                                                    </span>
                                                    <div className="flex flex-col p-2 rounded-md bg-secondary divide-y divide-border relative max-w-64 w-full">
                                                        <h3 className="font-YekanBakh-Black text-title text-lg pb-2">
                                                            مشخصات کاربر
                                                        </h3>
                                                        <div className="flex flex-col gap-1 py-2">
                                                            <span className="text-primary font-YekanBakh-Black">
                                                                نام کامل
                                                            </span>
                                                            <span className="text-caption">{`${user.firstname} ${user.lastname}`}</span>
                                                        </div>
                                                        <div className="flex flex-col gap-1 py-2">
                                                            <span className="text-primary font-YekanBakh-Black">
                                                                تصویر
                                                            </span>
                                                            <span className="w-24 h-12 mx-auto rounded-md overflow-hidden">
                                                                <img
                                                                    className="w-full h-full object-cover"
                                                                    src={
                                                                        user.img
                                                                    }
                                                                    alt={
                                                                        user.firstname
                                                                    }
                                                                />
                                                            </span>
                                                        </div>
                                                        <div className="flex flex-col gap-1 py-2">
                                                            <span className="text-primary font-YekanBakh-Black">
                                                                شماره تماس
                                                            </span>
                                                            <span className="text-caption">
                                                                {
                                                                    user.phonenumber
                                                                }
                                                            </span>
                                                        </div>
                                                        <div className="flex flex-col gap-1 py-2">
                                                            <span className="text-primary font-YekanBakh-Black">
                                                                ایمیل
                                                            </span>
                                                            <span className="text-caption">
                                                                {user.email}
                                                            </span>
                                                        </div>
                                                        <div className="flex flex-col gap-1 py-2">
                                                            <span className="text-primary font-YekanBakh-Black">
                                                                سطح دسترسی
                                                            </span>
                                                            <span className="text-caption">
                                                                {user.role ? (
                                                                    <span className="bg-green-500 rounded p-0.5">
                                                                        ادمین/مدرس
                                                                    </span>
                                                                ) : (
                                                                    <span className="bg-yellow-500 rounded p-0.5">
                                                                        کاربر/دانشجو
                                                                    </span>
                                                                )}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="hidden lg:table-cell">
                                            {index + 1}
                                        </td>
                                        <td>
                                            <div className="w-12 h-12 flex items-center justify-center mx-auto">
                                                <img
                                                    className="rounded-full object-cover"
                                                    src={user.img}
                                                    alt={`${user.firstname} ${user.lastname}`}
                                                />
                                            </div>
                                        </td>
                                        <td>{`${user.firstname} ${user.lastname}`}</td>
                                        <td className="hidden md:table-cell">
                                            {user.phonenumber}
                                        </td>
                                        <td className="hidden md:table-cell">
                                            {user.email}
                                        </td>
                                        <td className="hidden sm:table-cell">
                                            {user.role ? (
                                                <span className="bg-green-500 rounded p-0.5">
                                                    ادمین/مدرس
                                                </span>
                                            ) : (
                                                <span className="bg-yellow-500 rounded p-0.5">
                                                    کاربر/دانشجو
                                                </span>
                                            )}
                                        </td>
                                        <td className="hidden lg:table-cell">
                                            <div className="flex items-center gap-2 justify-center">
                                                <Link
                                                    to={`../user-form/${user.user_id}`}
                                                    className="cursor-pointer text-primary"
                                                >
                                                    <svg className="w-5 h-5">
                                                        <use href="#edit"></use>
                                                    </svg>
                                                </Link>
                                                <span
                                                    onClick={() =>
                                                        removeUserHandler(
                                                            user.user_id
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
                                ))
                            ) : (
                                <tr className="text-center text-sm h-20 odd:bg-background even:bg-secondary child:px-4">
                                    <td className="lg:hidden"></td>
                                    <td className="hidden lg:table-cell">
                                        ---
                                    </td>
                                    <td>---</td>
                                    <td>---</td>
                                    <td className="hidden md:table-cell">
                                        ---
                                    </td>
                                    <td className="hidden md:table-cell">
                                        ---
                                    </td>
                                    <td className="hidden sm:table-cell">
                                        ---
                                    </td>
                                    <td className="hidden lg:table-cell">
                                        ---
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
