export default function Accordion(props) {
    return (
        <div className='pt-3 space-y-2'>
            <button onClick={props.clickEvent} type='button'
                    className='text-sm font-YekanBakh-SemiBold text-title flex items-center justify-between bg-secondary rounded-xl overflow-hidden h-11 w-full px-3'>
                <div className='flex items-center gap-2'>
                                        <span>
                                            <svg className='w-5 h-5'>
                                                <use href='#grid-boxes-outline'></use>
                                            </svg>
                                        </span>
                    <span>
                                            {
                                                props.title
                                            }
                                        </span>
                </div>
                <span>
                                        <svg
                                            style={props.state ? {transform: 'rotate(180deg)'} : {transform: 'rotate(0deg)'}}
                                            className='w-5 h-5 transition-all'>
                                            <use href='#chevron-down'></use>
                                        </svg>
                                    </span>
            </button>
            <div style={props.state ? {display: 'block'} : {display: 'none'}}
                 className='p-3 rounded-xl overflow-hidden bg-secondary space-y-2'>
                {
                    props.items.map(item => (
                        <label key={item.id} className='flex items-center gap-3 text-sm cursor-pointer'>
                            <input value={item.title} onChange={props.itemSelectionHandler(this)}
                                className='bg-border w-4 h-4 appearance-none rounded-full checked:bg-transparent transition-all border-primary border-0 checked:border-[5px]'
                                type="radio" name='category'/>
                            <span>
                                                {
                                                    item.title
                                                }
                                            </span>
                        </label>
                    ))
                }
            </div>
        </div>
    )
}