import {certificaciones, experiencias} from "./data.js";

const modal = document.getElementById("modal");
const imgModal = document.getElementById("imgModal");
const btnModal = document.getElementById("btnModal");

document.getElementById("btn01").onclick = ()=> {
    modal.style.display = "flex";
    imgModal.src = "../assets/images/certificado-titulo-sise.jpg"
}

document.getElementById("btn02").onclick = ()=> {
    modal.style.display = "flex";
    // TODO: adjuntar constancia de egresado del instituto de Huaycán
    imgModal.src = "https://via.placeholder.com/300x500?text=Constancia+en+espera";
    // imgModal.src = "../assets/images/certificado-egreso-iestph.jpg"
}

const listarCertificaciones = ()=> {
    const contenidoCertificaciones = document.getElementById("contenidoCertificaciones");
    contenidoCertificaciones.innerHTML = "";

    certificaciones.forEach((certificacion)=>{
        let divCertificacion = document.createElement("div");
            divCertificacion.classList.add("certificacion");
        let divCertificado = document.createElement("div");
            divCertificado.classList.add("certificado");
        let btnCertificado = document.createElement("button");
            btnCertificado.type = "button";
            btnCertificado.innerText = "Ver Certificado";
            btnCertificado.classList.add("btnVerCertificado");
        let separador = document.createElement("hr");

        btnCertificado.onclick = ()=> {
            modal.style.display = "flex";
            imgModal.src = certificacion.imagen;
        }

        let html = `<div class="informacion">
                        <p><i class="fa fa-map-marker"></i><span>${certificacion.lugar}</span></p>
                        <p><i class="fa fa-file-text"></i><span>${certificacion.valor}</span></p>
                        <p><i class="fa fa-calendar"></i><span>${certificacion.fecha}</span></p>
                    </div>`

    divCertificado.appendChild(btnCertificado);

    divCertificacion.innerHTML = html;
    divCertificacion.appendChild(divCertificado);
    
    contenidoCertificaciones.appendChild(separador);
    contenidoCertificaciones.appendChild(divCertificacion);
    })
}

const listarExperiencia = ()=> {
    const contenidoExperiencia = document.getElementById("contenidoExperiencia");
    contenidoExperiencia.innerHTML = "";

    experiencias.forEach((experiencia)=>{
        let divExperiencia = document.createElement("div");
            divExperiencia.classList.add("experiencia");
        let divCertificado = document.createElement("div");
            divCertificado.classList.add("certificado");
        let btnCertificado = document.createElement("button");
            btnCertificado.type = "button";
            btnCertificado.innerText = "Ver Constancia";
            btnCertificado.classList.add("btnVerCertificado");
        let separador = document.createElement("hr");

        btnCertificado.onclick = ()=> {
            modal.style.display = "flex";
            imgModal.src = experiencia.constancia;
        }

        let html = `<div class="informacion">
                        <p><i class="fa fa-home"></i><span>${experiencia.lugar}</span></p>
                        <p><i class="fa fa-id-card"></i><span>${experiencia.cargo}</span></p>
                        <p><i class="fa fa-calendar"></i><span>${experiencia.fecha}</span></p>
                    </div>`

    divCertificado.appendChild(btnCertificado);

    divExperiencia.innerHTML = html;
    divExperiencia.appendChild(divCertificado);
    
    contenidoExperiencia.appendChild(separador);
    contenidoExperiencia.appendChild(divExperiencia);
    })
}

listarCertificaciones();
listarExperiencia();

btnModal.onclick = ()=> {
    modal.style.display = "none";
}
