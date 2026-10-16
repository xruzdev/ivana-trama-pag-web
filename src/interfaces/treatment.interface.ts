

export interface Treatment {
    title:string;
    hero:string;
    slug:string
    treatments? : {
        title: string;
        slug: string;
        subTreatments:SubTreatment[]
    }[],
    subTreatments?:SubTreatment[]
}



interface SubTreatment {
    title:string;
    slug:string;
    src:string;
    description:string;
    benefits:string[];
    preCare:string;
    afterCare:string;
    duration?:string;
    reel?:string;
}