import { LitElement } from "lit";
export declare class SidebarPosts extends LitElement {
    private lastTreePosts;
    connectedCallback(): Promise<void>;
    render(): import("lit").TemplateResult<1> | undefined;
    protected createRenderRoot(): HTMLElement | DocumentFragment;
    private getLastThreePosts;
    private renderPicture;
    private renderPost;
    private getPosts;
}
