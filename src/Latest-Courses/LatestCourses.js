import SectionTitle from "../SectionTitle/SectionTitle";
import SectionLinkBtn from "../SectionLinkBtn/SectionLinkBtn";
export default function LatestCourses() {
    return (
        <section>
            <div className="container">
                {/*  Section Header  */}
                <div className='bg-gradient-to-l from-zinc-100 dark:from-mirage to-white dark:to-black rounded-2xl flex items-center justify-between p-2.5 sm:p-5'>
                    <SectionTitle></SectionTitle>
                    <SectionLinkBtn></SectionLinkBtn>
                </div>
            </div>
        </section>
    )
}