export default function PrimaryButton(props) {
    return (
        <button style={props.style} type={props.type} className='flex items-center justify-center gap-2 bg-primary rounded-full text-white w-full h-11 transition-opacity hover:opacity-80'>
            <span className='font-YekanBakh-SemiBold text-sm'>
                {
                    props.title
                }
            </span>
            <span>
                <svg className='w-5 h-5'>
                    <use href='#arrow-up-left'></use>
                </svg>
            </span>
        </button>
    )
}