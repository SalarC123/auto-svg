import { AppBar, IconButton, Toolbar } from '@material-ui/core'
import {Link} from 'react-router-dom'
import Typography from '@material-ui/core/Typography';

function Navbar() {

    return (
        <div>
            <AppBar style={{position:"relative", background:"transparent"}}>
                <Toolbar>
                    <Link style={{textDecoration:"none"}} to="/">
                        <Typography variant="h1" style={{color:'black', fontSize:'2rem'}}>Auto SVG</Typography>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;