document.addEventListener('DOMContentLoaded', async function () {
    const tableBody = document.getElementById('admin-table-body');
    const searchInput = document.getElementById('search-input');
    const filterSelect = document.getElementById('filter-select');

    let allCidadaos = []; // Armazena a lista completa de cidadãos

    // Popula o select de filtro
    const classes = ["EXECUTIVA", "HACKER", "MILITAR", "CIVIL", "NEKO", "ELFA", "HUMANO", "PROCURADO", "CAÇADO", "REALEZA", "IMIGRANTE", "REFUGIADO"];
    classes.forEach(c => {
        const option = document.createElement('option');
        option.value = c;
        option.textContent = c.charAt(0) + c.slice(1).toLowerCase();
        filterSelect.appendChild(option);
    });

    // Função para renderizar a tabela com os dados filtrados
    function renderTable(data) {
        tableBody.innerHTML = ''; // Limpa a tabela
        if (data.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="6" style="text-align:center; padding: 2rem;">Nenhum ativo corresponde aos critérios.</td></tr>';
            return;
        }
        data.forEach(cidadao => {
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>${cidadao.id}</td>
            <td>${cidadao.nome}</td>
            <td>${cidadao.classe}</td>
            <td>${cidadao.nivelAcesso}</td>
            <td style="font-family: 'Roboto Mono', monospace;">${cidadao.hwidSoc}</td>
            <td>
              <button class="action-btn edit" data-id="${cidadao.id}">Editar</button>
              <button class="action-btn delete" data-id="${cidadao.id}">Excluir</button>
            </td>
          `;
            tableBody.appendChild(row);
        });
    }

    // Função para aplicar os filtros e a busca
    function applyFilters() {
        const filterValue = filterSelect.value;
        const searchValue = searchInput.value.toLowerCase();

        let filteredData = allCidadaos;

        // 1. Aplica o filtro de classe
        if (filterValue !== 'ALL') {
            filteredData = filteredData.filter(c => c.classe === filterValue);
        }

        // 2. Aplica o filtro de busca
        if (searchValue) {
            filteredData = filteredData.filter(c =>
                c.nome.toLowerCase().includes(searchValue) ||
                c.hwidSoc.toLowerCase().includes(searchValue)
            );
        }

        renderTable(filteredData);
    }

    // Adiciona os event listeners para a busca e o filtro
    searchInput.addEventListener('input', applyFilters);
    filterSelect.addEventListener('change', applyFilters);

    // Busca os dados iniciais ao carregar a página
    try {
        const response = await fetch('/cidadaos');
        if (!response.ok) throw new Error('Falha ao carregar dados dos ativos.');

        allCidadaos = await response.json();
        renderTable(allCidadaos);

    } catch (error) {
        console.error('Erro:', error);
        tableBody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding: 2rem; color: var(--arasaka-red);">${error.message}</td></tr>`;
    }
});

// Lógica para os botões de delete
document.getElementById('admin-table-body').addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains('delete')) {
        const id = e.target.getAttribute('data-id');
        const confirmado = confirm(`Tem a certeza que quer apagar o ativo com ID ${id}? Esta ação é irreversível.`);
        if (confirmado) {
            fetch(`/cidadaos/${id}`, { method: 'DELETE' })
                .then(response => {
                    if (response.ok) {
                        alert(`Ativo ${id} apagado com sucesso.`);
                        window.location.reload(); // Recarrega a página para atualizar a lista
                    } else {
                        alert(`Falha ao apagar o ativo ${id}.`);
                    }
                });
        }
    }
});
