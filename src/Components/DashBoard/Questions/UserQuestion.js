import PrimaryButton from "../../Buttons/PrimaryButton";
import { Loader } from "@aws-amplify/ui-react";
import './UserQuestion.css'
import { useState } from "react";
export default function UserQuestion(props) {

    const [isImgLoaded, setIsImgLoaded] = useState(false)
    const imgLoadedHandler = () => setIsImgLoaded(true)

    return (
        <div className='flex md:flex-row flex-col md:items-start gap-5 py-8'>
            <a className='md:w-4/12 block rounded-3xl overflow-hidden' href="/course-detail/react-js">
                <img onLoad={imgLoadedHandler} className='w-full h-full object-cover' src={props.img} alt={props.title} />
                {!isImgLoaded && (
                    <Loader
                        emptyColor="rgb(var(--color-secondary))"
                        filledColor="rgb(var(--color-primary))"
                        className="my-loader"
                    />
                )}
            </a>
            <div className='md:w-8/12 px-5 rounded-3xl bg-gradient-to-b from-secondary to-background'>
                <div className='bg-background rounded-b-3xl p-5'>
                    <h3 className='line-clamp-1'>
                        <a className='font-YekanBakh-Black text-title transition-colors hover:text-primary' href="/course-detail/react-js">
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
                    <PrimaryButton href='/course-detail/react-js' icon='#arrow-up-left' title='مشاهده در صفحه دوره'></PrimaryButton>
                </div>
            </div>
        </div>
    )
}