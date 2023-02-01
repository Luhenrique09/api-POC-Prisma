export type CharactersEntity = {
    id: number,
    name: string,
    level: number,
    transformations: number,
    image: string,
    breedId: number
}

export type Breed = {
    id: number,
    breedName: string
}

export type Characters = Omit<CharactersEntity, "id">

export type CharacterFind = {
id: number,
name: string,
level: number,
transformations: number,
image: string,
breed: {
    breedName: string,
}
}