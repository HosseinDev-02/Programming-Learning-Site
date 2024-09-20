export default function LikeButton(props) {
    return (
        <button style={props.style}
            className='flex items-center justify-center w-11 h-11 rounded-full bg-secondary shrink-0 hover:text-red-500 transition-colors'
            type='button'>
            <svg className='w-5 h-5'>
                <use href='#heart'></use>
            </svg>
        </button>
    )
}