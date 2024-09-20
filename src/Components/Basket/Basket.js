import SubTitle from "../Titles/SubTitle";
import PrimaryButton from "../Buttons/PrimaryButton";

export default function Basket () {
    return (
        <main className='pt-5'>
            <div className="container">
                <div className='flex items-start gap-5'>
                    <div className='w-8/12'>

                    </div>
                    {/*  user basket left side  */}
                    <div className='w-4/12'>
                        <div className='bg-gradient-to-b from-secondary to-background rounded-2xl pb-5 px-5'>
                            <div className='bg-background flex items-center rounded-b-3xl p-5 mb-5'>
                                <SubTitle title='اطلاعات پرداخت'></SubTitle>
                            </div>
                            <form className='flex items-center gap-3 mb-5' action="#">
                                <div className='flex items-center bg-background rounded-xl px-3 flex-grow'>
                                <span>
                                    <svg className='w-5 h-5'>
                                        <use href='#tag'></use>
                                    </svg>
                                </span>
                                    <input placeholder='کد تخفیف ...'
                                           className='text-sm bg-transparent text-title outline-none px-2 h-11 w-full' type="text"/>
                                </div>
                                <button
                                    className='flex items-center justify-center rounded-xl bg-primary text-white px-4 h-11'>
                                <span>
                                    <svg className='w-5 h-5'>
                                        <use href='#arrow-path'></use>
                                    </svg>
                                </span>
                                </button>
                            </form>
                            <div className='space-y-2 mb-5'>
                                <div className='flex items-center justify-between'>
                                <span className='font-YekanBakh-Bold text-title text-xs'>
                                جمع کل :
                                </span>
                                    <div className='flex items-center gap-1'>
                                        <span className='font-YekanBakh-Black text-title'>1,790,000</span>
                                        <span className='text-xs'>تومان</span>
                                    </div>
                                </div>
                                <div className='flex items-center justify-between'>
                                <span className='font-YekanBakh-Bold text-title text-xs'>
                                    موجودی کیف پول :
                                </span>
                                    <div className='flex items-center gap-1'>
                                        <span className='font-YekanBakh-Black text-title'>520,000</span>
                                        <span className='text-xs'>تومان</span>
                                    </div>
                                </div>
                                <div className='flex items-center justify-between'>
                                <span className='font-YekanBakh-Bold text-title text-xs'>
                                    تخفیف :
                                </span>
                                    <div className='flex items-center gap-1'>
                                        <span className='font-YekanBakh-Black text-title'>185,000</span>
                                        <span className='text-xs'>تومان</span>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center justify-between py-5 border-t border-border'>
                            <span className='font-YekanBakh-Bold text-title text-sm'>
                                مبلغ قابل پرداخت :
                            </span>
                                <div className='flex items-center gap-1'>
                                    <span className='text-title font-YekanBakh-Black text-xl'>1,100,000</span>
                                    <span className='text-xs'>تومان</span>
                                </div>
                            </div>
                        </div>
                        <PrimaryButton title='تکمیل فرایند خرید'></PrimaryButton>
                    </div>
                </div>
            </div>
        </main>
    )
}