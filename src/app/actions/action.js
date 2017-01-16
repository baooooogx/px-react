const NAV = 'NAV_ITEM';
const BUTTON_CLICK = 'BUTTON_CLICK';
const CHANGE_TEXT = 'CHANGE_TEXT';

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

