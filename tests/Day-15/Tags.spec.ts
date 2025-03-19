import {test} from '@playwright/test';


//old way

test("Practice test 1 @UI",async()=>{

    console.log("Practice test 1");
    
});


test("Practice test 3 @API @UI",async()=>{

    console.log("Practice test 3");
    
});

test("Practice test 4 @API @UI @Master",async()=>{

    console.log("Practice test 4");
    
});

test.describe("Regression test @Regression",async()=>{


test("test1 under describe @smoke",async()=>{

    console.log("describe 1");
    
})
test("test2 under describe @smoke",async()=>{

    console.log("describe 2");
    
})
})



//new way: In pld way the tag also comes alongwith the testname but in new way tag comes in separate way like filter

test("Practice test new way",{tag:"@Regression"},async()=>{

    console.log("Practice test 2");
    
});

test("Practice multiple tag",{tag:["@Regression","@Smoke","@Master"]},async()=>{

    console.log("Practice test 2");
    
});

test.describe("Regression test",{tag:["@Regression","@Smoke","@Master"]},async()=>{


    test("test1 under describe",{tag:["@smoke","@sanity"]},async()=>{
    
        console.log("describe 1");
        
    })
    test("test2 under describe",{tag:"@UI"},async()=>{
    
        console.log("describe 2");
        
    })
    })

