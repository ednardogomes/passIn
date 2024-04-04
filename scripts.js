// o New Date funciona da seguinte forma:
// Ano, Mês, dia, hora,minuto.
// Porém o mês em vez de ser de 1 a 12 é de 0 a 11,
// ou seja o mês referido na data de inscrição do ednardo
// é o mês de março.

import dayjs from 'dayjs'

let participantes = [
  {
    name: "Ednardo Gomes",
    email: "ednardo@gmail.com",
    registrationDate: new Date(2024, 2, 22, 19, 20),
    checkInDate: new Date(2024, 2, 25, 22, 0),
  },
  {
    name: "Maria Pereira",
    email: "maria@gmail.com",
    registrationDate: new Date(2024, 1, 2, 19, 23),
    checkInDate: new Date(2024, 2, 1, 20, 0),
  },
  {
    name: "João Silva",
    email: "joao@gmail.com",
    registrationDate: new Date(2024, 1, 5, 14, 30),
    checkInDate: new Date(2024, 2, 10, 9, 0),
  },
  {
    name: "Ana Souza",
    email: "ana@gmail.com",
    registrationDate: new Date(2024, 0, 10, 10, 0),
    checkInDate: new Date(2024, 1, 1, 12, 0),
  },
  {
    name: "Carlos Santos",
    email: "carlos@gmail.com",
    registrationDate: new Date(2024, 2, 18, 16, 45),
    checkInDate: new Date(2024, 2, 20, 18, 30),
  },
  {
    name: "Fernanda Oliveira",
    email: "fernanda@gmail.com",
    registrationDate: new Date(2024, 1, 28, 8, 15),
    checkInDate: new Date(2024, 2, 5, 10, 0),
  },
  {
    name: "Rafael Lima",
    email: "rafael@gmail.com",
    registrationDate: new Date(2024, 2, 10, 17, 0),
    checkInDate: new Date(2024, 2, 15, 18, 30),
  },
  {
    name: "Juliana Costa",
    email: "juliana@gmail.com",
    registrationDate: new Date(2024, 1, 14, 12, 45),
    checkInDate: new Date(2024, 2, 20, 9, 0),
  },
  {
    name: "Pedro Sousa",
    email: "pedro@gmail.com",
    registrationDate: new Date(2024, 1, 20, 21, 0),
    checkInDate: new Date(2024, 2, 10, 10, 30),
  },
  {
    name: "Mariana Costa",
    email: "mariana@gmail.com",
    registrationDate: new Date(2024, 0, 5, 18, 0),
    checkInDate: new Date(2024, 1, 5, 20, 0),
  },
];

const atualizarLista = (participantes) => {
  let output = "";

  for (let participante of participantes) {
    output = output + criarNovoParticipante(participante);
  }

  document.querySelector("tbody").innerHTML = output;
};

const criarNovoParticipante = (participante) => {
  const registrationDate = dayjs(Date.now()).to(participante.registrationDate);
  console.log(registrationDate);

  return `
  <tr>
    <td>
      <strong>
        ${participante.name}
      </strong>
        <br />
      <small> 
      ${participante.email} 
      </small>
    </td>
      <td>${registrationDate} </td>
      <td>${participante.checkInDate} </td>
  </tr>
  `;
};

atualizarLista(participantes);
