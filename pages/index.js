import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "../redux/reducers"
import Tab from "./table";

const store = createStore(reducer)

const Index = () => {
    return (
        <Provider store={store}>
            <Tab store={store}></Tab>
        </Provider>
    )
};

export default Index;