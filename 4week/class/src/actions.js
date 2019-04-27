// action type
import axios from "axios";
export const REQUEST_CONTENTS = "REQUEST_CONTENTS";
export const RECEIVE_CONTENTS = "RECEIVE_CONTENTS";
export const CHANGE_FULL_CONTENT = "CHANGE_FULL_CONTENT";

// active creator(액션 생성자)
const requestContents = () => ({type: REQUEST_CONTENTS})
const receiveContents = content => ({
    type:RECEIVE_CONTENTS, 
    contents: content,
    receiveAt: Date.now()
});
export const changeFullContent = content => ({
    type: CHANGE_FULL_CONTENT,
    content : content
});

//비도기 action(async action)
export const fetchContents = () => {
    return dispatch => {
        dispatch(requestContents());//디스패치로 액션함수를 실행시키는것
        return API()
            .then(({data}) => setContents(data))
            .then(contents => {//then->비동기함수가 끝나고나서 바로 실행시키는것.순차적으로.
                dispatch(changeFullContent(contents[0]));
                dispatch(receiveContents(contents.slice(1,contents.length)));//액션을 실행시키려면 무조건 디스패치를 실행시켜야함.기존의 셋스테이트랑 비슷.변경된 사항을 스토어에 보내주는것 receiveContents
            });
    };
};
const API = ({token="", maxResults=30}) => {
	const URL = "https://www.googleapis.com/youtube/v3/"

	let api = URL+`videos?part=snippet&chart=mostPopular&key=${token}&maxResults=${maxResults}`

	return axios.get(api)
};
const setContents = (data) => { 
    let list = []
    console.log(data)
     data.items.forEach((item, index) => {
         list.push({id:item.id,name:item.snippet.title})
     })
     return list
};

const token = 'AIzaSyAsNDtwveKzPT0SWzREwuBpmswH18CIffg';
const maxResults = 30;