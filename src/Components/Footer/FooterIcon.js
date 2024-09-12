export default function FooterIcon(props) {
    return (
        <div className='flex items-center justify-center rounded-full w-12 h-12 bg-secondary dark:text-gray-500 text-gray-600'>
            <span>
                <svg className='w-5 h-5'>
                    <use href={props.icon}></use>
                </svg>
            </span>
        </div>
    )
}