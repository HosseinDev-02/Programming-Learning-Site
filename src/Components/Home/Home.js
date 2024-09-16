import Symbol from "../Symbol/Symbol";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

export default function Home() {
    return (
        <div className='text-caption font-YekanBakh-Regular bg-white dark:bg-black min-h-screen'>
            <Symbol></Symbol>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </div>
    )
}