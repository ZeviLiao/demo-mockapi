
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter'
let mock = new MockAdapter(axios, { delayResponse: 500 })
mock
    .onGet(/\/comments\/fake/).reply(
        (config) => {
            return [200, [
                { id: 1, name: 'John Smith' },
                { id: 2, name: 'John Doe' }
            ]]
        })
    .onAny().passThrough();

export default axios
