import React from "react";
import { observer } from "mobx-react";

import View from "./components/View";
import CounterDisplay from "./components/CounterDisplay";
import Flex from "./components/Flex";
import Button from "./components/Button";

const App = observer(function App({ counterState }) {
    return (
        <View>
            <CounterDisplay count={counterState.count} />
            <Flex>
                <Button primary onClick={counterState.increaseCount}>Click me</Button>
                <Button onClick={counterState.resetCount}>Reset Count</Button>
            </Flex>
        </View>
    );
});

export default App;
