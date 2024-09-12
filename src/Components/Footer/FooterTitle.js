export default function FooterTitle(props) {
    return (
        <div className='text-title font-YekanBakh-Black flex items-center gap-3'>
            <div className='flex items-center gap-1'>
                <span className='w-1 h-1 rounded-full bg-title'></span>
                <span className='w-2 h-2 rounded-full bg-title'></span>
            </div>
            <h4 className=''>
                {props.title}
            </h4>
        </div>
    )
}