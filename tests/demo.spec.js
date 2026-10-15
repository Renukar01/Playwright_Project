import {test} from '@playwright/test'
import { log } from 'node:console'

test('Print Message',async()=>{
    log("Good Morning")
})

test('Print Afternoon',async()=>{
    log("Good Afternoon")
})