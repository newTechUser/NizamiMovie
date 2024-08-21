export interface UserData {
    id: number;
    years: number[];
    content: {
        pic: string;
        typeOfPearl: string;
        headerOfPearl: string;
        textOfPearl: string;
    };
}

export const users: UserData[] = [
    {
        id: 1,
        years: [2000, 1940, 1945, 2008, 2010, 2012, 2021, 2022],
        content: {
            pic: "../../src/assets/imgs/pearls/Arshinmal.png",
            typeOfPearl: "OPERETTA",
            headerOfPearl: "Arshin Mal Alan",
            textOfPearl:
                "Arshin Mal Alan is a 4-act operetta composed by Azerbaijani composer Uzeyir Hajibeyov. The libretto of the work was also written by Uzeyir Hajibeyov in 1913 in St. Petersburg. The premiere of the opera was held on October 25, 1913 at the Haji Zeynelabidin Tagiyev Theater in Baku.",
        },
    },
];
