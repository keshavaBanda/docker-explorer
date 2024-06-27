(function(window) {
    window.env = window.env || {};
  
    // Environment variables
    window["env"]["apiUrl"] = "${MEGA_WEB_ADMIN_API_URL}";
    window["env"]["debug"] = "${DEBUG}";
  })(this);