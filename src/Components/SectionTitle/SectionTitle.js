export default function SectionTitle(props) {
    return (
        <div style={{alignItems: props.alignItems}} className='flex items-center gap-2.5 sm:gap-5 shrink-0'>
            <span className='flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white shrink-0'>
                <svg className='w-5 h-5'>
                    <use href='#education'></use>
                </svg>
            </span>
            <div className='lg:max-w-80'>
                <h2 className='font-YekanBakh-Black text-lg sm:text-2xl text-primary'>
                    {props.title}
                </h2>
                <span style={{color: props.color, fontSize: props.fontSize, lineHeight: props.lineHeight}}
                      className='text-sm sm:text-base inline-block mt-2 font-YekanBakh-SemiBold'>
                    {props.text}
                </span>
            </div>
        </div>
    )
}