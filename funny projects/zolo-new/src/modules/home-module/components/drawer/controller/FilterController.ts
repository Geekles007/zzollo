import { IFilterControl } from "../../../../../model/IFilterControl";

class FilterController {
    
    /**
     * @returns Array<IFilterControl>
     */
    getFilters = (): Array<IFilterControl> => {
        const filters: Array<IFilterControl> = [
            {
                labelText: "Choose source",
                type: "source",
                list: [
                    {
                        name: "all",
                        label: "From [Github / GitLab / Bitbucket]"
                    },
                    {
                        name: "github",
                        label: "GitHub"
                    },
                    {
                        name: "gitlab",
                        label: "GitLab"
                    },
                    {
                        name: "bitbucket",
                        label: "BitBucket"
                    },
                ]
            },
            {
                labelText: "Choose language",
                type: "lang",
                list: [
                    {
                        name: "all",
                        label: "By languages"
                    }
                ]
            },
            {
                labelText: "Sort by",
                type: "sort",
                list: [
                    {
                        name: "all",
                        label: "By (Stars / Issues / fork)"
                    },
                    {
                        name: "start",
                        label: "Sort by Stars"
                    },
                    {
                        name: "issue",
                        label: "Sort by Issues"
                    },
                    {
                        name: "fork",
                        label: "Sort by Forks"
                    },
                ]
            },
            {
                labelText: "Order by",
                type: "order",
                list: [
                    {
                        name: "all",
                        label: "Filter by (Acsending/Descending))"
                    },
                    {
                        name: "asc",
                        label: "Ascending order"
                    },
                    {
                        name: "desc",
                        label: "Descending order"
                    }
                ]
            }
        ];

        return filters;
    }

    /**
     * @param event: React.ChangeEvent
     * @param type: string
     */
    handleChangeOption = (event: React.ChangeEvent, type: string) => {

    }
}

export default new FilterController;