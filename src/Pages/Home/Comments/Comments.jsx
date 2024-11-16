import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/Titles/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./Comments.css";

// import required modules
import { EffectCards, Navigation } from "swiper/modules";
export default function Comments() {
    return (
        <section className="py-10">
            <div className="container">
                <div className="lg:grid lg:grid-cols-12 items-center space-y-5 lg:space-y-0 lg:gap-10">
                    <div className="lg:col-span-4">
                        <SectionTitle
                            textColor="#6b7280"
                            title="در مورد نابغه چه میشنویم؟"
                            text="این‌ها، بخش خیلی کوچکی از نظراتی هستند که افراد مختلف در مورد نابغه دارند."
                        ></SectionTitle>
                    </div>
                    <div className="lg:col-span-8 max-w-xl mx-auto relative">
                        <Swiper
                            effect={"cards"}
                            grabCursor={true}
                            modules={[EffectCards, Navigation]}
                            className="mySwiper"
                            navigation={{
                                nextEl: ".swiper-button-next",
                                prevEl: ".swiper-button-prev",
                            }}
                        >
                            <SwiperSlide>
                                <div className="inline-flex flex-col items-center gap-8 border border-border relative rounded-2xl p-8 bg-background">
                                    <p className="text-center text-sm font-YekanBakh-SemiBold line-clamp-3">
                                        من به تیم شما بابت پشتیبانی عالیتان از
                                        وبسایتتان تشکر می‌کنم. سوالات و مشکلات
                                        من به سرعت پاسخ داده می‌شوند و همیشه یک
                                        راه حل مناسب برای هر مشکل پیدا می‌کنید.
                                        این امر بسیار قابل ارزش است.
                                    </p>
                                    <div className="flex items-center gap-2">
                                        <span className="block overflow-hidden w-10 h-10 rounded-full">
                                            <img
                                                className="w-full h-full object-cover"
                                                src="/images/profile.jpeg"
                                                alt=""
                                            />
                                        </span>
                                        <div className="flex flex-col gap-1 text-xs">
                                            <span className="text-title font-YekanBakh-Bold">
                                                حسین رستمی
                                            </span>
                                            <span className="font-YekanBakh-SemiBold">
                                                دوره پروژه محور React , Next
                                            </span>
                                        </div>
                                    </div>
                                    <div className="swiper-button-next rounded-full w-10 h-10 border border-border flex items-center justify-center absolute left-2 top-1/2">
                                        <svg className="w-5 h-5">
                                            <use href="#chevron-left"></use>
                                        </svg>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="inline-flex flex-col items-center gap-8 border relative border-border rounded-2xl p-8 bg-background">
                                    <p className="text-center text-sm font-YekanBakh-SemiBold line-clamp-3">
                                        وبسایت شما به خوبی به نیازها و سطح دانش
                                        کاربران پاسخ می‌دهد. از مبتدیان تا
                                        حرفه‌ایان، می‌توانند از محتواهای آموزشی
                                        شما بهره‌بردند. این گسترده‌بودن پوشش
                                        محتوا بسیار قابل قدردانی است
                                    </p>
                                    <div className="flex items-center gap-2">
                                        <span className="block overflow-hidden w-10 h-10 rounded-full">
                                            <img
                                                className="w-full h-full object-cover"
                                                src="/images/profile.jpeg"
                                                alt=""
                                            />
                                        </span>
                                        <div className="flex flex-col gap-1 text-xs">
                                            <span className="text-title font-YekanBakh-Bold">
                                                حسین رستمی
                                            </span>
                                            <span className="font-YekanBakh-SemiBold">
                                                دوره پروژه محور React , Next
                                            </span>
                                        </div>
                                    </div>
                                    <div className="swiper-button-prev rounded-full w-10 h-10 border border-border flex items-center justify-center absolute right-2 top-1/2">
                                        <svg className="w-5 h-5">
                                            <use href="#chevron-right"></use>
                                        </svg>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}
