import {NavLink} from 'react-router-dom'

interface Props{
    to: string
}

const LinkButton = (props:Props) => {
    return (
        <NavLink to={props.to}></NavLink>
    )
}

export default LinkButton