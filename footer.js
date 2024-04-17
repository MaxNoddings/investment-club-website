// Create the footer content
const footerContent = `
  <footer>
    <div>
    <img class="footer-logo" src="/public/favicon.png" alt="logo-img"/>  
    <p> Copyright <i class="fa-regular fa-copyright"></i> 2024 Saint Michael's College Student Investment Fund<br><br></p>
      <div>
        <a class="plug" href="https://maxnoddings.netlify.app/" target="_blank">
          <p> Website by Max Noddings </p>
        </a>
      </div>
    </div>
  </footer>
`;

// Insert the footer content into the body
document.body.insertAdjacentHTML('beforeend', footerContent);
