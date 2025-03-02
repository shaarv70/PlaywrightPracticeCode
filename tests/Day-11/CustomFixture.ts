import {test as base} from  '@playwright/test'; 
//test fixture get requested by test and rerun per test
//worker fixture only runs once per worker

type testFixture={

    fixture1:any,
    fixture2:any
}
type workerFixture={
    fixture3:any
}

export const test=base.extend<testFixture,workerFixture>({

fixture1:async({},use)=>{
const fixture1="Iam fixture1";
console.log("Before part of fixture 1");
await use(fixture1);
console.log("After part of fixture 1");
},
fixture2:async({},use)=>{

        const fixture2="Iam fixture 2";
        await use(fixture2);
},
fixture3:[async({},use)=>{
    const workerFixture="Iam worker fixture 1";
    await use(workerFixture);
    console.log("after part of worker fixture 1");
},{scope:"worker"}]

})
