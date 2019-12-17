import moment, { Moment } from "moment";
import * as $ from 'jquery';

/**
 * @author Nico
 * @version 1.0.0
 * 
 */
export class DatePickerComponent{
    private readonly previousButton: JQuery = $('[previousDate]');
    private readonly nextButton: JQuery = $('[nextDate');

    public constructor(currentDate:moment.Moment){
        this.nextHandler(currentDate);
        this.previousHandler(currentDate);
    }

    private nextHandler(currentDate : Moment) : void {
        this.nextButton.on(
            'click',
            (event: any) : void => {
                currentDate.add(1, 'days'),
                $('#current-date').html(currentDate.format('D MMMM YYYY')),
                console.log(currentDate);
            }
        )
    }

    private previousHandler(currentDate : Moment) : void {
       
        this.previousButton.on(
            'click',
            (event: any) : void => {
                currentDate.subtract(1, 'days'),
                $('#current-date').html(currentDate.format('D MMMM YYYY')),
                console.log(currentDate);
            }
        )
    }
}