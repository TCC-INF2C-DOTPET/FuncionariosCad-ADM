// Array para armazenar os funcionários
const employees = [];

document.addEventListener("DOMContentLoaded", function () {
    // Função para adicionar um funcionário
    function addEmployee() {
        const name = document.getElementById("name").value;
        const cpf = document.getElementById("cpf").value;
        const cargo = document.getElementById("cargo").value;
        const rg = document.getElementById("rg").value;
        const dataNasc = document.getElementById("dataNasc").value;
        const telefone = document.getElementById("telefone").value;
        const email = document.getElementById("email").value;
        const logradouro = document.getElementById("logradouro").value;
        const numeroResid = document.getElementById("numero_resid").value;
        const complemento = document.getElementById("complemento").value;
        const cep = document.getElementById("cep").value;
        const bairro = document.getElementById("bairro").value;
        const cidade = document.getElementById("cidade").value;
        const uf = document.getElementById("uf").value;
        const senha = document.getElementById("senha").value;

        if (name && cpf && cargo && rg && dataNasc && telefone && email && logradouro && numeroResid && complemento && cep && bairro && cidade && uf && senha) {
            // Cria um objeto funcionário
            const employee = {
                name: name,
                cpf: cpf,
                cargo: cargo,
                rg: rg,
                dataNasc: dataNasc,
                telefone: telefone,
                email: email,
                logradouro: logradouro,
                numeroResid: numeroResid,
                complemento: complemento,
                cep: cep,
                bairro: bairro,
                cidade: cidade,
                uf: uf,
                senha: senha
            };

            // Adiciona o funcionário ao array
            employees.push(employee);

            // Limpa os campos do formulário
            document.getElementById("name").value = "";
            document.getElementById("cpf").value = "";
            document.getElementById("cargo").value = "";
            document.getElementById("rg").value = "";
            document.getElementById("dataNasc").value = "";
            document.getElementById("telefone").value = "";
            document.getElementById("email").value = "";
            document.getElementById("logradouro").value = "";
            document.getElementById("numero_resid").value = "";
            document.getElementById("complemento").value = "";
            document.getElementById("cep").value = "";
            document.getElementById("bairro").value = "";
            document.getElementById("cidade").value = "";
            document.getElementById("uf").value = "";
            document.getElementById("senha").value = "";

            // Atualiza a lista de funcionários
            displayEmployees();
        } else {
            alert("Por favor, preencha todos os campos do formulário.");
        }
    }

    // Função para exibir os detalhes de um funcionário
    function toggleEmployeeDetails(index) {
        const detailsDiv = document.querySelectorAll(".employee-details")[index];
        if (detailsDiv.style.display === "none" || detailsDiv.style.display === "") {
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

        // Atualiza a lista de funcionários
        displayEmployees();
    }

    // Função para exibir os funcionários na lista
    function displayEmployees() {

        sortEmployeesByName(); // Chama a função para ordenar os funcionários por nome


        const employeeList = document.getElementById("employeeList");
        employeeList.innerHTML = ""; // Limpa a lista antes de atualizar

        employees.forEach((employee, index) => {
            const employeeDiv = document.createElement("div");
            employeeDiv.className = "employee";

            // Título do funcionário (nome)
            const employeeTitle = document.createElement("h3");
            employeeTitle.textContent = "Func: " + employee.name; // Adicione o nome aqui
            employeeTitle.addEventListener("click", () => {
                toggleEmployeeDetails(index);
            });

            // Container para detalhes do funcionário (inicialmente oculto)
            const detailsDiv = document.createElement("div");
            detailsDiv.className = "employee-details";
            detailsDiv.style.display = "none";

            // Adiciona as informações do funcionário aos detalhes
            for (const key in employee) {
                if (employee.hasOwnProperty(key)) {
                    const label = document.createElement("p");
                    label.textContent = key.toUpperCase() + ": " + employee[key];
                    detailsDiv.appendChild(label);
                }
            }

           // Botão de Excluir
           const deleteButton = document.createElement("button");
           deleteButton.textContent = "Excluir";
           deleteButton.className = "btn-excluir";
           deleteButton.onclick = function () {
               excluirFuncionario(deleteButton);
           };

           // Adiciona elementos ao div do funcionário
           employeeDiv.appendChild(deleteButton);
           employeeDiv.appendChild(employeeTitle);
           employeeDiv.appendChild(detailsDiv);

           // Adiciona o funcionário à lista
           employeeList.appendChild(employeeDiv);
       });
   }

   // Configurar o evento de input no campo de pesquisa
const searchInput = document.getElementById("search");
searchInput.addEventListener("input", buscarFuncionario);

// Função para buscar funcionarios pelo cpf
function buscarFuncionario() {
    const searchTerm = document.getElementById("search").value.toLowerCase();

    employees.forEach((employee, index) => {
        const employeeDiv = document.querySelectorAll(".employee")[index];

        // Verifica se o cpf do funcionário inclui o termo de pesquisa
        if (employee.cpf.toLowerCase().includes(searchTerm)) {
            employeeDiv.style.visibility = "visible"; // Torna o funcionário visível
        } else {
            employeeDiv.style.visibility = "hidden"; // Torna o funcionário invisível
        }
    });
}


function sortEmployeesByName() {
    employees.sort((a, b) => {
        return a.name.localeCompare(b.name);
    });
}


   // Configurar o evento de clique no botão de adicionar
   const addButton = document.getElementById("addButton");
   addButton.addEventListener("click", addEmployee);

   // Carregar e exibir os funcionários ao iniciar a página
   displayEmployees();
});
