import * as $ from 'jquery';//Imports jQuery module in Typescript
/**
 * Main
 * @author Nico
 * @version 1.0.0
 * Entry point of our app
 */
export class Main{

    public constructor(){

        console.log('Hello Typescript!');

            //Remove loader
            setTimeout(() => {
                    $('#app-loader').addClass('hidden');
                },
            1500
        );
    }

}

//Boostraping of our app
$(document).ready(()=> {
    console.log('Hi jQuery, document is ready and fully loaded... Run the App!')
    const app: Main = new Main();
});
