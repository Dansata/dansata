import React from "react";

function Footer() {
  var currentYear = new Date().getFullYear();
  return (
    <div className="Footer">
      <footer class="py-5 bg-dark fixed-bottom">
        <div class="container">
          <small class="m-0 text-center text-white">
            Copyright &copy; dansata.com {currentYear}
          </small>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
