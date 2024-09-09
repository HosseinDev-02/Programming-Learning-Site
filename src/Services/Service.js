export default function Service(props) {
    console.log(props)
    return (
        <div style={{color: props.color}} className='flex items-center flex-col gap-3 animate-pulse'>
            <span className='flex items-center justify-center w-20 h-20 rounded-full bg-white dark:bg-black'>
                <svg className='w-8 h-8'>
                    <use href={props.icon}></use>
                </svg>
            </span>
            <span className='font-semibold text-sm'>
                {props.title}
            </span>
        </div>
    )
}