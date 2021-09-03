import Adresses from "../components/Adresses"
import { ThemeProvider } from "@material-ui/styles"
import { theme } from "../theme"
import { CssBaseline } from "@material-ui/core"

function Payloads() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Adresses /> 
        </ThemeProvider>
    )
}

export default Payloads
