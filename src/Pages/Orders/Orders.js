import SubTitle from "../../Components/Titles/SubTitle";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import SectionTitle from "../../Components/Titles/SectionTitle";
import LikeButton from "../../Components/Buttons/LikeButton";
import LatestCourses from "../Home/Latest-Courses/LatestCourses";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import RoundButton from "../../Components/Buttons/RoundButton";
import SiteStructure from "../../Components/SiteStructure/SiteStructure";
import { useEffect, useState } from "react";
import { getUserOrders } from "../../Utils";
import Order from "./Order";
import supabase from "../../database";

export default function Orders() {
    const [userOrders, setUserOrders] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [offer, setOffer] = useState(0);

    useEffect(() => {
        getAllUserOrders();
    }, []);

    const getAllUserOrders = async () => {
        const ordersData = await getUserOrders();
        setUserOrders(ordersData);

        let sum = 0;
        let off = 0;

        ordersData.forEach((order) => {
            off += (order.courses.price * order.courses.offer) / 100;
            sum +=
                order.courses.price -
                (order.courses.price * order.courses.offer) / 100;
        });
        setTotalPrice(sum);
        setOffer(off);
    };

    const registerUserCoursesHandler = async () => {
        let res;
        userOrders.forEach(async (order) => {
            console.log(order);
            res = await supabase
                .from("orders")
                .update({ isPayed: true })
                .eq("user_id", localStorage.getItem("token"))
                .eq("course_id", order.course_id)
                .eq("isPayed", false);
        });
        getAllUserOrders()
    };

    return (
        <SiteStructure>
            <main className="pt-5">
                <div className="container space-y-14">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-5">
                        <div className="md:w-7/12 lg:w-8/12">
                            <SectionHeader>
                                {userOrders.length ? (
                                    <SectionTitle
                                        textColor="#6b7280"
                                        fontSize="12px"
                                        lineHeight="1rem"
                                        title="سبد خرید شما"
                                        text={`${userOrders.length} دوره به سبد خرید اضافه کرده اید`}
                                    ></SectionTitle>
                                ) : (
                                    <SectionTitle title="سبد خرید شما خالی است !"></SectionTitle>
                                )}
                            </SectionHeader>
                            {/*  basket content  */}
                            <div className="divide-y divide-border divide-dashed">
                                {userOrders.length
                                    ? userOrders.map((order) => (
                                          <Order
                                              key={order.order_id}
                                              {...order.courses}
                                          ></Order>
                                      ))
                                    : ""}
                            </div>
                        </div>
                        {/*  user basket left side  */}
                        <div className="w-full md:w-5/12 lg:w-4/12 md:sticky md:top-24">
                            <div className="bg-gradient-to-b from-secondary to-background rounded-2xl pb-5 px-5">
                                <div className="bg-background flex items-center rounded-b-3xl p-5 mb-5">
                                    <SubTitle title="اطلاعات پرداخت"></SubTitle>
                                </div>
                                <div className="space-y-2 mb-5">
                                    <div className="flex items-center justify-between">
                                        <span className="font-YekanBakh-Bold text-title text-xs">
                                            جمع کل :
                                        </span>
                                        <div className="flex items-center gap-1">
                                            <span className="font-YekanBakh-Black text-title">
                                                {totalPrice.toLocaleString()}
                                            </span>
                                            <span className="text-xs">
                                                تومان
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="font-YekanBakh-Bold text-title text-xs">
                                            تخفیف :
                                        </span>
                                        <div className="flex items-center gap-1">
                                            <span className="font-YekanBakh-Black text-title">
                                                {offer.toLocaleString()}
                                            </span>
                                            <span className="text-xs">
                                                تومان
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between py-5 border-t border-border">
                                    <span className="font-YekanBakh-Bold text-title text-sm">
                                        مبلغ قابل پرداخت :
                                    </span>
                                    <div className="flex items-center gap-1">
                                        <span className="text-title font-YekanBakh-Black text-xl">
                                            {(
                                                totalPrice - offer
                                            ).toLocaleString()}
                                        </span>
                                        <span className="text-xs">تومان</span>
                                    </div>
                                </div>
                            </div>
                            {userOrders.length ? (
                                <PrimaryButton
                                    clickEvent={() =>
                                        registerUserCoursesHandler()
                                    }
                                    icon="#arrow-up-left"
                                    title="تکمیل فرایند خرید"
                                    href='/orders'
                                ></PrimaryButton>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                    <LatestCourses></LatestCourses>
                </div>
            </main>
        </SiteStructure>
    );
}
