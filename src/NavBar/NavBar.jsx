import './NavBar.scss'


const NavBar = () => {
  return (
    <nav className="flex place-content-between items-center	 px-16 py-6 bg-white">
        <div className='name'>
            LUCRECIA MAYA
        </div>
        <div className=' gap-8 '>
            <ul className="flex gap-8 pages tracking-wide">
                <li><a href="">Home</a></li>
                <li><a href="">Work</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar