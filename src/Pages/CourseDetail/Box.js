export default function Box (props) {
    return (
        <div
            className='bg-secondary rounded-2xl flex flex-col items-center justify-center gap-3 border border-border p-3'>
            <div className='w-12 h-12 rounded-full bg-background flex items-center justify-center'>
                <span className='text-primary'>
                    <svg className='w-5 h-5'>
                        <use href={props.icon}></use>
                    </svg>
                </span>
            </div>
            <div className='flex flex-col items-center gap-1 font-YekanBakh-Bold'>
                <span className='text-xs'>{props.title}</span>
                <span className='text-sm text-title'>{props.text}</span>
            </div>
        </div>
    )
}