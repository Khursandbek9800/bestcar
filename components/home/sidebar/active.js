import {useRouter} from 'next/router'
import {connect} from "react-redux";
import {toggle} from '../../../redux/reducers/sidebar'


function ActiveLink({children, href, toggle}) {
    const router = useRouter()
    const style1 = {
        color: router.pathname === href ? 'white' : 'black',
        fontSize: 14,
        fontWeight: 700,
        marginLeft: "30px",
    }
    const style2 = {
        backgroundColor: router.pathname === href ? 'rgba(0,0,0,0.5)' : "transparent",
        width: "200px",
        height: "50px",
        display: "flex",
        alignItems: "center",
        borderBottom:"1px solid rgba(120,120,120,0.5)"
    }
    const handleClick = (e) => {
        e.preventDefault()
        router.push(href)
        toggle()
    }
    return (
        <div style={style2} onClick={handleClick}>
            <a href={href}  style={style1}>
                {children}
            </a>
        </div>
    )
}

const mapStateToProps = (state) => ({
    open: state.sidebar.open,
});

export default connect(
    mapStateToProps,
    {toggle}
)(ActiveLink);