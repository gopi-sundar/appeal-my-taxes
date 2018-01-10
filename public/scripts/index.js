$(document)
  .ready(function () {

    var
      changeSides = function () {
        $('.ui.shape')
          .eq(0)
          .shape('flip over')
          .end()
          .eq(1)
          .shape('flip over')
          .end()
          .eq(2)
          .shape('flip back')
          .end()
          .eq(3)
          .shape('flip back')
          .end()
          ;
      },
      validationRules = {
        firstName: {
          identifier: 'email',
          rules: [
            {
              type: 'empty',
              prompt: 'Please enter an e-mail'
            },
            {
              type: 'email',
              prompt: 'Please enter a valid e-mail'
            }
          ]
        }
      }
      ;

    $('.ui.dropdown')
      .dropdown({
        on: 'hover'
      })
      ;

    $('.ui.form')
      .form(validationRules, {
        on: 'blur'
      })
      ;

    $('.masthead .information')
      .transition('scale in', 1000)
      ;

    setInterval(changeSides, 3000);

    $('#taxapp-content').load(`templates/welcome.html`);

    // Handle clicks 
    $('.taxapp-menu-item').click(e => {
      e.preventDefault();
      var pageName = $(e.target).attr('id');

      switch (pageName) {
        case 'about':
        case 'appeal-process':
        case 'fee':
        case 'get-started':
          $('#taxapp-content').load(`templates/${pageName}.html`);
          break;
        default:
          $('#taxapp-content').load('templates/welcome.html');
      }

    });

  })
  ;

