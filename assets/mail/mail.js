
const $form = document.getElementById("contactForm");

$form.addEventListener('submit', handleSubmit);

async function handleSubmit(event){
    event.preventDefault();
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })
    if(response.ok){
        this.reset();
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Mensaje enviado correctamente',
            text: 'Tu mensaje ha sido enviado satisfactoriamente, trataré de contestarte lo antes posible',
            showConfirmButton: true,
        })
    }
}
