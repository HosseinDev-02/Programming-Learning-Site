import SubTitle from "../../../Components/Titles/SubTitle";
import PrimaryButton from "../../../Components/Buttons/PrimaryButton";

export default function EditProfile() {
    return (
        <div>
            <div className="my-5">
                <SubTitle title="ویرایش پروفایل"></SubTitle>
                <div className="overflow-x-auto">
                    <ul className="bg-secondary rounded-full inline-flex items-center gap-5 border border-border p-1 mt-5">
                        <li>
                            <button className="flex items-center gap-2 h-10 rounded-full px-5 hover:bg-background hover:text-title transition-colors user-edit-menu__item--active">
                                <span>
                                    <svg className="w-5 h-5">
                                        <use href="#pencil-square"></use>
                                    </svg>
                                </span>
                                <span className="text-sm font-YekanBakh-Bold text-nowrap">
                                    اطلاعات حساب
                                </span>
                            </button>
                        </li>
                        <li>
                            <button className="flex items-center gap-2 h-10 rounded-full px-5 hover:bg-background hover:text-title transition-colors">
                                <span>
                                    <svg className="w-5 h-5">
                                        <use href="#document-text"></use>
                                    </svg>
                                </span>
                                <span className="text-sm font-YekanBakh-Bold text-nowrap">
                                    شماره موبایل
                                </span>
                            </button>
                        </li>
                        <li>
                            <button className="flex items-center gap-2 h-10 rounded-full px-5 hover:bg-background hover:text-title transition-colors">
                                <span>
                                    <svg className="w-5 h-5">
                                        <use href="#key"></use>
                                    </svg>
                                </span>
                                <span className="text-sm font-YekanBakh-Bold text-nowrap">
                                    رمز عبور
                                </span>
                            </button>
                        </li>
                        <li>
                            <button className="flex items-center gap-2 h-10 rounded-full px-5 hover:bg-background hover:text-title transition-colors">
                                <span>
                                    <svg className="w-5 h-5">
                                        <use href="#notification"></use>
                                    </svg>
                                </span>
                                <span className="text-sm font-YekanBakh-Bold text-nowrap">
                                    اطلاع رسانی
                                </span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-8 space-y-5">
                <SubTitle title="اطلاعات حساب"></SubTitle>
                <div className="flex flex-col space-y-5">
                    <div className="flex flex-col sm:flex-row items-start justify-between gap-5">
                        <div className="w-full sm:w-1/2 flex flex-col gap-2 items-start">
                            <label
                                className="text-xs font-YekanBakh-SemiBold"
                                htmlFor="#"
                            >
                                نام و نام خانوادگی (فارسی)
                            </label>
                            <input
                                className="bg-secondary border border-border h-11 rounded-xl w-full outline-none px-2 text-title"
                                type="text"
                            />
                        </div>
                        <div className="w-full sm:w-1/2 flex flex-col gap-2 items-start">
                            <label
                                className="text-xs font-YekanBakh-SemiBold"
                                htmlFor="#"
                            >
                                ایمیل
                            </label>
                            <input
                                className="bg-secondary border border-border h-11 rounded-xl w-full outline-none px-2 text-title"
                                type="text"
                            />
                            <span className="text-xs font-YekanBakh-SemiBold">
                                در حال حاضر ایمیل قلبل تغییر نمی باشد
                            </span>
                        </div>
                    </div>
                    <div className="lg:w-1/2 flex flex-col gap-2 items-start">
                        <label
                            className="text-xs font-YekanBakh-SemiBold"
                            htmlFor="#"
                        >
                            آدرس پروفایل
                        </label>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full">
                            <input
                                className="bg-secondary border border-border h-11 rounded-xl w-full outline-none px-2 text-title"
                                type="text"
                            />
                            <span className="text-xs font-YekanBakh-SemiBold">
                                https://demo.spacedev.ir
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8">
                <SubTitle title="اطلاعات فردی"></SubTitle>
                <div className="flex flex-col items-start gap-2">
                    <div className="flex flex-col gap-2 w-full mt-5">
                        <label
                            className="text-xs font-YekanBakh-SemiBold"
                            htmlFor="#"
                        >
                            درباره من
                        </label>
                        <textarea
                            className="bg-secondary rounded-xl border border-border text-title outline-none overflow-hidden p-3 w-full"
                            rows="5"
                        ></textarea>
                    </div>
                </div>
            </div>
            <div className="mt-8 mb-5">
                <SubTitle title="راه های ارتباطی"></SubTitle>
                <div className="sm:grid sm:grid-cols-2 sm:gap-5 space-y-5 sm:space-y-0 mt-5">
                    <div className="flex flex-col gap-2 items-start">
                        <label
                            className="text-xs font-YekanBakh-SemiBold"
                            htmlFor="#"
                        >
                            وب سایت
                        </label>
                        <input
                            dir="ltr"
                            className="bg-secondary border border-border h-11 rounded-xl w-full outline-none px-2 text-title"
                            type="text"
                        />
                    </div>
                    <div className="flex flex-col gap-2 items-start">
                        <label
                            className="text-xs font-YekanBakh-SemiBold"
                            htmlFor="#"
                        >
                            گیت هاب
                        </label>
                        <input
                            dir="ltr"
                            className="bg-secondary border border-border h-11 rounded-xl w-full outline-none px-2 text-title"
                            type="text"
                        />
                    </div>
                    <div className="flex flex-col gap-2 items-start">
                        <label
                            className="text-xs font-YekanBakh-SemiBold"
                            htmlFor="#"
                        >
                            لینکدین
                        </label>
                        <input
                            dir="ltr"
                            className="bg-secondary border border-border h-11 rounded-xl w-full outline-none px-2 text-title"
                            type="text"
                        />
                    </div>
                    <div className="flex flex-col gap-2 items-start">
                        <label
                            className="text-xs font-YekanBakh-SemiBold"
                            htmlFor="#"
                        >
                            تلگرام
                        </label>
                        <input
                            dir="ltr"
                            className="bg-secondary border border-border h-11 rounded-xl w-full outline-none px-2 text-title"
                            type="text"
                        />
                    </div>
                </div>
            </div>
            <div className="flex sm:block">
                <PrimaryButton
                    style={{ float: "left" }}
                    icon="#arrow-path"
                    href="#"
                    title="بروزرسانی"
                ></PrimaryButton>
            </div>
        </div>
    );
}
