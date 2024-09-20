export default function SectionLinkBtn(props) {
    return (
        <a style={props.style} className='flex items-center justify-center gap-1 text-title bg-secondary rounded-full w-11 text-sm sm:w-auto sm:px-4 h-11 hover:text-primary transition-colors shrink-0'
           href="#">
            <span className='hidden sm:inline-block font-YekanBakh-SemiBold'>
                {props.text}
            </span>
            <span>
                <svg className='w-5 h-5'>
                    <use href={props.icon}></use>
                </svg>
            </span>
        </a>
    )
}