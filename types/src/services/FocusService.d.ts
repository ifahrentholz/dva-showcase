export interface TrapTargetOptions {
    activeElementBeforeTrapped: Element | null;
    tabableElements: Array<HTMLElement>;
}
declare class FocusService {
    static TABABLE_ELEMENTS_SELECTOR: string;
    private _focusTrapped;
    private tabableElementsMap;
    private trapTargetList;
    eventBindingMap: {};
    eventIdMap: WeakMap<object, any>;
    get focusTrapped(): boolean;
    set focusTrapped(newValue: boolean);
    get currentTrapTarget(): HTMLElement | null;
    get firstTabableElement(): HTMLElement | null;
    get lastTabableElement(): HTMLElement | null;
    get firstTabableElementActive(): boolean;
    get lastTabableElementActive(): boolean;
    trapFocusIn(target: HTMLElement): void;
    unTrapFocusIn(target: HTMLElement): void;
    private handleKeyDown;
    private tabableElementsIn;
    private getFirstTabableElementOf;
    private getLastTabableElementOf;
    private isFirstTabableElementActive;
    private isLastTabableElementActive;
}
declare const _default: FocusService;
export default _default;
