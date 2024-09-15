export default function Course(props) {
    return (
        <div>
            <div className='inline-block rounded-3xl overflow-hidden relative'>
                <a href="#">
                    <img className='w-full h-full object-cover' src={props.img} alt=""/>
                </a>
                <a href='#'
                   className='absolute left-3 top-3 flex items-center gap-1 bg-black/20 rounded-full h-11 px-4 text-white hover:opacity-80 transition-all'>
                                <span>
                                    <svg className='w-6 h-6'>
                                        <use href='#grid-boxes'></use>
                                    </svg>
                                </span>
                    <span className='font-YekanBakh-SemiBold text-sm tracking-wider'>
                                    برنامه نویسی
                                </span>
                </a>
            </div>
            <div
                className='bg-gradient-to-b from-background to-secondary mx-5 p-5 rounded-3xl'>
                <div className='flex items-center gap-2'>
                    <span className='block bg-success w-1 h-1 rounded-full'></span>
                    <span className='text-xs font-YekanBakh-Black text-success'>
                          تکمیل شده
                    </span>
                </div>
                <h6 className='mt-2 text-title text-sm font-YekanBakh-Bold'>
                    <a className='hover:text-primary transition-colors' href="#">
                        {props.title}
                    </a>
                </h6>
            </div>
            <div className='p-5'>
                <div className='flex items-center gap-5'>
                    <div className='flex items-center gap-1'>
                                    <span>
                                        <svg className='w-5 h-5'>
                                            <use href='#pepers'></use>
                                        </svg>
                                    </span>
                        <span className='text-xs font-YekanBakh-SemiBold'>
                                        {props.sections}  فصل
                                    </span>
                    </div>
                    <div className='flex items-center gap-1'>
                                    <span>
                                        <svg className='w-5 h-5'>
                                            <use href='#clock'></use>
                                        </svg>
                                    </span>
                        <span className='text-xs font-YekanBakh-SemiBold'>
                                        {props.time}  ساعت
                                    </span>
                    </div>
                </div>
                <div className='flex items-center justify-between mt-3'>
                    <div className='flex items-center gap-2'>
                                    <span className='block overflow-hidden w-10 h-10 rounded-full'>
                                        <img className='w-full h-full object-cover' src={props.teacherImg} alt=""/>
                                    </span>
                        <div className='flex flex-col gap-1 text-xs font-YekanBakh-SemiBold'>
                                        <span className='dark:text-zinc-500'>
                                            مدرس دوره :
                                        </span>
                            <span className='text-title font-YekanBakh-Bold'>
                                            {props.teacher}
                                        </span>
                        </div>
                    </div>
                    {
                        props.isFree ?
                            <div className='flex items-center justify-center h-14'>
                        <span className='text-success font-YekanBakh-Black text-xl'>
                                        رایگان !
                                </span>
                            </div>
                            :
                            props.costPrice !== 0 ?
                            <div className='flex items-end h-14 flex-col justify-center'>
                                <span
                                    className='relative block before:bg-caption before:absolute before:-top-1 before:bottom-0 before:w-full before:my-auto before:h-px before:content[" "] font-YekanBakh-SemiBold'>
                                            {props.price}
                                    </span>
                                {
                                    props.costPrice !== 0 &&
                                    <div className='flex items-center gap-1'>
                                        <span className='text-title font-YekanBakh-Black text-xl'>
                                            {props.costPrice}
                                        </span>
                                        <span className='text-xs'>
                                            تومان
                                        </span>
                                    </div>
                                }
                            </div>
                                :
                                <div className='flex items-center gap-1 h-14'>
                                    <span className='text-title font-YekanBakh-Black text-xl'>
                                        {
                                            props.price
                                        }
                                    </span>
                                    <span className='text-xs'>
                                        تومان
                                    </span>
                                </div>
                    }
                </div>
                <div className='flex items-center gap-3 mt-3'>
                    <a className='flex items-center justify-center gap-2 bg-primary rounded-full text-white w-full h-11 transition-opacity hover:opacity-80'
                       href="#">
                                    <span className='font-YekanBakh-SemiBold text-sm'>
                                        مشاهده دوره
                                    </span>
                        <span>
                                        <svg className='w-5 h-5'>
                                            <use href='#arrow-up-left'></use>
                                        </svg>
                                    </span>
                    </a>
                    <button
                        className='flex items-center justify-center w-11 h-11 rounded-full bg-secondary shrink-0 hover:text-red-500 transition-colors'
                        type='button'>
                        <svg className='w-5 h-5'>
                            <use href='#heart'></use>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}