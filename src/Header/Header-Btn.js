function HeaderBtn(props) {
    return (
        <a className='hidden lg:flex items-center justify-center rounded-full bg-zinc-100 w-10 h-10' href='#'>
            <svg className='w-5 h-5'>
                <use href='#moon'></use>
            </svg>
        </a>
    )
}

export default HeaderBtn