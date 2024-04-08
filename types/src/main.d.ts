import "Components/header.ts";
import "Components/icon/dva-e-icon.ts";
import "Components/dva-e-lazy-image/dva-e-lazy-image.ts";
import "Services/fetch.service.ts";
import "Components/dvag-m-c11-accordion/dvag-m-c11-accordion.ts";
import { ConsentManagementService } from "Services/ConsentManagementService.ts";
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
