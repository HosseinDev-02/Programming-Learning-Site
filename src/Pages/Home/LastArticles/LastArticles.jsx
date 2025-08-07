import SectionTitle from "../Titles/SectionTitle";
import Article from "../Article/Article";
import { useEffect, useState } from "react";
import { articles as data } from "../../data";


export default function Articles() {
    const [lastArticles, setLastArticles] = useState([])
    useEffect(() => {
        getLastArticles();
    }, []);


    const getLastArticles = () => {
        const mainArticles = data.slice().reverse()
        setLastArticles(mainArticles)

    }

    return (
        <section>
            <div className="container">
                <div className="bg-gradient-to-l from-secondary to-background rounded-2xl flex flex-col lg:flex-row items-center justify-between p-5 lg:p-3 xl:p-10 gap-10">
                    <SectionTitle
                        text="نوشتن کار جالبیه که از هزاران سال همراه ما بوده و کمک کرده تا همیشه به روز باشیم، ما در نابغه فضای رو به شکلی آماده کردیم تا شما  بتونید ایده‌ها و مطالب جالب حوزه برنامه‌نویسی رو در اختیار هزاران برنامه‌نویس عضو نابغه قرار بدید."
                        title="از گوشه و اطراف دنیای برنامه نویسی"
                        className={"!items-start"}
                        textColor="#6b7280"
                    ></SectionTitle>
                    <div className="grid grid-cols-1 grid-rows-2 sm:grid-cols-2 gap-5 sm:pb-8">
                        {lastArticles.length &&
                            lastArticles.splice(0, 4).map((article) => {
                                return (
                                    <Article
                                        roundedImg={true}
                                        key={article.id}
                                        {...article}
                                    ></Article>
                                );
                            })}
                    </div>
                </div>
            </div>
        </section>
    );
}
