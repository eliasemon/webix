import React from 'react';
import { LoginInfo } from '@root/types/logInInfo';

const usersInfo = {
    userName: 'Rony Dj',
    avater: 'https://example.com/image.jpg',
};
const useGetLogInInfo = () => {
    const [loginInfo, setLogin] = React.useState<LoginInfo>({
        isLogin: true,
        ...usersInfo,
    });
    const getLogoutHandler = () => {
        setLogin({ isLogin: false });
    };
    return { loginInfo, getLogoutHandler };
};

export default useGetLogInInfo;
