import home from '../../assets/img/home.png';
import disigner from '../../assets/img/designer.jpg'
import games from '../../assets/img/games.jpg'
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
        icon: home,
        path: '/',
        name: ''
    },
    {
        id: 2,
        name: 'Dizaynerlar',
        path: '/designer',
        icon: disigner,
    },
    {
        id: 3,
        name: 'O’yin uchun',
        path: '/games',
        icon: games
    },
    {
        id: 4,
        name: 'Dasturlash',
        path: '/programming',
        icon: programming
    },

]