import Service from "./Service";

export default function Services() {

    let services = [
        {id: 1, title: 'چالش برانگیز', color: '#10b981', icon: '#puzzle'},
        {id: 2, title: 'پروژه محور', color: '#eab308', icon: '#fire'},
        {id: 3, title: 'جامع', color: '#3b82f6', icon: '#book'},
        {id: 4, title: 'به روز', color: '#22c55e', icon: '#speed'},
        {id: 5, title: 'ویدیویی', color: '#f43f5e', icon: '#video'}
    ]

    return (
        <section>
            <div className="container">
                <div className='bg-zinc-100 dark:bg-mirage rounded-2xl flex items-center flex-col'>
                    <div
                        className='inline-flex items-center justify-center rounded-2xl border border-zinc-200 dark:border-zinc-800 h-12 px-8 bg-white dark:bg-black font-semibold -translate-y-1/2'>
                        <h3 className='text-title dark:text-white text-lg font-YekanBakh-ExtraBold'>
                            چرا آکــــادمــــــی نابغه؟
                        </h3>
                    </div>
                    <div className='flex items-center justify-center flex-wrap gap-5 lg:gap-10 pb-2.5 sm:pb-5 px-2.5 sm:px-5'>
                        {
                            services.map(service => {
                                return <Service key={service.id} {...service}></Service>
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}