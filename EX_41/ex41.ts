function Make_Car (manufac:string, model:string, color="default")
{
    // creating object
    const car:
    {
        manufacturer:string,
        model:string,
        color?:string
    } =
    {
        manufacturer:manufac,
        model:model,
        
    };

    if (color != "default")
    {
        car.color = color;
    }

    return car;

}

// calling Make car function

Make_Car("Suzuki" , "Bolan", "White");