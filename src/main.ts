import * as $ from 'jquery';//Imports jQuery module in Typescript
import * as moment from 'moment';
import {DatePickerComponent} from './date-picker/date-picker-component'
/**
 * Main
 * @author Nico
 * @version 1.0.0
 * Entry point of our app
 */
export const currentDate: moment.Moment= moment().locale('fr');
export class Main{
    
    public constructor(){
        //Get today's date from API
        $.ajax({
            url : 'http://worldclockapi.com/api/json/utc/now',
            method : 'get',
            dataType : 'json',
            success: (data:any)=>{
                currentDate.set(data.currentDateTime);
                console.log(`Date du jour : ${currentDate.toString()}`);
                $('#current-date').html(currentDate.format('D MMMM YYYY')),

                //Sets the event handlers
                new DatePickerComponent(currentDate);
                $('#app-loader').addClass('hidden');
            },

            error: (xhr:any,error: any)=>{
                $('#app-loader').addClass('hidden');
            }
        });
    }         
}



//Boostraping of our app
$(document).ready(()=> {
    console.log('Hi jQuery, document is ready and fully loaded... Run the App!')
    const app: Main = new Main();
});
