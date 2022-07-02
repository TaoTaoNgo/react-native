export const DIC_DELETE_ERROR = 'YOU ARE NOT ALLOWED TO DELETE ITEMS: '
export const IMG_DOWNLOAD_ERROR = 'YOU ARE NOT ALLOWED TO DOWNLOAD ITEMS: '
export const DIC_TIME_FORMAT = 'YYYY/MM/DD HH:mm'

export const API_PATH = {
  BASE: 'http://localhost:8080',
  LOGIN: 'auth/login',
  INDEX: 'index',
  DIC_GET_ALL: 'dictionary',
  DIC_REGISTER: '/dictionary',
  // Image
  IMG_GET_LIST_BY_ID: 'dictionary/{dicid}/img',
  IMG_REGISTER_IMAGE: 'dictionary/{dicid}/img',
  IMG_GET_BY_ID: '/dictionary/{dicid}/img/{imgid}',
  DOWNLOAD_IMAGE: '/dictionary/download/img',
  GET_DATA_IMAGE: '/dictionary/getdata/img',
  DIC_DELETE: '/dictionary/{dicid}',
  EXPORT_DICTIONARY: '/dictionary/download/{dicid}',
  DIC_IMPORT: '/dic/import',
  UPDATE_IMG_INFO: '/dictionary/{dicid}/img/{imgid}',
  IMPORT_CSV: '/dictionary/import_csv',
  CMT_GET_INFOR: '/dictionary/{imgid}/like',
  CMT_CHANGE_STATUS_LIKE: '/dictionary/{imgid}/like',
  IMG_GET_TOP: '/dictionary/img/top',
  // My Dictionayry API
  DIC_GET_OF_USER: '/mydictionary/user',
  IMG_GET_MY_LIST_BY_ID: 'mydictionary/{dicid}/img',
  // PERSON
  GET_PERSON: 'dictionary/person',
  REGISTER_NEW_PERSON: 'dictionary/person',
  // Tag of Person
  GET_ALL_TAG_OF_PERSON: '/dictionary/person/image',
  REGISTER_NEW_TAG: '/dictionary/tag',
  // User
  GET_USER_BY_DIC_ID: '/user',
  GET_USER: '/user',
  USER_UPDATE: '/user/update',
  REGISTER_AVATAR: '/user/avatar',
  // Room chat
  JOIN_ROOM: '/dictionary/room',
  GET_ALL_ROOM: '/dictionary/room',
}

export const LOGIN_SCREEN = {
  EXPIRE_TIME: 24 * 60 * 60 * 7 * 1000,
  MESSAGE_LOGIN_SUCCESS: 'Đăng nhập thành công.',
  MESSAGE_LOGIN_WRONG_USERID_PASSWORD: 'Đăng nhập thất bại',
  MESSAGE_LOGIN_INVALID_USERID_PASSWORD:
    'Tên người dùng và mật khẩu không hợp lệ. Vui lòng thử lại.',
  SUCCESS_COLOR: 'success',
  FAILED_COLOR: 'error',
  WARNING_COLOR: 'warning',
  TOKEN_NAME: '',
}

export const ROUTER_PATH = {
  INDEX: '/',
  LOGIN_PATH: '/login',
  MY_DICTIONARY: '/myDictionary',
  DICTIONARY: '/dictionary',
  ACCOUNT: '/account',
  IMAGE_LIST: '/dictionary/{dicid}',
  VIEW_AUTHOR_BY_DICID: '/dictionary/{dicid}/view-author',
  MY_IMAGE_LIST: '/myDictionary/{dicid}',
  IMG_REGISTER_NEW: '/dictionary/{dicid}/register_new_img_info',
  MY_IMG_REGISTER_NEW: '/myDictionary/{dicid}/register_new_img_info',
  FACE_IMPORT: '',
  IMPORT_CSV_MANAGER: '',
  FACE_DICTIONARY_INTEGRATE: '',
  IMAGE_INFO: '/dictionary/{dicid}/image/{imgid}',
  MY_IMAGE_INFO: '/myDictionary/{dicid}/image/{imgid}',
  UPDATE_IMG_INFO: '/myDictionary/{dicid}/image/{imgid}/update_infor_img',
  IMAGE_IMPORT_BY_CSV: '/myDictionary/{dicid}/import_image',
  TAG: '/tag',
  ROOM: '/room',
  ROOM_CHAT: '/room/{roomid}',
  USER: '/view-author',
}

export const ERROR_MESSAGE = {
  LOAD_FILE_FAILED: 'LOAD IMPORT FILE FAILED',
  IMPORT_FILE_FAILED: 'IMPORT FAILED FAILED',
  CREATE_REFERENCE_FAILED: 'CREATE REFERENCE FAILED',
  IMPORT_INVALID_FILE_TYPE: 'IMPORT INVALID FILE TYPE (ONLY ACCEPT .zip)',
  RESOURCE_NOT_FOUND: 'RESOURCE NOT FOUND',
  UNKNOW_ERROR: 'UNKNOWN ERROR',
  FACE_IMPORT_ERROR_ALL: 'FAIL TO IMPORT ALL ITEMS: ',
  NETWORK_ERROR: 'NETWORK_ERROR',
  THRESHOLD_VALUE_ERROR: 'THRESHOLD VALUE ERROR',
  INTEGRATE_FAILED: 'INTEGRATE FAILED',
}
