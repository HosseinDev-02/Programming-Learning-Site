export default function LikeButton(props) {
    return (
        <button style={props.style}
            className='flex items-center justify-center w-11 h-11 rounded-full bg-secondary shrink-0 hover:text-red-500 transition-colors relative'
            type='button'>
            <svg className='w-5 h-5'>
                <use href='#heart'></use>
            </svg>
            {
                props.count && (
                    <span className='absolute -right-1 -top-1 bg-red-500 w-4 h-4 rounded-full text-xs text-white flex items-center justify-center'>
                        {
                            props.count
                        }
                    </span>
                )
            }
        </button>
    )
}