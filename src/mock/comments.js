import Mock from 'mockjs';

Mock.setup({
    timeout: '200-600'
})

export default Mock.mock(/\/comments\/fake/,
    'get',
    [
        { id: 1, name: 'John Smith' },
        { id: 2, name: 'John Doe' }
    ])