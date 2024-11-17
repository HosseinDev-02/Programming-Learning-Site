import Logo from "../../Components/Logo/Logo";
import SiteStructure from "../../Components/SiteStructure/SiteStructure";
import SubTitle from "../../Components/Titles/SubTitle";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import { Link } from "react-router-dom";
import Input from "../../Components/Input/Input";

function Login() {
    return (
        <SiteStructure>
            <div className="container">
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
                                    <Input
                                        element="input"
                                        className="outline-none h-11 rounded-2xl bg-secondary border border-border px-2 w-full text-title placeholder:text-sm"
                                        type="text"
                                        placeholder="شماره تلفن"
                                    />
                                    <Input
                                        element="input"
                                        className="outline-none h-11 rounded-2xl bg-secondary border border-border px-2 w-full text-title placeholder:text-sm"
                                        type="password"
                                        placeholder="رمز عبور"
                                    />
                                    <div className="flex items-center justify-between">
                                        <PrimaryButton
                                            className={"!grow-0"}
                                            icon="#arrow-up-left"
                                            title="برو بریم"
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
            </div>
        </SiteStructure>
    );
}

export default Login;
