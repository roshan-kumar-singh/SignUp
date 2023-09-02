import { User } from './../models/user.model';
import {createAction, props} from '@ngrx/store';

export const SIGNUP_START = '[auth page] signup start';
export const SIGNUP_SUCCESS = '[auth page] signup success';

export const signupStart = createAction(
    SIGNUP_START,
    props<{firstName: string; 
        lastName: string; 
        email: string; 
        password: string; 
        mobile: string}>()
);

export const signupSuccess = createAction(
    SIGNUP_SUCCESS,
    props<{user: User}>()
);