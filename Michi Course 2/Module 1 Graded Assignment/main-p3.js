// ===== YOUR TASK =====
// Define dismissNotification() to remove #notification-banner (returning
// true, or false if it is not present), then wire it to run when the
// banner is clicked. Full details are in the problem description.
//
// TODO: Write dismissNotification() and add the click listener below.

const notBanner = document.querySelector("#notification-banner");


function dismissNotification(){
    const notificationBanner = document.querySelector('#notification-banner');
    if (notificationBanner === null){
        return false;
    }else{
        notificationBanner.remove();
        return true;

    }

}

notBanner.addEventListener('click', dismissNotification)