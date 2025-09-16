
    document.addEventListener('DOMContentLoaded', function() {

      const formRegisto = document.getElementById('cidadaoForm');
      const urlFotoInput = document.getElementById('caminhoFoto');
      const previewImage = document.getElementById('profilePicPreview');
      const errorDiv = document.getElementById('profilePicError');
      const defaultIcon = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzU1NTU1NSI+PHBhdGggZD0iTTIxIDE5VjVINWMtMS4xIDAtMiAuOS0yIDJ2MTBjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnpNNi41IDE1LjVMMTAgMTJsMyA0aDQuNWwtNi41LTguNUw2LjUgMTUuNXoiLz48L3N2Zz4=';

      const modal = document.getElementById("modalLogin");
      const btnLoginAdm = document.getElementById("btnLoginAdm");
      const spanFechar = document.getElementById("fecharModal");
      const formLogin = document.getElementById("login-form");

      previewImage.onerror = function() {
        this.style.display = 'none';
        errorDiv.style.display = 'block';
      };
      previewImage.onload = function() {
        this.style.display = 'block';
        errorDiv.style.display = 'none';
      };

      urlFotoInput.addEventListener('input', function () {
        const url = this.value.trim();
        if (url) {
            previewImage.src = url;
        } else {
            previewImage.src = defaultIcon;
            previewImage.style.display = 'block';
            errorDiv.style.display = 'none';
        }
      });

      formRegisto.addEventListener('submit', async function (e) {
        e.preventDefault();
        const formData = new FormData(this);
        const data = {};
        formData.forEach((value, key) => {
            if (key !== 'hwidSoc') { data[key] = value; }
        });

        try {
          const response = await fetch('/cidadaos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
          });
          if (response.ok) {
            alert('ATIVO REGISTADO COM SUCESSO.');
            this.reset();
            previewImage.src = defaultIcon;
          } else {
            const error = await response.text();
            alert('ERRO: ' + error);
          }
        } catch (err) {
          alert('Erro de conexão.');
        }
      });

      btnLoginAdm.onclick = function () {
        modal.style.display = "block";
      }

      spanFechar.onclick = function () {
        modal.style.display = "none";
      }

      window.onclick = function (event) {
        if (event.target === modal) {
          modal.style.display = "none";
        }
      }

      formLogin.addEventListener('submit', function(e) {
        e.preventDefault();
        const user = document.getElementById("usuario").value;
        const pass = document.getElementById("senha").value;

        if (user === "admin" && pass === "1234") {
          alert("Login realizado com sucesso!");
          window.location.href = "/admin";
        } else {
          alert("Utilizador ou palavra-passe incorretos.");
        }
      });

    });
