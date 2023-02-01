import { sum } from "../ helps/math.helper.js"


describe('testando Math helper', () => {
    const resul = sum(1, 2)

    expect (resul).toBe(3)
})