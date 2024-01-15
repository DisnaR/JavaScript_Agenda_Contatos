// Array para armazenar os nomes dos contatos adicionados
var contactNames = [];

// Função para adicionar um contato na tabela
function addContact() {
    var nameInput = document.getElementById('name');
    var phoneInput = document.getElementById('phone');

    var name = nameInput.value;
    var phone = phoneInput.value;

    // Verifica se ambos os campos estão preenchidos
    if (name && phone) {
        // Verifica se o nome já foi adicionado (insensível a maiúsculas/minúsculas)
        if (!contactNames.some(existingName => existingName.toLowerCase() === name.toLowerCase())) {
            // Adiciona o nome ao array de nomes
            contactNames.push(name);

            // Cria uma nova linha na tabela
            var table = document.getElementById('contactTable').getElementsByTagName('tbody')[0];
            var newRow = table.insertRow(table.rows.length);

            // Insere células na nova linha
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);

            // Adiciona os valores dos campos na célula correspondente
            cell1.innerHTML = name;
            cell2.innerHTML = phone;

            // Limpa os campos do formulário
            nameInput.value = '';
            phoneInput.value = '';
        } else {
            alert('Esse nome já foi adicionado à agenda. Por favor, escolha um nome diferente.');
        }
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}
