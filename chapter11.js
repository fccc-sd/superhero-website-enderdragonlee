"use strict";

 $(document).ready( () => {
    

    const listOfNames= [
        "Lilly",
        "Caden",
        "Abby",
        "Luke",
        "Justin",
        "Mark",
        "Marcous",
        "Lillian"
    ];

    $("#name").autocomplete({
        source: listOfNames,
        minLength: 1
    });
    
    


 });