import LikeButton from "../../../Components/Buttons/LikeButton";

export default function Article({
    title,
    className,
    img,
    writer,
    writerImg,
    category,
    time,
    roundedImg,
    id
}) {
    return (
        <div className={`bg-background rounded-xl p-4 ${className} ${id === 2 && 'md:mt-4'} `}>
            <div className="relative">
                <a href="/article-detail/react-vs-vue">
                    {roundedImg ? (
                        <img
                            className="w-full h-full object-cover rounded-xl"
                            src={img}
                            alt={title}
                        />
                    ) : (
                        <img
                            className="w-full h-full object-cover"
                            src={img}
                            alt={title}
                        />
                    )}
                </a>
                <LikeButton shadow={true} className="w-9 h-9 !absolute -bottom-3 left-3"></LikeButton>
            </div>
            <div className="space-y-3 mt-3">
                <h6 className="mt-2 text-title text-sm font-YekanBakh-Bold">
                    <a
                        className="hover:text-primary transition-colors"
                        href="/article-detail/react-vs-vue"
                    >
                        {title}
                    </a>
                </h6>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                        <span className="flex items-center justify-center rounded-full w-[30px] h-[30px] overflow-hidden border border-white">
                            <img
                                className="w-full h-full object-cover"
                                src={writerImg}
                                alt={writer}
                            />
                        </span>
                        <a
                            className="hover:text-primary transition-colors text-xs font-YekanBakh-Bold text-title"
                            href="#"
                        >
                            {writer}
                        </a>
                    </div>
                    <a
                        href="#"
                        className="flex items-center justify-center px-4 h-8 rounded-full bg-primary/10 hover:opacity-80 transition-opacity"
                    >
                        <span className="text-xxs text-primary font-YekanBakh-Bold">
                            {category}
                        </span>
                    </a>
                </div>
                <div className="flex items-center gap-1 text-xs justify-end font-YekanBakh-SemiBold">
                    <span>
                        <svg className="w-5 h-5">
                            <use href="#clock-outline"></use>
                        </svg>
                    </span>
                    <span>زمان مطالعه :</span>
                    <span className="text-title">{time} دقیقه </span>
                </div>
            </div>
        </div>
    );
}
