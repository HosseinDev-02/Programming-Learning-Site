import SubTitle from "../../Titles/SubTitle";
import {useState} from "react";
import UserNotification from "./UserNotification";

export default function Notifications () {

    const [userNotifications, setUserNotifications] = useState([
        {
            id: 1,
            title: 'ورود به سیستم',
            text: 'در صورتی که قکر میکنید این کار توسط شما انجام نشده هرچه سریعتر به بخش مدیریت نشست ها در بخش پنل کاربری خود در نابغه مراجعه کنید و نشست مورد نظر را حذف کنید .',
            time: '6'
        },
        {
            id: 2,
            title: 'ورود به سیستم',
            text: 'در صورتی که قکر میکنید این کار توسط شما انجام نشده هرچه سریعتر به بخش مدیریت نشست ها در بخش پنل کاربری خود در نابغه مراجعه کنید و نشست مورد نظر را حذف کنید .',
            time: '4'
        }
    ])

    return (
        <div>
            <SubTitle title='اعلانات'></SubTitle>
            <div className='mt-5 space-y-5'>
                {
                    userNotifications.map(notification => (
                        <UserNotification key={notification.id} {...notification}></UserNotification>
                    ))
                }
            </div>
        </div>
    )
}