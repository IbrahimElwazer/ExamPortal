import axios from 'axios';

export const getQuestions = () => {
    return axios.get('/questions', {
        headers: { 'Content-Type': 'application/json' }
    }).then(res => {
        return res.data
    })
}

export const addQuestion = (title, category) => {
    return axios.post('/questions', {
        title: title,
        category: category
    }, {
        headers: { 'Content-Type': 'application/json' }
    }).then(res => console.log(res))
}

export const deleteQuestion = title => {
    return axios.delete(`/questions/${title}`,{
        headers: { 'Content-Type': 'application/json' }
    }).then(res => console.log(res))
    .catch(err => console.log(err))
}

