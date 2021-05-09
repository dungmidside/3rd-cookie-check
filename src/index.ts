interface Result {
    support: boolean | null
    timeout?: boolean
}

let thirdCookieSupport: boolean | null = null

export default function cookieCheck(
    timeout?: number,
    eventCode?: string
): Promise<Result> {
    if (thirdCookieSupport !== null) {
        return Promise.resolve({ support: thirdCookieSupport })
    }
    return new Promise<Result>((resolve) => {
        const frame = document.createElement('iframe')
        frame.id = '3pc'
        frame.src = 'https://thirdpartycookie.monster'
        frame.style.display = 'none'
        frame.style.position = 'fixed'

        window.addEventListener(
            'message',
            function listen(event) {
                if (
                    (eventCode && event.data === eventCode) ||
                    (!eventCode &&
                        (event.data === '3pc.supported' ||
                            event.data === '3pc.unsupported'))
                ) {
                    thirdCookieSupport = event.data === '3pc.supported'
                    resolve({ support: thirdCookieSupport, timeout: false })
                    document.body.removeChild(frame)
                    window.removeEventListener('message', listen)
                }
            },
            false
        )

        setTimeout(function () {
            if (thirdCookieSupport === null) {
                thirdCookieSupport = false
                resolve({ support: thirdCookieSupport, timeout: true })
                document.body.removeChild(frame)
            }
        }, timeout || 1000)

        document.body.appendChild(frame)
    })
}
