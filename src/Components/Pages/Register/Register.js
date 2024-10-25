import Logo from "../../Logo/Logo";
import SubTitle from "../../Titles/SubTitle";
import PrimaryButton from "../../Buttons/PrimaryButton";
import SiteStructure from "../../SiteStructure/SiteStructure";
import useInput from "../../../hooks/useInput";
import supabase from "../../../database";
import { MySwal } from "../../../Utils";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
    const [username, setUsername, resetUsername, bindingUsername] =
        useInput("");
    const [
        userPhonenumber,
        setUserPhonenumber,
        resetUserPhonenumber,
        bindingUserPhonenumber,
    ] = useInput("");
    const [userEmail, setUserEmail, resetUserEmail, bindingUserEmail] =
        useInput("");
    const [
        userPassword,
        setUserPassword,
        resetUserPassword,
        bindingUserPassword,
    ] = useInput("");

    const navigate = useNavigate();

    const addNewUser = async () => {
        const newUser = {
            name: username,
            phonenumber: userPhonenumber,
            email: userEmail,
            password: userPassword,
            role: false,
        };

        const { data, status } = await supabase
            .from("users")
            .insert(newUser)
            .select("*");
        console.log("data :", data);
        console.log("status :", status);
        if (status === 201) {
            MySwal.fire({
                title: "خوش آمدید",
                icon: "success",
                confirmButtonText: "ممنون",
            }).then((res) => {
                if (res.isConfirmed || res.isDismissed) {
                    navigate("/");
                    localStorage.setItem("token", data[0].user_id);
                }
            });
        }
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
                            <SubTitle title="ثبت نام"></SubTitle>
                            <span className="text-sm inline-block mt-3">
                                درود👋
                            </span>
                            <p className="text-sm mt-3">
                                لطفا اطلاعات زیر را کامل کنید
                            </p>
                            <form action="#" className="space-y-3 mt-3">
                                <input
                                    className="outline-none h-11 rounded-2xl bg-secondary border border-border px-2 w-full text-title placeholder:text-sm"
                                    type="text"
                                    placeholder="نام کامل"
                                    {...bindingUsername}
                                />
                                <input
                                    className="outline-none h-11 rounded-2xl bg-secondary border border-border px-2 w-full text-title placeholder:text-sm"
                                    type="text"
                                    placeholder="شماره تلفن"
                                    {...bindingUserPhonenumber}
                                />
                                <input
                                    className="outline-none h-11 rounded-2xl bg-secondary border border-border px-2 w-full text-title placeholder:text-sm"
                                    type="text"
                                    placeholder="ایمل"
                                    {...bindingUserEmail}
                                />
                                <input
                                    className="outline-none h-11 rounded-2xl bg-secondary border border-border px-2 w-full text-title placeholder:text-sm"
                                    type="text"
                                    placeholder="رمز عبور"
                                    {...bindingUserPassword}
                                />
                                <div className="flex items-center justify-between">
                                    <PrimaryButton
                                        className={`!grow-0`}
                                        icon="#arrow-up-left"
                                        title="برو بریم"
                                        clickEvent={addNewUser}
                                    ></PrimaryButton>
                                    <p className="text-xs font-YekanBakh-SemiBold">
                                        حساب کاربری دارید ؟{" "}
                                        <Link
                                            className="hover:text-primary transition-colors underline text-title"
                                            to="/login"
                                        >
                                            ورود
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
