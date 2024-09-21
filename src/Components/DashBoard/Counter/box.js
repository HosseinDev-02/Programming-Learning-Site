export default function Box(props) {
    return (
        <div key={props.id} className='flex items-center gap-3 bg-secondary p-3 rounded-2xl'>
                    <span
                        className='flex items-center justify-center bg-background rounded-full w-12 h-12'
                        style={{color: props.color}}>
                        <svg className='w-5 h-5'>
                            <use href={props.icon}></use>
                        </svg>
                    </span>
            <div className='flex flex-col items-start gap-1'>
                        <span className='text-xs font-YekanBakh-Bold line-clamp-1'>
                            {props.title}
                        </span>
                <span className='text-sm font-YekanBakh-Bold text-title line-clamp-1'>
                            {props.text}
                        </span>
            </div>
        </div>
    )
}