document.addEventListener('DOMContentLoaded', function() {
    // Cargar listas de localStorage
  let listNameUser = JSON.parse(localStorage.getItem('listNameUser')) || [];
  let listPassUser = JSON.parse(localStorage.getItem('listPassUser')) || [];
  
    // Verifica si el formulario de creación de cuenta existe antes de agregar el event listener
    const loginAccountForm = document.getElementById('loginAccount');
    if (loginAccountForm) {
      loginAccountForm.addEventListener('submit', function(event) {
        event.preventDefault();
  
        const userName = document.getElementById('inputUser').value;
        const userPass = document.getElementById('inputPass').value; 
  
        if (userName === '' || userPass === '') {
          alert('Por favor ingrese sus credenciales');
          return;
        }
  
        listNameUser.push(userName); 
        listPassUser.push(userPass);

        // Guardar listas en localStorage
      localStorage.setItem('listNameUser', JSON.stringify(listNameUser));
      localStorage.setItem('listPassUser', JSON.stringify(listPassUser));
  
        console.log('Usuario registrado:', userName);
        console.log('Contraseña registrada:', userPass);
  
        // Limpiar los campos del formulario
        document.getElementById('inputUser').value = '';
        document.getElementById('inputPass').value = '';
      });
    }
  
    // Verifica si el formulario de inicio de sesión existe antes de agregar el event listener
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
      loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
  
        const loginUser = document.getElementById('inputUser').value;
        const loginPass = document.getElementById('inputPass').value; 
  
        if (loginUser === '' || loginPass === '') {
          alert('Por favor ingrese sus credenciales');
          return;
        }
  
        let loginSuccessful = false;
  
        for (let i = 0; i < listNameUser.length; i++) {
          if (loginUser === listNameUser[i] && loginPass === listPassUser[i]) {
            loginSuccessful = true;
            break;
          }
        }
  
        if (loginSuccessful) {
          alert('Inicio de sesión exitoso');
          console.log('Usuario autenticado:', loginUser);
        } else {
          alert('Nombre de usuario o contraseña incorrectos o no existe');
        }
  
        // Limpiar los campos del formulario
        document.getElementById('inputUser').value = '';
        document.getElementById('inputPass').value = '';
      });
    }

    const loginForgot = document.getElementById('loginForgot'); 
    if(loginForgot){
      loginForgot.addEventListener('submit', function(event){
        event.preventDefault();  
    
        const userName = document.getElementById('inputUser').value; 
        const userPass = document.getElementById('inputPass');
        userPass.disabled = true;  // Inicialmente deshabilitado
    
        for(let i = 0; i < listNameUser.length; i++){
          if(userName === listNameUser[i]){
            userPass.disabled = false;  // Habilitar si el usuario coincide
            break;  // Salir del bucle una vez encontrado
          }
        }
      });
    }
    

  });
  