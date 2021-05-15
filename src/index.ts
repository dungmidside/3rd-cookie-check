interface Result {
    supported: boolean | null
    timeout?: boolean
}

interface EventCode {
    supported: string
    unsupported?: string
}

interface Params {
    timeout?: number
    eventCode?: EventCode
    iframeSrc?: string
}

let thirdCookieSupport: boolean | null = null

export default function cookieCheck(param: Params): Promise<Result> {
    if (thirdCookieSupport !== null) {
        return Promise.resolve({ supported: thirdCookieSupport })
    }

    const { timeout, eventCode, iframeSrc } = param;

    return new Promise<Result>((resolve) => {
        const frame = document.createElement('iframe')
        frame.id = '3pc'
        frame.src =
            iframeSrc ||
            'https://dungmidside.github.io/3rd-cookie-check/checkpage.html'
        frame.style.display = 'none'
        frame.style.position = 'fixed'

        window.addEventListener(
            'message',
            function listen(event) {
                const { data: eventData } = event
                if (
                    // handle for custom event code
                    (eventCode &&
                        (eventData === eventCode.supported ||
                            eventData === eventCode.unsupported)) ||
                    // fallback case
                    (!eventCode &&
                        (eventData === '3pc.supported' ||
                            eventData === '3pc.unsupported'))
                ) {
                    thirdCookieSupport = eventCode
                        ? eventData === eventCode.supported
                        : eventData === '3pc.supported'
                    resolve({ supported: thirdCookieSupport, timeout: false })
                    document.body.removeChild(frame)
                    window.removeEventListener('message', listen)
                }
            },
            false
        )

        // Use timeout in case browser not trigger event message for our code
        setTimeout(function () {
            if (thirdCookieSupport === null) {
                thirdCookieSupport = false
                resolve({ supported: thirdCookieSupport, timeout: true })
                document.body.removeChild(frame)
            }
        }, timeout || 1000)

        document.body.appendChild(frame)
    })
}
