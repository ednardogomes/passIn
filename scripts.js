// o New Date funciona da seguinte forma:
// Ano, Mês, dia, hora,minuto.
// Porém o mês em vez de ser de 1 a 12 é de 0 a 11,
// ou seja o mês referido na data de inscrição do ednardo
// é o mês de março.

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
    checkInDate: null,
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
    checkInDate: null,
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
    checkInDate: null,
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
    checkInDate: null,
  },
];

const updateList = (participantes) => {
  let output = "";

  for (let participante of participantes) {
    output = output + createNewParticipant(participante);
  }

  document.querySelector("tbody").innerHTML = output;
};

const createNewParticipant = (participante) => {
  const registrationDate = dayjs(Date.now()).to(participante.registrationDate);

  let checkInDate = dayjs(Date.now()).to(participante.checkInDate);

  if (participante.checkInDate == null) {
    checkInDate = `
    <button
    data-email = "${participante.email}"
    onclick = "participantCheckIn(event)"
    >
    Confirmar check-in
    </button>
    `;
  }

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
      <td>${checkInDate} </td>
  </tr>
  `;
};

updateList(participantes);

const addParticipant = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  const participante = {
    name: formData.get("name"),
    email: formData.get("email"),
    registrationDate: formData.get("registrationDate"),
    checkInDate: null,
  };

  const checkParticipantExists = participantes.find(
    (p) => p.email == participante.email
  );

  if (checkParticipantExists) {
    alert("Email já cadastrado!");
    return;
  }

  participantes = [participante, ...participantes];
  updateList(participantes);

  event.target.querySelector('[name="name"]').value = "";
  event.target.querySelector('[name="email"]').value = "";
};

const participantCheckIn = (event) => {
  const confirmMessage = "Tem certeza que deseja fazer o check-in?";
  alert(confirmMessage);
  if (confirm(confirmMessage) == false) {
    return;
  }

  const participante = participantes.find((p) => {
    return p.email == event.target.dataset.email;
  });
  participante.checkInDate = new Date();
  updateList(participantes);
};
