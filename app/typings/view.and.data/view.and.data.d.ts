declare module Autodesk {

    export module Viewing {

        export function Initializer(options: InitializerOptions, callback: () => void): void;

        interface InitializerOptions {
            env: string;
            getAccessToken: Function;
            refreshToken: Function;
        }

        export class Document {
            static load(documentId: string, successCallback: (doc: Document) => void, errorCallback: (msg: string) => void): void;
            static getSubItemsWithProperties(item: Object, properties: Properties, recursive: boolean): Object[];

            getRootItem(): Object;
            getViewablePath(item: Object): string;
        }

        interface Properties {
            type: string;
            role: string;
        }
    }

    export module Viewing.Private {

        export class GuiViewer3D {
            constructor(container: HTMLElement);
            start(): void;
            load(path: any): void;
        }
    }
}
