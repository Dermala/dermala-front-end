import { combineReducers } from 'redux';

import loginReducer from './loginReducer';
import navReducer from './navReducer';
import profileReducer from './profileReducer';
import registerReducer from './registerReducer';
import notesReducer from './notesReducer';


const AppReducer = combineReducers({
    login: loginReducer,
    nav: navReducer,
    profile: profileReducer,
    register: registerReducer,
    notes: notesReducer,
});

export default AppReducer;