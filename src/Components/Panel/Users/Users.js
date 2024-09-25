export default function Users() {
    return (
        <table className='w-full'>
            <thead className='text-sm h-12 text-center font-YekanBakh-Black text-title'>
            <tr className='border-b border-border'>
                <th>
                    شناسه
                </th>
                <th>
                    نام
                </th>
                <th>
                    نام خانوادگی
                </th>
                <th>
                    شماره تماس
                </th>
                <th>
                    تاریخ تولد
                </th>
                <th>
                    ایمیل
                </th>
            </tr>
            </thead>
            <tbody>
            <tr className='text-center text-sm h-20 even:bg-background odd:bg-secondary child:px-4'>
                <td className='text-title font-YekanBakh-Black'>
                    1
                </td>
                <td className='font-YekanBakh-SemiBold'>
                    حسین
                </td>
                <td className='font-YekanBakh-SemiBold'>
                    رستمی
                </td>
                <td className='font-YekanBakh-SemiBold'>
                    09123456789
                </td>
                <td className='font-YekanBakh-SemiBold'>
                    1381/03/17
                </td>
                <td className='font-YekanBakh-SemiBold'>
                    rostamidev2002@gmail.com
                </td>
            </tr>
            <tr className='text-center text-sm h-20 even:bg-background odd:bg-secondary child:px-4'>
                <td className='text-title font-YekanBakh-Black'>
                    2
                </td>
                <td className='font-YekanBakh-SemiBold'>
                    پرهام
                </td>
                <td className='font-YekanBakh-SemiBold'>
                    بیات
                </td>
                <td className='font-YekanBakh-SemiBold'>
                    0912090909
                </td>
                <td className='font-YekanBakh-SemiBold'>
                    1380/06/20
                </td>
                <td className='font-YekanBakh-SemiBold'>
                    parham1380@gmail.com
                </td>
            </tr>
            <tr className='text-center text-sm h-20 even:bg-background odd:bg-secondary child:px-4'>
                <td className='font-YekanBakh-Black text-title'>
                    3
                </td>
                <td className='font-YekanBakh-SemiBold'>
                    سینا
                </td>
                <td className='font-YekanBakh-SemiBold'>
                    بی نظیر
                </td>
                <td className='font-YekanBakh-SemiBold'>
                    09109876543
                </td>
                <td className='font-YekanBakh-SemiBold'>
                    1381/05/8
                </td>
                <td className='font-YekanBakh-SemiBold'>
                    sina1381@gmail.com
                </td>
            </tr>
            </tbody>
        </table>
    )
}