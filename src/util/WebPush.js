import axios from "axios";

export const subscribe = async () => {
    const registration = await navigator.serviceWorker.ready;
    const subscription = (await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: 'BNoDfHx24caiadzbDNLXI8fEldnfzKsxapHicxIrcLQExFRWGhd5mVnDWSvEcBnD4KI8rse3tNXpqhTGkQ6ib38'
    })).toJSON();

    const {endpoint, keys} = subscription;

    axios.post('/api/webpush', {
        endpoint: endpoint,
        auth: keys?.auth,
        p256dh: keys?.p256dh
    });
}