
export interface ButtonCategoryType {
    id: number,
    name: string,
    path: string
}
export const ButtonCategory: ButtonCategoryType[] = [
    {
        id: 1,
        name: 'Dizaynerlar',
        path: '/designer',
    },
    {
        id: 2,
        name: 'O’yin uchun',
        path: '/games',
    },
    {
        id: 3,
        name: 'Dasturlash',
        path: '/programming',
    },

]
export interface CharacteristicType {
    id: number,
    name: string,
}
export const Characteristic: CharacteristicType[] = [
    {
        id: 1,
        name: 'Xarakteristika',
    },
    {
        id: 2,
        name: 'To’liq ma’lumot ',
    },


]