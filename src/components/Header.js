import Button from "./Button";
import PropTypes from "prop-types"


const Header = ({title, onAdd, showAdd}) => {
    return (
        <header className={"header"}>
            <h1>{title}</h1>
            <Button onClick={onAdd} color={showAdd ? "red" : "green"} text={showAdd ? "close" : "open"}/>


        </header>
    )
}

Header.defaultProps = {
    title: "task tracker"
}
Header.propTypes = {
    title: PropTypes.string
}
export default Header