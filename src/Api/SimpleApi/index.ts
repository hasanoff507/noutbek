import home from '../../assets/img/home.png';
import disigner from '../../assets/img/designer.jpg'
import games from '../../assets/img/games.png'
import programming from '../../assets/img/programming.png'
export interface ButtonCategoryType {
    id: number,
    name: string,
    path: string
    icon: any
}
export const ButtonCategory: ButtonCategoryType[] = [
    {
        id: 1,
        name: 'Dizaynerlar',
        path: '/designer',
        icon: disigner,
    },
    {
        id: 2,
        name: 'O’yin uchun',
        path: '/games',
        icon: games
    },
    {
        id: 3,
        name: 'Dasturlash',
        path: '/programming',
        icon: programming
    },

]