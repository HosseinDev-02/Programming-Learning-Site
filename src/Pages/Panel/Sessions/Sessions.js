import SubTitle from "../../../Components/Titles/SubTitle";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSessions, MySwal } from "../../../Utils";
import supabase from "../../../database";
import TableModalAction from "../../../Components/Modals/TableModalAction";
import TableModalDetail from "../../../Components/Modals/TableModalDetail";
import EmptyTableMsg from "../../../Components/Modals/EmptyTableMsg";

export default function Sessions() {
    const [sessions, setSessions] = useState([]);
    const [showActionModal, setShowActionModal] = useState(false);
    const [showDetailModal, setShowDetailModal] = useState(false);
    const [mainSession, setMainSession] = useState({});
    const [sessionId, setSessionId] = useState(null);

    useEffect(() => {
        getAllSessions();
    }, []);

    async function getAllSessions() {
        const data = await getSessions();
        setSessions(data);
    }

    async function removeSessionHandler(sessionId) {
        MySwal.fire({
            title: "از حذف جلسه اطمینان دارید ؟",
            icon: "question",
            confirmButtonText: "بله",
            showCancelButton: true,
            cancelButtonText: "خیر",
        }).then(async (res) => {
            if (res.isConfirmed) {
                const response = await supabase
                    .from("sessions")
                    .delete()
                    .eq("session_id", sessionId);
                if (response.status === 204) {
                    MySwal.fire({
                        title: "جلسه با موفقیت حذف شد",
                        icon: "success",
                        confirmButtonText: "اوکی",
                    });
                    getAllSessions();
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
                    title="جلسات دوره ها"
                ></SubTitle>
            </div>
            <div className="pt-8 md:pt-10">
                {sessions.length ? (
                    <table className="w-full">
                        <thead className="text-xs h-12 font-YekanBakh-Black child:text-nowrap">
                            <tr className="border-b border-border child:px-2">
                                <th className="lg:hidden"></th>
                                <th className="hidden sm:table-cell">شناسه</th>
                                <th>عنوان</th>
                                <th>زمان</th>
                                <th className="hidden sm:table-cell">دوره</th>
                                <th className="hidden lg:table-cell">عمل ها</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sessions.map((session, index) => (
                                <tr
                                    key={session.session_id}
                                    className="text-center text-xs h-16 font-YekanBakh-Bold odd:bg-background even:bg-secondary child:px-3 child:text-nowrap"
                                >
                                    <td className="lg:hidden">
                                        <div className="flex items-center justify-center relative">
                                            <span
                                                onClick={() => {
                                                    showActionModalHandler();
                                                    setMainSession(session);
                                                    setSessionId(
                                                        session.session_id
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
                                    <td>{session.title}</td>
                                    <td>{session.time}</td>
                                    <td className="hidden sm:table-cell">
                                        {session.courses.title}
                                    </td>
                                    <td className="hidden lg:table-cell">
                                        <div className="flex items-center gap-2 justify-center">
                                            <Link
                                                to={`../session-form/${session.session_id}`}
                                                className="cursor-pointer text-primary"
                                            >
                                                <svg className="w-5 h-5">
                                                    <use href="#edit"></use>
                                                </svg>
                                            </Link>
                                            <span
                                                onClick={() =>
                                                    removeSessionHandler(
                                                        session.session_id
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
                    <EmptyTableMsg title="جلسه ای یافت نشد !"></EmptyTableMsg>
                )}

                {/* Action Modal */}

                {showActionModal && (
                    <TableModalAction
                        id={sessionId}
                        removeHandler={removeSessionHandler}
                        closeActionModalHandler={closeActionModalHandler}
                        showDetailModalHandler={showDetailModalHandler}
                        editHandler={`../session-form/${sessionId}`}
                    ></TableModalAction>
                )}

                {/* Detail Modal */}

                {showDetailModal && (
                    <TableModalDetail
                        title="مشخصات جلسه"
                        closeDetailModalHandler={closeDetailModalHandler}
                    >
                        <div className="flex flex-col items-center gap-2 py-2">
                            <span className="text-primary font-YekanBakh-Black">
                                عنوان جلسه
                            </span>
                            <span className="text-caption text-xs font-YekanBakh-SemiBold">
                                {mainSession.title}
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-2 py-2">
                            <span className="text-primary font-YekanBakh-Black">
                                تایم جلسه
                            </span>
                            <span className="text-caption text-xs font-YekanBakh-SemiBold">
                                {mainSession.time}
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-2 py-2">
                            <span className="text-primary font-YekanBakh-Black">
                                دوره مربوطه
                            </span>
                            <span className="text-caption text-xs font-YekanBakh-SemiBold">
                                {mainSession.courses.title}
                            </span>
                        </div>
                    </TableModalDetail>
                )}
            </div>
        </div>
    );
}
