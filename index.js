document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("cadastroForm");

  form.addEventListener("submit", function(event) {
      event.preventDefault(); // Evita o envio do formulário

      const nome = document.getElementById("nome").value;
      const email = document.getElementById("email").value;
      const senha = document.getElementById("senha").value;

      if (nome.trim() === "") {
          alert("Por favor, insira seu nome.");
          return;
      }

      if (email.trim() === "") {
          alert("Por favor, insira seu e-mail.");
          return;
      }

      if (senha.trim() === "") {
          alert("Por favor, insira sua senha.");
          return;
      }

      
      fetch("url_do_seu_endpoint", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              nome: nome,
              email: email,
              senha: senha
          })
      })
      .then(response => response.json())
      .then(data => {
          console.log(data);
          alert("Cadastro realizado com sucesso!");
          form.reset(); 
      })
      .catch(error => {
          console.error("Erro ao enviar dados:", error);
          alert("Ocorreu um erro ao enviar os dados. Por favor, tente novamente.");
      });
  });
});
