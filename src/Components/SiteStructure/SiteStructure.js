import Symbol from "../Symbol/Symbol";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function SiteStructure({children}) {
    return (
        <div className='flex flex-col min-h-screen'>
            <Symbol></Symbol>
            <Header></Header>
            {children}
            <Footer></Footer>
        </div>
    )
}