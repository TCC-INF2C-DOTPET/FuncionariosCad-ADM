// Verifica se a variável 'employees' já está definida antes de declará-la
if (!employees) {
    var employees = [];
}

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
        displayEmployees(employees); // Passa o array de funcionários para a função
    } else {
        alert("Por favor, preencha todos os campos do formulário.");
    }
}

function displayEmployees(employeesToDisplay) {
    const employeeList = document.getElementById("employeeList");
    employeeList.innerHTML = ""; // Limpa a lista antes de atualizar

    employeesToDisplay.forEach((employee, index) => {
        const employeeDiv = document.createElement("div");
        employeeDiv.className = "employee";

        // Adiciona o nome do funcionário como título clicável
        const employeeTitle = document.createElement("h3");
        employeeTitle.textContent = employee.name;
        employeeTitle.addEventListener("click", () => {
            toggleEmployeeDetails(index);
        });

        // Botão de Excluir
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Excluir";
        deleteButton.className = "btn-excluir";
        deleteButton.onclick = function () {
            excluirFuncionario(deleteButton);
        };

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

        employeeDiv.appendChild(deleteButton);
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

// Função para excluir um funcionário
function excluirFuncionario(button) {
    const employeeDiv = button.parentElement;
    const employeeList = employeeDiv.parentElement;
    const index = Array.from(employeeList.children).indexOf(employeeDiv);

    // Remove o funcionário da lista
    employees.splice(index, 1);

    // Remove o elemento HTML do funcionário
    employeeDiv.remove();
}

function buscarFuncionario() {
    const searchTerm = document.getElementById("search").value.toLowerCase();

    const filteredEmployees = employees.filter((employee) => {
        return employee.name.toLowerCase().includes(searchTerm);
    });

    // Atualize a lista de funcionários com os funcionários filtrados
    displayEmployees(filteredEmployees);
}
