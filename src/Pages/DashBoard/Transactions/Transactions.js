import SubTitle from "../../../Components/Titles/SubTitle";

export default function Transactions() {
    return (
        <div>
            <SubTitle title='تاریخچه تراکنشها'></SubTitle>
            <div className='mt-8'>
                <table className='w-full'>
                    <thead className='text-xs h-12 text-center'>
                    <tr className='border-b border-border'>
                        <th>
                            شماره پیگیری
                        </th>
                        <th>
                            وضعیت
                        </th>
                        <th>
                            شرح تراکنش
                        </th>
                        <th>
                            مبلغ
                        </th>
                        <th>
                            تاریخ ایجاد
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className='text-center text-sm h-20 even:bg-background odd:bg-secondary child:px-4'>
                        <td className='text-title font-YekanBakh-Black'>
                            1057
                        </td>
                        <td>
                            <div className='flex justify-center items-center gap-2'>
                                <div className='w-3.5 h-3.5 rounded-full bg-border flex items-center justify-center'>
                                    <span className='w-1.5 h-1.5 rounded-full bg-success'></span>
                                </div>
                                <span className='font-YekanBakh-Bold text-success'>موفق</span>
                            </div>
                        </td>
                        <td className=''>
                            <div className='inline-flex flex-col items-center justify-center gap-1'>
                                <span className='font-YekanBakh-Bold text-xs'>خرید عضویت ویژه</span>
                                <span className='font-YekanBakh-Black text-title text-right'>سه ماهه</span>
                            </div>
                        </td>
                        <td>
                            <div className='flex items-center justify-center gap-1'>
                                <span className='font-YekanBakh-Black text-title'>1,070,000</span>
                                <span className='text-xs'>تومان</span>
                            </div>
                        </td>
                        <td className='text-xs'>
                            20 اردیبهشت 1403
                        </td>
                    </tr>
                    <tr className='text-center text-sm h-20 even:bg-background odd:bg-secondary child:px-4'>
                        <td className='text-title font-YekanBakh-Black'>
                            1057
                        </td>
                        <td>
                            <div className='flex justify-center items-center gap-2'>
                                <div className='w-3.5 h-3.5 rounded-full bg-border flex items-center justify-center'>
                                    <span className='w-1.5 h-1.5 rounded-full bg-success'></span>
                                </div>
                                <span className='font-YekanBakh-Bold text-success'>موفق</span>
                            </div>
                        </td>
                        <td className=''>
                            <div className='inline-flex items-center flex-col justify-center gap-1'>
                                <span className='font-YekanBakh-Bold text-xs'>خرید دوره</span>
                                <span className='font-YekanBakh-Black text-title text-right'>دوره پروژه محور React و Next</span>
                            </div>
                        </td>
                        <td>
                            <div className='flex items-center justify-center gap-1'>
                                <span className='font-YekanBakh-Black text-title'>1,070,000</span>
                                <span className='text-xs'>تومان</span>
                            </div>
                        </td>
                        <td className='text-xs'>
                            20 اردیبهشت 1403
                        </td>
                    </tr>
                    <tr className='text-center text-sm h-20 even:bg-background odd:bg-secondary child:px-4'>
                        <td className='text-title font-YekanBakh-Black'>
                            1057
                        </td>
                        <td>
                            <div className='flex justify-center items-center gap-2'>
                                <div className='w-3.5 h-3.5 rounded-full bg-border flex items-center justify-center'>
                                    <span className='w-1.5 h-1.5 rounded-full bg-success'></span>
                                </div>
                                <span className='font-YekanBakh-Bold text-success'>موفق</span>
                            </div>
                        </td>
                        <td className=''>
                            <div className='inline-flex flex-col items-center justify-center gap-1'>
                                <span className='font-YekanBakh-Bold text-xs'>خرید عضویت ویژه</span>
                                <span className='font-YekanBakh-Black text-title text-right'>سه ماهه</span>
                            </div>
                        </td>
                        <td>
                            <div className='flex items-center justify-center gap-1'>
                                <span className='font-YekanBakh-Black text-title'>1,070,000</span>
                                <span className='text-xs'>تومان</span>
                            </div>
                        </td>
                        <td className='text-xs'>
                            20 اردیبهشت 1403
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}