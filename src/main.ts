import "Components/header.ts";
import "Components/icon/dva-e-icon.ts";
import "Components/dva-e-lazy-image/dva-e-lazy-image.ts";
import "Services/fetch.service.ts";
import "Components/dvag-m-c11-accordion/dvag-m-c11-accordion.ts";
import { ConsentManagementService } from "Services/ConsentManagementService.ts";

import { BlockService } from "./services/block.service.ts";
import { SectionService } from "./services/section.service.ts";
import { MainService } from "./services/main.service.ts";

(async function () {
  // preloadLcpImageCandidate();
  const blockService = new BlockService();
  const sectionService = new SectionService(blockService);
  const main = new MainService(sectionService, blockService);
  await main.init();
})();

declare global {
  interface Window {
    dvaShowTimeout: number;
    hlx: {
      RUM_MASK_URL: string;
      codeBasePath: string;
      lighthouse: boolean;
    };
    Granite: any;
    _dvaConsentManagementService: ConsentManagementService;
  }
}
