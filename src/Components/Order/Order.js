import React from "react";
import RoundButton from "../Buttons/RoundButton";
import LikeButton from "../Buttons/LikeButton";
import PrimaryButton from "../Buttons/PrimaryButton";

function Order({
    img,
    title,
    price,
    costPrice,
    isCompleted,
    time,
    sections,
    teacher,
    teacherImg
}) {
    return (
        <div className="flex sm:flex-row lg:flex-row flex-col md:flex-col items-center sm:items-start md:items-center lg:items-start gap-5 lg:gap-8 py-6">
            <div className="w-full sm:w-4/12 lg:w-4/12 md:w-full">
                <a
                    className="flex items-center justify-center rounded-3xl overflow-hidden"
                    href="/course-detail/react-js"
                >
                    <img
                        className="w-full h-full object-cover"
                        src={img}
                        alt={title}
                    />
                </a>
                <RoundButton
                    icon="#x-mark"
                    className={
                        "-translate-y-1/2 mx-auto w-11 h-11 !bg-red-500 text-white cursor-pointer"
                    }
                ></RoundButton>
            </div>
            <div className="w-full sm:w-8/12 lg:w-8/12 md:w-full bg-gradient-to-b from-secondary to-background px-5 pb-5 rounded-3xl">
                <div className="bg-background p-5 rounded-b-3xl">
                    <div className="flex items-center gap-2">
                        {isCompleted ? (
                            <>
                                <span className="block bg-success w-1 h-1 rounded-full"></span>
                                <span className="text-xs font-YekanBakh-Black text-success">
                                    تکمیل شده
                                </span>
                            </>
                        ) : (
                            <>
                                <span className="block bg-yellow-500 w-1 h-1 rounded-full"></span>
                                <span className="text-xs font-YekanBakh-Black text-yellow-500">
                                    در حال برگزاری
                                </span>
                            </>
                        )}
                    </div>
                    <h6 className="mt-2 text-title text-sm font-YekanBakh-Bold">
                        <a
                            className="hover:text-primary transition-colors line-clamp-1"
                            href="/course-detail/react-js"
                        >
                            {title}
                        </a>
                    </h6>
                </div>
                <div className="pt-5">
                    <div className="flex items-center gap-5">
                        <div className="flex items-center gap-1">
                            <span>
                                <svg className="w-5 h-5">
                                    <use href="#pepers"></use>
                                </svg>
                            </span>
                            <span className="text-xs font-YekanBakh-SemiBold">
                                {sections} فصل
                            </span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span>
                                <svg className="w-5 h-5">
                                    <use href="#clock"></use>
                                </svg>
                            </span>
                            <span className="text-xs font-YekanBakh-SemiBold">
                                {time} ساعت
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-5 mt-3">
                        <div className="flex items-center gap-2">
                            <span className="block overflow-hidden w-10 h-10 rounded-full shrink-0">
                                <img
                                    className="w-full h-full object-cover"
                                    src={teacherImg}
                                    alt={teacher}
                                />
                            </span>
                            <div className="flex flex-col gap-1 text-xs font-YekanBakh-SemiBold">
                                <span className="line-clamp-1">
                                    مدرس دوره :
                                </span>
                                <span className="text-title font-YekanBakh-Bold line-clamp-1">
                                    {teacher}
                                </span>
                            </div>
                        </div>
                        <div className="flex items-end h-14 flex-col justify-center">
                            {costPrice ? (
                                <>
                                    <div className="flex items-center gap-1">
                                        <span className="line-through">
                                            {
                                                price.toLocaleString()
                                            }
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span className="text-title font-YekanBakh-Black text-xl">
                                            {
                                                costPrice.toLocaleString()
                                            }
                                        </span>
                                        <span className="text-xs">تومان</span>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="flex items-center gap-1">
                                        <span className="text-title font-YekanBakh-Black text-xl">
                                            {
                                                price
                                            }
                                        </span>
                                        <span className="text-xs">تومان</span>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center gap-3 mt-3">
                        <PrimaryButton
                            icon="#arrow-up-left"
                            href="/course-detail/react-js"
                            title="مشاهده دوره"
                        ></PrimaryButton>
                        <LikeButton></LikeButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Order;
