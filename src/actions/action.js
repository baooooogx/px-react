import fetch from 'isomorphic-fetch';

const NAV = 'NAV_ITEM';
const BUTTON_CLICK = 'BUTTON_CLICK';
const CHANGE_TEXT = 'CHANGE_TEXT';
const GET_DATA = 'GET_DATA';

const baseURL = typeof window === 'undefined' ? process.env.BASE_URL || 'http://localhost:8889' : '';

function receivePosts(subreddit, json) {
  return {
    type: 'RECEIVE_POSTS',
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

export function nav(text) {
    return {
        type: NAV,
        text
    }
}

export function changeText() {
    return {
        type: CHANGE_TEXT
    }
}

export function buttonClick() {
    return {
        type: BUTTON_CLICK
    }
}

export function getData() {
    return (dispatch) => {
        return fetch('/data/test', {
                method: 'post',
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            })
            .then((res) => res.json())
            .then((data) => dispatch({
                type: GET_DATA,
                data: data
            }))
    }
}

