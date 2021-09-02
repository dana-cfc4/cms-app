import { combineReducers } from 'redux';
import sider from './sider'
import toolbar from './toolbar'
import settings from './settings'
import contentTypes from './contentTypes'
import contentTypeItems from './contentTypeItems'

export default combineReducers({
  sider,
  toolbar,
  settings,
  contentTypes,
  contentTypeItems
});