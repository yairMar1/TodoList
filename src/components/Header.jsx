import './Header.css'
import sun from '../../public/images/sun.png'
import moon from '../../public/images/moon.png'

function Header({ mode, setMode }) {
    function handleClick() {
        setMode(mode === 'lightMode' ? 'darkMode' : 'lightMode')
    }

    return (
        <div className="header">
            <div className="headerTitle">
                Todo List
            </div>
            <div className="modeButton">
                <img onClick={handleClick} src={mode === 'lightMode' ? sun : moon}
                    alt="ImageModeIcon" />
            </div>
        </div>
    )
}

export default Header