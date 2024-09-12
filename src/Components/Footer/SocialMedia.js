export default function SocialMedia(props) {
    return (
        <a className='flex items-center justify-center rounded-full w-12 h-12 bg-zinc-100 text-gray-600 dark:text-white dark:bg-mirage dark:hover:text-primary hover:text-primary transition-colors' href="#">
            <span>
                <svg className='w-5 h-5'>
                    <use href={props.icon}></use>
                </svg>
            </span>
        </a>
    )
}