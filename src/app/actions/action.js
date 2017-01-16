export const nav = 'NAV_ITEM';
export const BUTTON_CLICK = 'BUTTON_CLICK';
export const CHANGE_TEXT = 'CHANGE_TEXT';

export function nav(text) {
    return {
        type: nav,
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
        type: BUTTON_CLICK;
    }
}

