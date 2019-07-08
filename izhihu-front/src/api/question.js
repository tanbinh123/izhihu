import axios from './request'
import {
  BASE_URL
} from './config'
// 问题

export const reqCreateQuestion = params => { // 写文章写想法
  return axios.post(`${BASE_URL}/question/create`, params).then(res => res.data)
}

export const reqFindQuestionById = params => { // 根据问题id获得问题情况
  return axios.post(`${BASE_URL}/question/findById?` + params).then(res => res.data)
}

export const reqAnswer = params => { // 写回答
  return axios.post(`${BASE_URL}/question/answer`, params).then(res => res.data)
}

export const reqFindTopicByQues = params => { // 获得话题通过问题id
  return axios.post(`${BASE_URL}/question/findTopicByQues?` + params).then(res => res.data)
}
