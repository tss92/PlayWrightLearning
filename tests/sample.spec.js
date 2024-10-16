const {test, expect} =require('@playwright/test')

test("My first test", async function({page}){
    expect(12).toBe(12)
})

test.skip("My second test", async function({page}){
    expect(100).toBe(101)
})

test("My third test", async function({page}){
    expect(2.0).toBe(2.0)
})

test("My fourth Test", async function({page}){
    expect("Tanusree Sarkar").toContain("Sarkar")
    expect(true).toBeTruthy()
})

test("My fifth Test", async function({page}){
    expect("Tanusree Sarkar").toContain("Sarkar")
})

test("My sixth Test", async function({page}){
    expect("Tanusree Sarkar".includes("Sarkar")).toBeTruthy()
})

test("My seventh Test", async function({page}){
    expect(false).toBeFalsy()
})