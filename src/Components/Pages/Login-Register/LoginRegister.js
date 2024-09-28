import Logo from "../../Logo/Logo";
import SubTitle from "../../Titles/SubTitle";
import PrimaryButton from "../../Buttons/PrimaryButton";
import SiteStructure from "../../SiteStructure/SiteStructure";

export default function LoginRegister() {
    return (
        <SiteStructure>
            <div className='flex items-center justify-center pt-20'>
                <div className='max-w-sm w-full flex flex-col space-y-10'>
                    <div className='bg-gradient-to-b from-secondary to-background rounded-2xl px-5'>
                        <div className='flex items-center rounded-2xl bg-background p-5'>
                            <Logo></Logo>
                        </div>
                        <div className='mt-5'>
                            <SubTitle title='ورود یا ثبت نام'></SubTitle>
                            <span className='text-sm inline-block mt-3'>
                    درود👋
                </span>
                            <p className='text-sm mt-3'>
                                لطفا شماره موبایل یا ایمیل خود را وارد کنید
                            </p>
                            <form action="#" className='mt-3 space-y-3'>
                                <input dir='ltr'
                                       className='outline-none h-11 rounded-2xl bg-secondary border border-border px-2 w-full text-title'
                                       type="text"/>
                                <PrimaryButton className={'flex'} icon='#arrow-up-left' title='برو بریم'
                                               href='#'></PrimaryButton>
                            </form>
                        </div>
                    </div>
                    <div className='bg-secondary rounded-xl p-5 flex items-center justify-center'>
                        <p className='text-xs flex items-center flex-wrap gap-1 text-center justify-center'>
                            ورود شما به معنای پذیرش <a
                            className='hover:text-primary transition-colors text-title font-YekanBakh-SemiBold text-nowrap'
                            href="#">شرایط</a> و <a
                            className='hover:text-primary transition-colors text-title font-YekanBakh-SemiBold text-nowrap'
                            href="#">قوانین حریم خصوصی</a> است.
                        </p>
                    </div>
                </div>
            </div>
        </SiteStructure>
    )
}