import { render } from "lit";
import { cleanUpBlock } from "Utils/cleanUpBlock";
import { renderVBFooter } from "Components/dvag-m-n03-vb-footer/dvag-m-n03-vb-footer.template.ts";
import "./vb-contact-with-map.scss";

export interface VbContactWithMapArgs {
  imageSrc: string;
  imageAlt: string;
  headline: string;
  direction: string;
  address: string[];
  phone: string;
  mobile: string;
  email: string;
}

const vbContactWithMapTemplate = (vbContactWithMapArgs: VbContactWithMapArgs) => {
  return renderVBFooter(vbContactWithMapArgs);
};

export default function (block: HTMLElement) {
  const vbContactWithMapArgs: VbContactWithMapArgs = {
    imageSrc: block.children[0].querySelector("img")?.src || "",
    imageAlt: block.children[0].querySelector("img")?.alt || "",
    headline: block.children[1].textContent?.trim() || "",
    direction: block.children[2].textContent?.trim() || "",
    address: block.children[3].textContent?.trim().split(",") || [],
    phone: block.children[4].textContent?.trim() || "",
    mobile: block.children[5].textContent?.trim() || "",
    email: block.children[6].textContent?.trim() || "",
  };

  cleanUpBlock(block);
  render(vbContactWithMapTemplate(vbContactWithMapArgs), block);
}
