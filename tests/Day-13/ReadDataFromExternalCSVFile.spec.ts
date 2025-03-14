import {test} from '@playwright/test';
import fs from 'fs';  //built in library for filesystem which provides functions to interact with the files
import {parse} from 'csv-parse/sync';

const records= parse(fs.readFileSync("testData/testData.csv"),{//read the data from csv file and convert into object or array of objects
columns:true,//it will consider first row as columns or headings or keys
skip_empty_lines:true,// skip the rows having empty data 
delimiter:','//data seperated character
})



//for using CSV data we need to install one package : npm install csv-parse 

records.forEach((data) => {
   
    test(`Get data from CSV with ${data.ID} & ${data.FirstName}` ,async({page})=>{

        await page.goto('https://demoqa.com/automation-practice-form');
        await page.getByRole('textbox', { name: 'First Name' }).fill(data.FirstName);
        await page.getByRole('textbox', { name: 'Last Name' }).click(data.LastName);

        
    
    
    })
});


for(const record of records){

    test(`Get dataa from CSV with ${record.ID} & ${record.FirstName}` ,async({page})=>{

        await page.goto('https://demoqa.com/automation-practice-form');
        await page.getByRole('textbox', { name: 'First Name' }).fill(record.FirstName);
        await page.getByRole('textbox', { name: 'Last Name' }).click(record.LastName);

        })
}

