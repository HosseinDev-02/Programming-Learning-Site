import PrimaryButton from "../../Buttons/PrimaryButton";

export default function UserQuestion(props) {
    return (
        <div className='flex md:flex-row flex-col md:items-start gap-5 py-8'>
            <a className='md:w-4/12 flex items-center justify-center rounded-3xl overflow-hidden' href="#">
                <img className='w-full h-full object-cover' src={props.img} alt=""/>
            </a>
            <div className='md:w-8/12 px-5 rounded-3xl bg-gradient-to-b from-secondary to-background'>
                <div className='bg-background rounded-b-3xl p-5'>
                    <h3 className='line-clamp-1'>
                        <a className='font-YekanBakh-Black text-title transition-colors hover:text-primary' href="#">
                            {
                                props.title
                            }
                        </a>
                    </h3>
                </div>
                <div className='mt-5'>
                    {
                        props.status ? (
                            <div className='flex items-center gap-2'>
                                <div className='flex items-center justify-center rounded-full bg-border w-3.5 h-3.5'>
                                    <span className='bg-success w-1.5 h-1.5 rounded-full'></span>
                                </div>
                                <span className='text-success font-YekanBakh-Bold text-sm'>تایید شده</span>
                            </div>
                        ) : (
                            <div className='flex items-center gap-2'>
                                <div className='flex items-center justify-center rounded-full bg-border w-3.5 h-3.5'>
                                    <span className='bg-red-500 w-1.5 h-1.5 rounded-full'></span>
                                </div>
                                <span className='text-red-500 font-YekanBakh-Bold text-sm'>درانتظار تایید</span>
                            </div>
                        )
                    }
                    <p className='line-clamp-2 my-3 text-sm font-YekanBakh-SemiBold'>
                        {
                            props.text
                        }
                    </p>
                    <PrimaryButton style={{width: 'auto', padding: '0 16px'}}
                                   title='مشاهده در صفحه دوره'></PrimaryButton>
                </div>
            </div>
        </div>
    )
}