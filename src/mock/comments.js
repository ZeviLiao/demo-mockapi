
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter'
let mock = new MockAdapter(axios)
mock.onGet(/\/comments\/fake/).reply(200,
    [
        { id: 1, name: 'John Smith' },
        { id: 2, name: 'John Doe' }
    ]
)

export default axios
