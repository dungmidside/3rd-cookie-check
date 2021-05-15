interface Result {
    supported: boolean | null;
    timeout?: boolean;
}
interface EventCode {
    supported: string;
    unsupported?: string;
}
interface Params {
    timeout?: number;
    eventCode?: EventCode;
    iframeSrc?: string;
}
export default function cookieCheck(param: Params): Promise<Result>;
export {};
