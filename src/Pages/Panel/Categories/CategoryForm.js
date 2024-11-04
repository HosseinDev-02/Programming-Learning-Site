import SubTitle from "../../../Components/Titles/SubTitle";
import PrimaryButton from "../../../Components/Buttons/PrimaryButton";
import { useEffect } from "react";
import supabase from "../../../database";
import { getCategories, MySwal } from "../../../Utils";
import useInput from "../../../hooks/useInput";
import useMainParam from "../../../hooks/useMainParam";
import { useNavigate } from "react-router-dom";
import Input from "../../../Components/Input/Input";

export default function CategoryForm() {
    const [
        categoryTitle,
        setCategoryTitle,
        resetCategoryTitle,
        bindingCategoryTitle,
    ] = useInput("");
    const categoryId = useMainParam();
    const navigate = useNavigate();

    useEffect(() => {
        if (categoryId) {
            getMainCategory();
        }
    }, []);

    async function addNewCategory() {
        let newCategory = {
            title: categoryTitle.trim(),
        };
        const response = await supabase.from("categories").insert(newCategory);
        if (response.status === 201) {
            MySwal.fire({
                title: "دسته بندی با موفقیت ثبت شد",
                icon: "success",
                confirmButtonText: "اوکی",
            });
            clearStates();
        }
    }

    async function getMainCategory() {
        const data = await getCategories();
        let mainCategory = data.find(
            (category) => category.category_id === categoryId
        );
        setCategoryTitle(mainCategory.title);
    }

    async function editCategory() {
        const response = await supabase
            .from("categories")
            .update({
                title: categoryTitle,
            })
            .eq("category_id", categoryId);
        if (response.status === 204) {
            MySwal.fire({
                title: "بروزرسانی انجام شد",
                icon: "success",
                confirmButtonText: "اوکی",
            }).then((res) => {
                if (res.isDismissed || res.isConfirmed) {
                    navigate(-2);
                }
            });
        }
    }

    function clearStates() {
        resetCategoryTitle();
    }

    return (
        <div className="w-full h-full">
            <div className="h-12 md:h-20 flex items-center">
                {categoryId ? (
                    <SubTitle
                        className="text-lg md:text-2xl"
                        title="ویرایش دسته بندی"
                    ></SubTitle>
                ) : (
                    <SubTitle
                        className="text-lg md:text-2xl"
                        title="افزودن دسته بندی"
                    ></SubTitle>
                )}
            </div>
            <div className="w-full sm:w-1/3 pt-8 md:pt-10">
                <Input
                    label={true}
                    labelTitle="عنوان دسته بندی"
                    element="input"
                    type="text"
                    className="bg-background border border-border h-11 rounded-xl w-full outline-none px-2 text-title"
                />
            </div>
            <div className="inline-flex items-center gap-3 mt-5">
                {categoryId ? (
                    <>
                        <PrimaryButton
                            clickEvent={() => editCategory()}
                            icon="#check"
                            title="بروزرسانی"
                        ></PrimaryButton>
                        <PrimaryButton
                            className="bg-red-500"
                            clickEvent={() => navigate(-1)}
                            icon="#x-mark"
                            title="بازگشت"
                        ></PrimaryButton>
                    </>
                ) : (
                    <PrimaryButton
                        clickEvent={() => addNewCategory()}
                        icon="#check"
                        title="ثبت دسته بندی جدید"
                    ></PrimaryButton>
                )}
            </div>
        </div>
    );
}
