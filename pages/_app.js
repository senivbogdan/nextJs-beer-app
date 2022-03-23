import "../styles/global.css"
import  { Provider} from "react-redux";
import {GlobalStyles} from "../styles/globalStyles";
import {createStore} from "redux";
import reducer from "../redux/reducers";


const store = createStore(reducer)

export default function MyApp({Component, pageProps}) {
    return (
            <Provider store={store}>
                <GlobalStyles/>
                <Component
                    {...pageProps}
                />
            </Provider>
    )


}