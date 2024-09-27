export default function DatePicker(props) {
    return (
        <div className={`${props.className}`}>
            <button onClick={props.dateModalHandler}
                    className={`flex items-center justify-between px-3 rounded-xl bg-secondary h-11 w-full border border-border text-title ${props.buttonStyle}`}>
                            <span className='text-xs font-YekanBakh-Bold'>
                                {
                                    props.dateState ? props.dateState : 'انتخاب کنید ...'
                                }
                            </span>
                <span>
                                <svg className='w-5 h-5'>
                                    <use href='#chevron-down'></use>
                                </svg>
                            </span>
            </button>
            <div className='relative w-full'>
                <ul onClick={props.setDateState(this)} style={props.dateModalShow ? {display: 'flex', backgroundColor: props.modalBg} : {}}
                    className='text-center rounded-xl border border-border user-edit-date-menu z-10 bg-background hidden flex-col child:py-2 child:rounded-xl mt-2 child:px-4 child-hover:bg-secondary child:cursor-pointer h-48 text-xs font-YekanBakh-SemiBold text-title overflow-y-auto'>
                    {
                        props.items.map(item => <li style={props.dateState == item.title ? {backgroundColor: 'rgb(var(--color-secondary))'} : {}} key={item.id}>{item.title}</li>)
                    }
                </ul>
            </div>
        </div>
    )
}