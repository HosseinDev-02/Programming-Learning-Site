import React, { useEffect, useState } from "react";
import { courses } from "../../data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/pagination";
import Course from "../Course/Course";
import SectionLinkBtn from "../Buttons/SectionLinkBtn";
import SectionTitle from "../Titles/SectionTitle";
import SectionHeader from "../SectionHeader/SectionHeader";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import './PopularCourses.css'

export default function PopularCourses() {
    const [popularCourses, setPopularCourses] = useState([]);

    useEffect(() => {
        setPopularCourses(courses);
    }, []);

    return (
        <section>
            <div className="container">
                {/*  Section Header  */}
                <SectionHeader>
                    <SectionTitle
                        title="محبوبترین دوره ها"
                        text="به انتخاب شما"
                    ></SectionTitle>
                    <SectionLinkBtn
                        href="/courses"
                        icon="#arrow-up-left"
                        text="مشاهده همه"
                    ></SectionLinkBtn>
                </SectionHeader>
                {/*  Section Content  */}

                <div className="relative">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={20}
                        grabCursor={true}
                        modules={[Pagination, Autoplay]}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{ 
                            delay: 2500,
                            disableOnInteraction: false
                         }}
                        className="mySwiper mt-8 !pb-8"
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                        }}
                    >
                        {popularCourses.length &&
                            popularCourses.map((course) => (
                                <SwiperSlide>
                                    <Course
                                        key={course.id}
                                        {...course}
                                    ></Course>
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
