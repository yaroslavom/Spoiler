$(document).ready(function() {
    $('.block__title').click(function(event) {
        $(this).toggleClass('active').next().slideToggle(300) //відкриває заголовок(можуть бути відкриті усі із присвоєними класом activ)
        if($('.block').hasClass('one')){ //автоматично закриває відкритий перший заголок завдяки класу (One). Відключення коду можливе через видалення класу (One) та зберігши скрипт
            $('.block__title').not($(this)).removeClass('active');
            $('.block__text').not($(this).next()).slideUp(300);
        }
    });
});