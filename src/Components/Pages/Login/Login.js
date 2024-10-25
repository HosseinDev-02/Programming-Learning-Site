import React, { useState } from "react";
import useInput from "../../../hooks/useInput";
import Logo from "../../Logo/Logo";
import SiteStructure from "../../SiteStructure/SiteStructure";
import SubTitle from "../../Titles/SubTitle";
import PrimaryButton from "../../Buttons/PrimaryButton";
import { MySwal, getUsers } from "../../../Utils";
import { useNavigate, Link } from "react-router-dom";

function Login() {
    const [
        userPhonenumber,
        setUserPhonenumber,
        resetUserPhonenumber,
        bindingUserPhonenumber,
    ] = useInput("");

    const [
        userPassword,
        setUserPassword,
        resetUserPassword,
        bindingUserPassword,
    ] = useInput("");

    const navigate = useNavigate();

    const userLoginHandler = async () => {
        let allUsers = await getUsers();
        let mainUserId = null;

        let isRegistered = allUsers.some((user) => {
            if (
                user.phonenumber === userPhonenumber &&
                user.password === userPassword
            ) {
                mainUserId = user.user_id;
                return true;
            }
        });
        isRegistered
            ? MySwal.fire({
                  title: "خوش آمدید",
                  icon: "success",
                  confirmButtonText: "ورود",
              }).then((res) => {
                  if (res.isConfirmed || res.isDismissed) {
                      localStorage.setItem("token", mainUserId);
                      navigate("/");
                  }
              })
            : MySwal.fire({
                  title: "کاربری با این مشخصات وجود ندارد !",
                  icon: "warning",
                  confirmButtonText: "بستن",
              });
    };

    return (
        <SiteStructure>
            <div className="flex items-center justify-center pt-20">
                <div className="max-w-sm w-full flex flex-col space-y-10">
                    <div className="bg-gradient-to-b from-secondary to-background rounded-2xl px-5">
                        <div className="flex items-center rounded-2xl bg-background p-5">
                            <Logo></Logo>
                        </div>
                        <div className="mt-5">
                            <SubTitle title="ورود"></SubTitle>
                            <span className="text-sm inline-block mt-3">
                                درود👋
                            </span>
                            <p className="text-sm mt-3">
                                لطفا اطلاعات زیر را وارد کنید
                            </p>
                            <form action="#" className="space-y-3 mt-3">
                                <input
                                    className="outline-none h-11 rounded-2xl bg-secondary border border-border px-2 w-full text-title placeholder:text-sm"
                                    type="text"
                                    placeholder="شماره تلفن"
                                    {...bindingUserPhonenumber}
                                />
                                <input
                                    className="outline-none h-11 rounded-2xl bg-secondary border border-border px-2 w-full text-title placeholder:text-sm"
                                    type="text"
                                    placeholder="رمز عبور"
                                    {...bindingUserPassword}
                                />
                                <div className="flex items-center justify-between">
                                    <PrimaryButton
                                        className={"!grow-0"}
                                        icon="#arrow-up-left"
                                        title="برو بریم"
                                        clickEvent={userLoginHandler}
                                    ></PrimaryButton>
                                    <p className="text-xs font-YekanBakh-SemiBold">
                                        حساب کاربری ندارید ؟
                                        <Link
                                            className="hover:text-primary transition-colors underline text-title"
                                            to="/register"
                                        >
                                            ثبت نام
                                        </Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="bg-secondary rounded-xl p-5 flex items-center justify-center">
                        <p className="text-xs flex items-center flex-wrap gap-1 text-center justify-center">
                            ورود شما به معنای پذیرش{" "}
                            <a
                                className="hover:text-primary transition-colors text-title font-YekanBakh-SemiBold text-nowrap"
                                href="#"
                            >
                                شرایط
                            </a>{" "}
                            و{" "}
                            <a
                                className="hover:text-primary transition-colors text-title font-YekanBakh-SemiBold text-nowrap"
                                href="#"
                            >
                                قوانین حریم خصوصی
                            </a>{" "}
                            است.
                        </p>
                    </div>
                </div>
            </div>
        </SiteStructure>
    );
}

export default Login;
