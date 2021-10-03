export type IRepository = {
    uuid?: string;
    containerLogo?: string;
    name?: string;
    avatar?: string;
    creator?: string;
    stars?: number;
    issues?: number;
    forks?: number;
    description?: string;
    owner?: {
        display_name: string
    }
}