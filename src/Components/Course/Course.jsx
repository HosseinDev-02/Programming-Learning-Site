import PrimaryButton from "../Buttons/PrimaryButton";
import LikeButton from "../Buttons/LikeButton";
import UserInfo from "../UserInfo/UserInfo";
// import { ShimmerThumbnail } from "react-shimmer-effects";
import { Loader } from "@aws-amplify/ui-react";
import { useState } from "react";
import "@aws-amplify/ui-react/styles.css";
import "./Course.css";
export default function Course(props) {
    const [isImgLoaded, setIsImgLoaded] = useState(false);

    const imgLoadedHandler = () => setIsImgLoaded(true);

    return (
        <div>
            <div className="flex items-center justify-center rounded-3xl overflow-hidden relative">
                <a href="/course-detail/react-js">
                    <img
                        loading="lazy"
                        className="w-full h-full object-cover"
                        src={props.img}
                        alt={props.title}
                        onLoad={imgLoadedHandler}
                    />
                </a>
                <a
                    href="/course-detail/react-js"
                    className="absolute left-3 top-3 flex items-center gap-1 bg-black/20 rounded-full h-11 px-4 text-white hover:opacity-80 transition-all"
                >
                    <span>
                        <svg className="w-6 h-6">
                            <use href="#grid-boxes"></use>
                        </svg>
                    </span>
                    <span className="font-YekanBakh-SemiBold text-sm tracking-wider">
                        {props.category}
                    </span>
                </a>
                {!isImgLoaded && (
                    <Loader
                        emptyColor="rgb(var(--color-secondary))"
                        filledColor="rgb(var(--color-primary))"
                        className="my-loader"
                    />
                )}
            </div>
            <div className="bg-gradient-to-b from-background to-secondary mx-5 p-5 rounded-3xl">
                <div className="flex items-center gap-2">
                    {props.isCompleted ? (
                        <>
                            <span className="block bg-success w-1 h-1 rounded-full"></span>
                            <span className="text-xs font-YekanBakh-Black text-success">
                                تکمیل شده
                            </span>
                        </>
                    ) : (
                        <>
                            <span className="block bg-yellow-500 dark:bg-yellow-600 w-1 h-1 rounded-full"></span>
                            <span className="text-xs font-YekanBakh-Black text-yellow-500 dark:text-yellow-600">
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
                        {props.title}
                    </a>
                </h6>
            </div>
            <div className="p-5">
                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-1">
                        <span>
                            <svg className="w-5 h-5">
                                <use href="#pepers"></use>
                            </svg>
                        </span>
                        <span className="text-xs font-YekanBakh-SemiBold">
                            {props.sections} فصل
                        </span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span>
                            <svg className="w-5 h-5">
                                <use href="#clock"></use>
                            </svg>
                        </span>
                        <span className="text-xs font-YekanBakh-SemiBold">
                            {props.time} ساعت
                        </span>
                    </div>
                </div>
                <div className="flex items-center justify-between gap-5 mt-3">
                    <UserInfo
                        title="مدرس دوره :"
                        text={props.teacher}
                        img={props.teacherImg}
                    ></UserInfo>
                    {props.isFree ? (
                        <div className="flex items-center justify-center h-14">
                            <span className="text-success font-YekanBakh-Black text-xl line-clamp-1">
                                رایگان !
                            </span>
                        </div>
                    ) : props.offer ? (
                        <div className="flex items-end h-14 flex-col justify-center">
                            <span className='relative block before:bg-caption before:absolute before:-top-1 before:bottom-0 before:w-full before:my-auto before:h-px before:content[" "] font-YekanBakh-SemiBold'>
                                {props.price.toLocaleString()}
                            </span>
                            {props.offer && (
                                <div className="flex items-center gap-1">
                                    <span className="text-title font-YekanBakh-Black text-lg xl:text-xl">
                                        {props.costPrice.toLocaleString()}
                                    </span>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="flex items-center gap-1 h-14">
                            <span className="text-title font-YekanBakh-Black text-lg xl:text-xl">
                                {props.price.toLocaleString()}
                            </span>
                        </div>
                    )}
                </div>
                <div className="flex items-center gap-3 mt-3">
                    <PrimaryButton
                        href="/course-detail/react-js"
                        icon="#arrow-up-left"
                        title="مشاهده دوره"
                    ></PrimaryButton>
                    <LikeButton></LikeButton>
                </div>
            </div>
        </div>
    );
}
