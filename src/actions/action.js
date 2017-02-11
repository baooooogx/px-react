import fetch from 'isomorphic-fetch';

const NAV = 'NAV_ITEM';
const BUTTON_CLICK = 'BUTTON_CLICK';
const CHANGE_TEXT = 'CHANGE_TEXT';
const GET_DATA = 'GET_DATA';
const CHANGE_OPTION = 'CHANGE_OPTION';

const baseURL = typeof window === 'undefined' ? process.env.BASE_URL || 'http://localhost:8889' : '';

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

export function changeOption() {
    return {
        type: CHANGE_OPTION
    }
}

export function getData(data) {
    return (dispatch) => {
        return fetch('/data/test', {
                method: 'post',
                body: JSON.stringify(data),
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

