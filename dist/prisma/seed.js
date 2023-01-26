var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import prisma from "../src/database/db.js";
function main() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.breed.createMany({
                        data: [{
                                "breedName": "Androide"
                            },
                            {
                                "breedName": "Terráqueo"
                            },
                            {
                                "breedName": "Kaiohshin"
                            },
                            {
                                "breedName": "Majin"
                            },
                            {
                                "breedName": "Namekuseijin"
                            },
                            {
                                "breedName": "Raça do Freeza"
                            },
                            {
                                "breedName": "Saiyajin"
                            },
                            {
                                "breedName": "Desconhecida"
                            },
                        ]
                    })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, prisma.characters.createMany({
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
                        })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, prisma.goods.createMany({
                            data: [{
                                    "name": "bills",
                                    "image": "https://static.wikia.nocookie.net/overtier_br/images/b/b9/Bills.png/revision/latest/scale-to-width-down/666?cb=20200816214635&path-prefix=pt-br"
                                },
                                {
                                    "name": "Belmond",
                                    "image": "https://static.wikia.nocookie.net/dragonball/images/0/0f/Ronald_McDestruction.png/revision/latest?cb=20170823160402"
                                },
                                {
                                    "name": "Quitela",
                                    "image": "https://atualinerd.com.br/wp-content/uploads/2022/05/Dragon-Ball-Super-Quitela.png"
                                },
                                {
                                    "name": "Champa",
                                    "image": "https://atualinerd.com.br/wp-content/uploads/2022/05/Dragon-Ball-Super-Champa.png"
                                },
                                {
                                    "name": "Rumsshi",
                                    "image": "https://atualinerd.com.br/wp-content/uploads/2022/05/Dragon-Ball-Super-Rumsshi.png"
                                },
                                {
                                    "name": "Mosco",
                                    "image": "https://atualinerd.com.br/wp-content/uploads/2022/05/Dragon-Ball-Super-Mosco_Mule.png"
                                },
                                {
                                    "name": "Heles",
                                    "image": "https://atualinerd.com.br/wp-content/uploads/2022/05/Dragon-Ball-Super-Heles.png"
                                },
                                {
                                    "name": "Sidra",
                                    "image": "https://atualinerd.com.br/wp-content/uploads/2022/05/Dragon-Ball-Super-Sidra.png"
                                },
                                {
                                    "name": "Giin",
                                    "image": "https://atualinerd.com.br/wp-content/uploads/2022/05/Dragon-Ball-Super-Giin.png"
                                },
                                {
                                    "name": "Liquiir",
                                    "image": "https://atualinerd.com.br/wp-content/uploads/2022/05/Dragon-Ball-Super-Liquiir.png"
                                },
                                {
                                    "name": "Arak",
                                    "image": "https://atualinerd.com.br/wp-content/uploads/2022/05/Dragon-Ball-Super-Arak.png"
                                },
                                {
                                    "name": "Iwan",
                                    "image": "https://atualinerd.com.br/wp-content/uploads/2022/05/Dragon-Ball-Super-Iwan.png"
                                },
                            ]
                        })];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .then(function () {
    console.log("Okay!");
})["catch"](function (e) {
    console.log(e);
    process.exit(1);
})["finally"](function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
