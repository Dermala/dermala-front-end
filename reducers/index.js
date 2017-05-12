import { combineReducers } from 'redux';

import loginReducer from './loginReducer';
import navReducer from './navReducer';
import profileReducer from './profileReducer';
import registerReducer from './registerReducer';

const AppReducer = combineReducers({
    login: loginReducer,
    nav: navReducer,
    profile: profileReducer,
    register: registerReducer
});

export default AppReducer;