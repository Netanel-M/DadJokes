function getDadJoke() {
    let text = $.get("https://icanhazdadjoke.com/", (data) =>{
        console.log(data);
        $("#joke").fadeTo(1000, 1).html(data.joke);
    },"json");
}

$(() => {
    $('p').fadeTo(0,0);
    getDadJoke();
    $('a').on('click', () => {
        $("#joke").fadeTo(1000, 0, () => {
            getDadJoke();

        });

    });
});
