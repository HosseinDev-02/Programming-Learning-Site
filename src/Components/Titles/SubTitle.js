export default function SubTitle(props) {
    return (
        <h4 className={`font-YekanBakh-Black text-title relative before:rounded-full before:absolute before:content-[""] before:bg-black dark:before:bg-white before:w-1 before:h-1 pr-7 before:right-0 before:top-0 before:bottom-0 before:my-auto after:rounded-full after:absolute after:content-[""] after:bg-black dark:after:bg-white after:w-2 after:h-2 after:right-2 after:top-0 after:bottom-0 after:my-auto ${props.className}`}>
            {props.title}
        </h4>
    // <div className='text-title font-YekanBakh-Black flex items-center gap-3'>
    //     <div className='flex items-center gap-1'>
    //         <span className='w-1 h-1 rounded-full bg-black dark:bg-white'></span>
    //         <span className='w-2 h-2 rounded-full bg-black dark:bg-white'></span>
    //     </div>
    //     <h4 style={{fontSize: props.fontSize}}>
    //         {props.title}
    //     </h4>
    // </div>
)
}