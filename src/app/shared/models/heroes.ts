export interface Hero {
    _name: string,
    _height: string,
    _picture: string,
    _nickname: string
}
export interface EditedHeroes {
    oldValues: Hero;
    newValues: Hero
}