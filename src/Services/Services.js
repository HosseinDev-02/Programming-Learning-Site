import Service from "./Service";
export default function Services () {
    return (
            <section>
                <div className="container">
                    <div className='bg-zinc-100 dark:bg-mirage rounded-2xl flex items-center flex-col'>
                        <div className='inline-flex items-center justify-center rounded-2xl border border-zinc-200 dark:border-zinc-800 h-12 px-8 bg-white dark:bg-black font-semibold -translate-y-1/2'>
                            <h2 className='text-title dark:text-white text-lg'>
                                چرا آکــــادمــــــی نابغه؟
                            </h2>
                        </div>
                        <div className='flex items-center justify-center flex-wrap gap-5 lg:gap-10 pb-5 px-5'>
                            <Service icon='#puzzle' title='چالش برانگیز' color='#10b981'></Service>
                            <Service icon='#fire' title='پروژه محور' color='#eab308'></Service>
                            <Service icon='#book' title='جامع' color='#3b82f6'></Service>
                            <Service icon='#speed' title='به روز' color='#22c55e'></Service>
                            <Service icon='#video' title='ویدیویی' color='#f43f5e'></Service>
                            <Service icon='#comments' title='منتورشیپ' color='#06b6d4'></Service>
                        </div>
                    </div>
                </div>
            </section>
    )
}