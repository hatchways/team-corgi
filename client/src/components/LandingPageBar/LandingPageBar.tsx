import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { JsxEmit } from 'typescript';
import useStyles from './useStyles';


interface Props {
    signupLink: string;
    loginLink: string;
    sitterLink: string;
}

const LandingPageBar = ({ signupLink, loginLink, sitterLink}: Props) : JSX.Element => {
    const classes = useStyles();

    return (
        <Box className={classes.sitterLoginSignup}>
            <Link to={sitterLink} className={classes.becomeASitterText}>
                BECOME A SITTER
            </Link>
        <Link className={classes.loginButtonText} to={loginLink}>
          <Button variant="outlined" className={classes.loginButton}>
                LOGIN
          </Button>
        </Link>
            <Link className={classes.signupButtonText} to={signupLink}>
            <Button className={classes.signupButton}>SIGNUP</Button>
        </Link>
      </Box>
    );
};

export default LandingPageBar;