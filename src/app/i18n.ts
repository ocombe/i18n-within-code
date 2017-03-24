import { InjectionToken } from "@angular/core";

export interface I18nToken {
    [key: string]: I18nDef;
}

export class I18_DEFS {}

export type I18nDef = string | {
    id?: string;
    meaning?: string;
    description?: string;
};

// this is a decorator
// it would be used to add desc, meaning and id on properties for extraction
// and to return translations instead of the original value for JIT at runtime by replacing the getter
// it could also make i18n keys immutable to avoid confusion
export function I18n(label?: I18nDef) {
    return function (target: any, key: string) { };
}

export declare interface I18nService {
    (str: string, params: any[] | {[key: string]: any}): string;

    // example for later, not used yet
    html(str: string): string;
}

/**
 * Based on goog.getMsg
 * Use parameters with {$key} with key in params as {key: value}
 * Or use numerical parameters like {$0}
 * Ref: https://github.com/google/closure-library/blob/db9bc1a2e71d4b6ee8f57eebe37eb0c6494e9d7e/closure/goog/base.js#L2379-L2387
 * @param str message to translate
 * @param params an object or array of parameters
 */
export const I18nService: I18nService = function (str: string, params?: any[] | {[key: string]: any}): string {
    if (params) {
        str = str.replace(/\{\$([^}]+)}/g, function (match, key) {
            return (params != null && key in params) ? params[key] : match;
        });
    }
    return str;
} as any;

// example for later, not used yet
I18nService.html = (str: string) => str;
