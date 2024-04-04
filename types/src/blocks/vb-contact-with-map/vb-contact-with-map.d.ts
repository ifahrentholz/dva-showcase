import "./vb-contact-with-map.scss";
export interface VbContactWithMapArgs {
    imageSrc: string;
    headline: string;
    direction: string;
    address: string[];
    phone: string;
    mobile: string;
    email: string;
}
export default function (block: HTMLElement): void;
