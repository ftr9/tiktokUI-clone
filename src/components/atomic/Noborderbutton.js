import './Noborderbutton.css';
const Noborderbutton = ({ name, icon, color }) => {
    return (
        <div className="noborderbutton" id={color}>
            <div>
                {icon}
            </div>
            {name}
        </div>
    )
}

export default Noborderbutton
