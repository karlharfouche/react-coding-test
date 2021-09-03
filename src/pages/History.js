import Events from "../components/Events"
import { ThemeProvider } from "@material-ui/styles"
import { theme } from "../theme"
import { CssBaseline } from "@material-ui/core"

function History() {
    return (
        <>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Events /> 
        </ThemeProvider> 
        </>
    )
}

export default History
