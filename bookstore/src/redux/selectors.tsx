import {useSelector} from 'react-redux';
import {RootState} from './store';

export const userState = useSelector((state: RootState) => state.user.user);