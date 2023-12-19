(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    body: document.body,
  };

  refs.openModalBtn.addEventListener("click", closeModal);
  refs.closeModalBtn.addEventListener("click", closeModal);

  function closeModal() {
    refs.modal.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }
  const forms = document.querySelectorAll("#subscribe");

forms.forEach(form => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        var message = form.querySelector("#message").value;
    
        var subscribe = `New message recieved :${message}`
    
        var token = "6270391808:AAEeDST2kRZacIxzisJz-GBovp8C8uRHcY0";
        var chat_id = '308432208';
        var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${subscribe}&parse_mode=html`;
    
        let api = new XMLHttpRequest();
        api.open("GET", url, true);
        api.send();
    
        console.log("Subscribe successfully sent!");
        form.reset();
        closeModal();
    }); 
});
})();
