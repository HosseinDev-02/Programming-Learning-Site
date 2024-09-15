export default function Article (props) {
    return (
        props.id === 2 ? <div className='bg-background rounded-xl p-4 sm:mt-8'>
            <div className='relative'>
                <a href="#">
                    <img className='w-full h-full object-cover rounded-xl'
                         src={props.img}
                         alt=""/>
                </a>
                <button type='button'
                        className='flex items-center justify-center rounded-full w-9 h-9 bg-secondary absolute left-3 -bottom-3 hover:text-red-500 transition-colors'>
                    <svg className='w-5 h-5'>
                        <use href='#heart'></use>
                    </svg>
                </button>
            </div>
            <div className='space-y-3 mt-3'>
                <h6 className='mt-2 text-title text-sm font-YekanBakh-Bold'>
                    <a className='hover:text-primary transition-colors' href="#">
                        {props.title}
                    </a>
                </h6>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-1'>
                                        <span
                                            className='flex items-center justify-center rounded-full w-[30px] h-[30px] overflow-hidden border border-white'>
                                            <img className='w-full h-full object-cover'
                                                 src={props.writerImg}
                                                 alt=""/>
                                        </span>
                        <a className='hover:text-primary transition-colors text-xs font-YekanBakh-Bold text-title dark:text-white dark:hover:text-primary'
                           href="#">
                            {props.writer}
                        </a>
                    </div>
                    <a href='#'
                       className='flex items-center justify-center px-4 h-8 rounded-full bg-primary/10 hover:opacity-80 transition-opacity'>
                        <span className='text-xxs text-primary font-YekanBakh-Bold'>{props.category}</span>
                    </a>
                </div>
                <div
                    className='flex items-center gap-1 text-xs justify-end font-YekanBakh-SemiBold dark:text-gray-500'>
                                    <span>
                                        <svg className='w-5 h-5'>
                                            <use href='#clock-outline'></use>
                                        </svg>
                                    </span>
                    <span>زمان مطالعه :</span>
                    <span className='dark:text-white'>
                                        {props.time}
                                    </span>
                </div>
            </div>
        </div> : <div className='bg-background rounded-xl p-4'>
            <div className='relative'>
                <a href="#">
                    <img className='w-full h-full object-cover rounded-xl'
                         src={props.img}
                         alt=""/>
                </a>
                <button type='button'
                        className='flex items-center justify-center rounded-full w-9 h-9 bg-secondary absolute left-3 -bottom-3 hover:text-red-500 transition-colors'>
                    <svg className='w-5 h-5'>
                        <use href='#heart'></use>
                    </svg>
                </button>
            </div>
            <div className='space-y-3 mt-3'>
                <h6 className='mt-2 text-title text-sm font-YekanBakh-Bold'>
                    <a className='hover:text-primary transition-colors' href="#">
                        {props.title}
                    </a>
                </h6>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-1'>
                                        <span
                                            className='flex items-center justify-center rounded-full w-[30px] h-[30px] overflow-hidden border border-white'>
                                            <img className='w-full h-full object-cover'
                                                 src={props.writerImg}
                                                 alt=""/>
                                        </span>
                        <a className='hover:text-primary transition-colors text-xs font-YekanBakh-Bold text-title dark:text-white dark:hover:text-primary'
                           href="#">
                            {props.writer}
                        </a>
                    </div>
                    <a href='#'
                       className='flex items-center justify-center px-4 h-8 rounded-full bg-primary/10 hover:opacity-80 transition-opacity'>
                        <span className='text-xxs text-primary font-YekanBakh-Bold'>{props.category}</span>
                    </a>
                </div>
                <div
                    className='flex items-center gap-1 text-xs justify-end font-YekanBakh-SemiBold dark:text-gray-500'>
                                    <span>
                                        <svg className='w-5 h-5'>
                                            <use href='#clock-outline'></use>
                                        </svg>
                                    </span>
                    <span>زمان مطالعه :</span>
                    <span className='dark:text-white'>
                                        {props.time}
                                    </span>
                </div>
            </div>
        </div>
    )
}