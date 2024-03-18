import number from './number';
import data from './data';
import element from './element';
import event from './event';
import common from './common';
import color from './color';
import file from './file';
import string from './string';
import platform from './platform';
import speech from './speech';
declare const obj: {
    number: {
        formatNumber(num: number): string | number;
        isNumber(num: any): boolean;
        add(...values: number[]): number;
        subtract(...values: number[]): number;
        mutiply(...values: number[]): number;
        divide(...values: number[]): number;
    };
    data: {
        remove(el: HTMLElement | Window | Document, key: string): void;
        has(el: HTMLElement | Window | Document, key: string): any;
        get(el: HTMLElement | Window | Document, key: string): any;
        set(el: HTMLElement | Window | Document, key: string, value: any): void;
    };
    element: {
        isWindow(data: any): any;
        getElementPoint(el: HTMLElement, root: HTMLElement): {
            left: number;
            top: number;
            right: number;
            bottom: number;
        };
        isContains(parentNode: HTMLElement, childNode: HTMLElement): boolean | undefined;
        isParentNode(parentNode: HTMLElement, childNode: HTMLElement): boolean;
        children(el: HTMLElement, selector: string): Element[];
        siblings(el: HTMLElement, selector: string): Element[];
        rem2px(num: number): number;
        px2rem(num: number): number;
        width(el: string | HTMLElement): number;
        height(el: string | HTMLElement): number;
        removeClass(el: HTMLElement, className: string): void;
        addClass(el: HTMLElement, className: string): void;
        hasClass(el: HTMLElement, className: string): boolean;
        scrollTopBottomTrigger(el: string | HTMLElement | Window, callback: (options: any) => void): void;
        getScrollWidth(el: string | HTMLElement): number;
        getScrollHeight(el: string | HTMLElement): number;
        setScrollTop(options: {
            el?: string | HTMLElement | Window | undefined;
            time?: number | undefined;
            number?: number | undefined;
        }): Promise<void>;
        getScrollTop(el: string | HTMLElement | Window): number;
        getScrollLeft(el: string | HTMLElement | Window): number;
        setScrollLeft(options: {
            el?: string | HTMLElement | Window | undefined;
            time?: number | undefined;
            number?: number | undefined;
        }): Promise<void>;
        getCssStyle(el: HTMLElement, cssName: string): string;
        getCssSelector(selector: string): {
            type: string;
            value: any;
        };
        getElementBounding(el: string | HTMLElement): {
            left: number;
            top: number;
            right: number;
            bottom: number;
        };
        isElement(el: any): any;
        string2dom(str: string, parentTag?: string): Element | Element[];
    };
    event: {
        on(el: HTMLElement, eventName: string, fn: (e: Event) => void, options: AddEventListenerOptions | undefined): void;
        off(el: HTMLElement, eventName: string): void;
        get(el: HTMLElement): any;
    };
    common: {
        matchingText(text: string, param: string): boolean;
        getUrlParams(name: string): string | null;
        isEmptyObject(obj: any): boolean;
        equal(a: any, b: any): boolean;
        isObject(val: any): boolean;
        copyText(text: string): Promise<void>;
        clone(data: any): any;
    };
    color: {
        rgb2hsv(rgb: number[]): number[];
        hsv2rgb(hsv: number[]): number[];
        rgb2hex(rgb: number[]): string;
        hex2rgb(hex: string): number[];
    };
    file: {
        getImageUrl(file: File): string;
        dataFileToBase64(file: File): Promise<unknown>;
        dataBase64toFile(base64String: string, fileName: string): File;
        compressImage(file: File, opts: {
            width?: number | undefined;
            quality?: number | undefined;
            mimeType?: string | undefined;
            maxSize?: number | undefined;
            minSize?: number | undefined;
        }): Promise<unknown>;
    };
    string: {
        insert(original: string, str: string, index: number): string;
        delete(original: string, index: number, num: number): string;
        replace(original: string, start: number, end: number, str: string): string;
        trim(str: string, global?: boolean): string;
    };
    platform: {
        language(): any;
        device(): {
            PC: boolean;
            Mobile: boolean;
            iPhone: boolean;
            Phone: boolean;
            iPad: boolean;
            Tablet: boolean;
            WindowsPhone: boolean;
        };
        browser(): {
            Edge: boolean;
            weixin: boolean;
            QQ: boolean;
            QQBrowser: boolean;
            UC: boolean;
            Chrome: boolean;
            Firefox: boolean;
            sougou: boolean;
            Safari: boolean;
        };
        browserKernel(): "" | "opera" | "webkit" | "gecko";
        os(): {
            Windows: boolean;
            Windows_CPU: string;
            Windows_Version: string;
            Mac: boolean;
            Mac_Version: string;
            ios: boolean;
            ios_Version: string;
            Android: boolean;
            Android_Version: string;
            Linux: boolean;
            HarmonyOS: boolean;
            Ubuntu: boolean;
        };
    };
    speech: {
        start(text: string, params: {
            pitch?: number | undefined;
            rate?: number | undefined;
            volume?: number | undefined;
            start?: ((e: Event, options: {
                text: string;
                pitch: number;
                rate: number;
                volume: number;
            }) => void) | undefined;
            end?: ((e: Event, options: {
                text: string;
                pitch: number;
                rate: number;
                volume: number;
            }) => void) | undefined;
            pause?: ((e: Event, options: {
                text: string;
                pitch: number;
                rate: number;
                volume: number;
            }) => void) | undefined;
            resume?: ((e: Event, options: {
                text: string;
                pitch: number;
                rate: number;
                volume: number;
            }) => void) | undefined;
            error?: ((e: Event, options: {
                text: string;
                pitch: number;
                rate: number;
                volume: number;
            }) => void) | undefined;
        }): void;
        stop(): void;
        pause(): void;
        resume(): void;
    };
};
export { obj as default, number, data, element, event, common, color, file, string, platform, speech };
