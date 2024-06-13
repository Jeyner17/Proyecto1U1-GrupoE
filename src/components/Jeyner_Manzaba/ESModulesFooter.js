export const footerTemplate = `
  <div class="container">
    <div class="column">
      <h3>Enlaces Útiles</h3>
      <ul>
        <li><a href="../pages/home.html">Inicio</a></li>
        <li><a href="../pages/login.html">Iniciar sesión</a></li>
        <li><a href="../pages/acount.html">Cuenta</a></li>
      </ul>
    </div>
    <div class="column">
      <h3>Contacto</h3>
      <ul>
        <li>Teléfono: +593 123 456 789</li>
        <li>Email: info@bancopichincha.com</li>
        <li>Dirección: Av. Amazonas 1234, Quito, Ecuador</li>
      </ul>
    </div>
    <div class="column">
      <h3>Síguenos</h3>
      <div class="social">
        <a href="https://facebook.com" target="_blank"><i class="fab fa-facebook-f"></i></a>
        <a href="https://twitter.com" target="_blank"><i class="fab fa-twitter"></i></a>
        <a href="https://instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
        <a href="https://linkedin.com" target="_blank"><i class="fab fa-linkedin-in"></i></a>
      </div>
    </div>
  </div>
  <div class="credit">
    &copy; 2024 Banco Pichincha. Todos los derechos reservados.
  </div>
`;

document.getElementById('footer').innerHTML = footerTemplate;