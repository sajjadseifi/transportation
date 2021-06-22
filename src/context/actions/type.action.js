//Map
export const MAP_INITIAL = 'MAP_INITIAL';
export const MAP_MARK_ADD = 'MAP_MARK_ADD';
export const MAP_MARK_DELETE = 'MAP_MARK_DELETE';
export const MAP_SEARCH_TEXT = 'MAP_SEARCH_TEXT';
export const MAP_SEARCH_CELAR = 'MAP_SEARCH_CELAR';
export const MAP_CENTER = 'MAP_CENTER';
export const MAP_CENTER_BYKEY = "MAP_CENTER_BYKEY"
export const MAP_CENTER_CLEAR = 'MAP_CENTER_CLEAR';
export const MAP_CLEAR = 'MAP_CLEAR';


//Map Form
export const FORMMAP_ACTIVE_SET = "FORMMAP_ACTIVE_SET"
export const FORMMAP_ACTIVE_WITH_KEY = "FORMMAP_ACTIVE_WITH_KEY"
export const FORMMAP_ACTIVE_DEL = "FORMMAP_ACTIVE_DEL"
export const FORMMAP_MARKLIST_SET = "FORMMAP_MARK_LIST"
export const FORMMAP_MARKLIST_DEL = "FORMMAP_MARKLIST_DEL"
export const FORMMAP_DELETE_MARKER = "FORMMAP_DELETE_MARKER"

export const reducerAction = (type, payload) => ({ type, ...payload })