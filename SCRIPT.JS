// Array para armazenar os funcionários
const employees = [];

function addEmployee() {
    const name = document.getElementById("name").value;
    const cpf = document.getElementById("cpf").value;
    const cargo = document.getElementById("cargo").value;

    if (name && cpf && cargo) {
        // Cria um objeto funcionário
        const employee = {
            name: name,
            cpf: cpf,
            cargo: cargo,
        };

        // Adiciona o funcionário ao array
        employees.push(employee);

        // Limpa os campos do formulário
        document.getElementById("name").value = "";
        document.getElementById("cpf").value = "";
        document.getElementById("cargo").value = "";

        // Atualiza a lista de funcionários
        displayEmployees();
    } else {
        alert("Por favor, preencha todos os campos do formulário.");
    }
}

function displayEmployees() {
    const employeeList = document.getElementById("employeeList");
    employeeList.innerHTML = ""; // Limpa a lista antes de atualizar

    employees.forEach((employee, index) => {
        const employeeDiv = document.createElement("div");
        employeeDiv.className = "employee";

        // Adiciona o nome do funcionário como título clicável
        const employeeTitle = document.createElement("h3");
        employeeTitle.textContent = employee.name;
        employeeTitle.addEventListener("click", () => {
            toggleEmployeeDetails(index);
        });

        // Container para detalhes do funcionário (inicialmente oculto)
        const detailsDiv = document.createElement("div");
        detailsDiv.className = "employee-details";
        detailsDiv.style.display = "none";

        // Adiciona as informações do funcionário aos detalhes
        const cpfLabel = document.createElement("p");
        cpfLabel.textContent = "CPF: " + employee.cpf;

        const cargoLabel = document.createElement("p");
        cargoLabel.textContent = "Cargo: " + employee.cargo;

        // Adiciona tudo ao contêiner de funcionário
        detailsDiv.appendChild(cpfLabel);
        detailsDiv.appendChild(cargoLabel);

        employeeDiv.appendChild(employeeTitle);
        employeeDiv.appendChild(detailsDiv);

        employeeList.appendChild(employeeDiv);
    });
}

function toggleEmployeeDetails(index) {
    const detailsDiv = document.querySelectorAll(".employee-details")[index];
    if (detailsDiv.style.display === "none") {
        detailsDiv.style.display = "block";
    } else {
        detailsDiv.style.display = "none";
    }
}
