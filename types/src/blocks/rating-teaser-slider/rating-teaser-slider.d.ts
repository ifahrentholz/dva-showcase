import "./rating-teaser-slider.scss";
import "Components/dvag-m-c01e-teaser/dvag-m-c01e-teaser";
import "Components/dva-m-rating-box/dva-m-rating-box";
import "Components/dvag-m-c07-rating-teaser-slider/dvag-m-c07-rating-teaser-slider";
import "Components/dvag-m-basic-slider/dvag-m-basic-slider";
import "Components/dvag-m-c01e-teaser-overlay/dvag-m-c01e-teaser-overlay";
export interface SlidesJsonResponse {
    total: number;
    offset: number;
    limit: number;
    data: SlidesJsonResponseItem[];
    ":type": string;
}
export interface SlidesJsonResponseItem {
    consultingRating: string;
    satisfactionRating: string;
    serviceRating: string;
    rating: string;
    vbName: string;
    vbImageUrl: string;
    vbHomepageUrl: string;
    vbLocation: string;
    headline: string;
    text: string;
    reviewFrom: string;
    reviewerCustomerSince: string;
    ratingDate: string;
}
export default function (block: HTMLElement): Promise<void>;
