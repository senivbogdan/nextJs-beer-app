import "../styles/global.css"
import {Provider} from "react-redux";
import {GlobalStyles} from "../styles/globalStyles";
import createReduxStore from "../service/store"

const store = createReduxStore()

export default function MyApp({Component, pageProps}) {
    return (
            <Provider store={store}>
                <GlobalStyles/>
                <Component
                    {...pageProps}/>
            </Provider>
    )
}