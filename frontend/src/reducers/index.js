import { combineReducers } from 'redux';

import announcements from './announcements';
import auth from './auth';

export const reducers = combineReducers({ announcements, auth });