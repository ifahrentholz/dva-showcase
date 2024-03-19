declare class DebuggerService {
    debugModeActive: boolean;
    log(message?: any, ...args: any[]): void;
    warn(message?: any, ...args: any[]): void;
    error(message?: any, ...args: any[]): void;
}
declare const _default: DebuggerService;
export default _default;
