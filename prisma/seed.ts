import prisma from "../src/database/db.js";

async function main() {
    await prisma.breed.createMany({
        data: [{
            "breedName": "Androide", //1
        },
        {
            "breedName": "Terráqueo", //2
        },
        {
            "breedName": "Kaiohshin", //3
        },
        {
            "breedName": "Majin", //4
        },
        {
            "breedName": "Namekuseijin", //5
        },
        {
            "breedName": "Raça do Freeza", //6
        },
        {
            "breedName": "Saiyajin", //7
        },
        {
            "breedName": "Desconhecida", //8
        },
        ]
    });

    await prisma.characters.createMany({
        data: [
            {
                "name": "Goku",
                "level": 8001,
                "transformations": 6,
                "image": "https://sm.ign.com/ign_br/screenshot/default/goku_an6e.jpg",
                "breedId": 7
            },
            {
                "name": "Vegeta",
                "level": 7000,
                "transformations": 4,
                "image": "https://upload.wikimedia.org/wikipedia/pt/a/ac/Vegeta.jpg",
                "breedId": 7
            },
            {
                "name": "Piccolo",
                "level": 3020,
                "transformations": 1,
                "image": "https://upload.wikimedia.org/wikipedia/pt/thumb/d/d1/Piccolo_Jr.jpg/220px-Piccolo_Jr.jpg",
                "breedId": 5
            },
            {
                "name": "Majin boo",
                "level": 1000,
                "transformations": 3,
                "image": "https://kanto.legiaodosherois.com.br/w728-h381-gnw-cfill-gcc-f:fbcover/wp-content/uploads/2021/12/legiao_PkIrOyHTvUoa.jpg.webp",
                "breedId": 4
            },
            {
                "name": "Mr. Popo",
                "level": 1030,
                "transformations": 1,
                "image": "https://static.wikia.nocookie.net/overtier_br/images/8/88/Popo.png/revision/latest?cb=20200413202124&path-prefix=pt-br",
                "breedId": 8
            },
            {
                "name": "Androide 19",
                "level": 85000,
                "transformations": 0,
                "image": "https://static.wikia.nocookie.net/dragonball/images/d/d1/A19-Chapter143.png/revision/latest?cb=20200721183014",
                "breedId": 1
            },

        ]
    }
    );


    

    await prisma.goods.createMany({
        data: [{
            "name": "bills",
            "image": "https://static.wikia.nocookie.net/overtier_br/images/b/b9/Bills.png/revision/latest/scale-to-width-down/666?cb=20200816214635&path-prefix=pt-br",
        },
        {
            "name": "Belmond",
            "image": "https://static.wikia.nocookie.net/dragonball/images/0/0f/Ronald_McDestruction.png/revision/latest?cb=20170823160402",
        },
        {
            "name": "Quitela",
            "image": "https://atualinerd.com.br/wp-content/uploads/2022/05/Dragon-Ball-Super-Quitela.png",
        },
        {
            "name": "Champa",
            "image": "https://atualinerd.com.br/wp-content/uploads/2022/05/Dragon-Ball-Super-Champa.png",
        },
        {
            "name": "Rumsshi",
            "image": "https://atualinerd.com.br/wp-content/uploads/2022/05/Dragon-Ball-Super-Rumsshi.png",
        },
        {
            "name": "Mosco",
            "image": "https://atualinerd.com.br/wp-content/uploads/2022/05/Dragon-Ball-Super-Mosco_Mule.png",
        },
        {
            "name": "Heles",
            "image": "https://atualinerd.com.br/wp-content/uploads/2022/05/Dragon-Ball-Super-Heles.png",
        },
        {
            "name": "Sidra",
            "image": "https://atualinerd.com.br/wp-content/uploads/2022/05/Dragon-Ball-Super-Sidra.png",
        },
        {
            "name": "Giin",
            "image": "https://atualinerd.com.br/wp-content/uploads/2022/05/Dragon-Ball-Super-Giin.png",
        },
        {
            "name": "Liquiir",
            "image": "https://atualinerd.com.br/wp-content/uploads/2022/05/Dragon-Ball-Super-Liquiir.png",
        },
        {
            "name": "Arak",
            "image": "https://atualinerd.com.br/wp-content/uploads/2022/05/Dragon-Ball-Super-Arak.png",
        },
        {
            "name": "Iwan",
            "image": "https://atualinerd.com.br/wp-content/uploads/2022/05/Dragon-Ball-Super-Iwan.png",
        },

     

    ]
    })

}

main()
    .then(() => {
        console.log("Okay!")
    })
    .catch(e => {
        console.log(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })