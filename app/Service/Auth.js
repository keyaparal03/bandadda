import HttpClient from '@Utils/HttpClient'
import Storage from '@Utils/Storage'
import { AsyncStorage } from 'react-native';
//import NotificationService from '@Service/Notification'


// function getOTP(mobile) {
//     let endpoint = 'otp';
//     let data = {
//         mobile: mobile,
//     }

//     return HttpClient.post(endpoint, data)
// }

async function login(email, password) {
    let endpoint = 'login.php?email3='+email+'&pass1='+password;
    // let token = await NotificationService.getPushToken();
    let data = {
        email: email,
        password : password,
        // expo_token : token,
    }


    console.log(data);
    return HttpClient.post(endpoint, data);
}

function sndOtp(mobile,refCode) {
    let endpoint = 'sendOtp.php?mobile='+mobile+'&refCode='+refCode;
    return HttpClient.post(endpoint);
}

function matOtp(mobile,otp,refCode,referByStatus) {
    let endpoint = 'matchOtp.php?mobile='+mobile+'&otp='+otp+'&refCode='+refCode+'&referByStatus='+referByStatus;
    return HttpClient.post(endpoint);
}

function updateDetails(data,u_id) {
    let endpoint = 'updateDetails.php?u_id='+u_id;
    return HttpClient.post(endpoint,data);
}


async function getAccount() {
    return await Storage.get('account');
}

async function setAccount(data) {
    return await Storage.set('account', data);
}

async function logout() {
    
    return await Storage.set('account', null);
    console.log('logout');
}

export default {
    sndOtp,
    login,
    logout,
    matOtp,
    getAccount,
    setAccount,
    updateDetails
}