const repository = new window.Repository();
const service = new window.Service(repository);
const $ = (id) => document.getElementById(id);

function mostrarMensagem(texto, erro = false) {
  const mensagem = $('mensagem');
  mensagem.textContent = texto;
  mensagem.className = `message visible${erro ? ' error' : ''}`;
  setTimeout(() => mensagem.classList.remove('visible'), 3000);
}

function atualizarOpcoes() {
  const doadorSelect = $('doador-id');
  const alimentoSelect = $('alimento-id');
  doadorSelect.innerHTML = '<option value="">Selecione um doador</option>';
  alimentoSelect.innerHTML = '<option value="">Selecione um alimento</option>';
  repository.listar('doadores').forEach((doador) => doadorSelect.add(new Option(doador.nome, doador.id)));
  repository.listar('alimentos').forEach((alimento) => alimentoSelect.add(new Option(`${alimento.nome} (${alimento.quantidade} ${alimento.unidade})`, alimento.id)));
}

function atualizarLista() {
  const lista = $('doacoes-lista');
  const doadores = repository.listar('doadores');
  const alimentos = repository.listar('alimentos');
  const doacoes = repository.listar('doacoes');
  $('total-doacoes').textContent = `${doacoes.length} ${doacoes.length === 1 ? 'doação' : 'doações'}`;
  if (!doacoes.length) {
    lista.innerHTML = '<p class="empty-state">Ainda não há doações registradas.</p>';
    return;
  }
  lista.innerHTML = doacoes.slice().reverse().map((doacao) => {
    const doador = doadores.find((item) => item.id === doacao.doadorId);
    const alimento = alimentos.find((item) => item.id === doacao.alimentos[0].alimentoId);
    const item = doacao.alimentos[0];
    return `<article class="donation-item"><div><strong>${doador?.nome || 'Doador não encontrado'}</strong><span>${alimento?.nome || 'Alimento'} · ${item.quantidade} ${item.unidade}</span></div><time datetime="${doacao.data}">${new Date(`${doacao.data}T12:00:00`).toLocaleDateString('pt-BR')}</time></article>`;
  }).join('');
}

$('doador-form').addEventListener('submit', (event) => {
  event.preventDefault();
  try { service.cadastrarDoador({ nome: $('nome').value, telefone: $('telefone').value, email: $('email').value, endereco: $('endereco').value }); event.target.reset(); atualizarOpcoes(); mostrarMensagem('Doador cadastrado com sucesso.'); } catch (error) { mostrarMensagem(error.message, true); }
});

$('alimento-form').addEventListener('submit', (event) => {
  event.preventDefault();
  try { service.cadastrarAlimento({ nome: $('alimento-nome').value, quantidade: $('quantidade').value, unidade: $('unidade').value }); event.target.reset(); atualizarOpcoes(); mostrarMensagem('Alimento cadastrado com sucesso.'); } catch (error) { mostrarMensagem(error.message, true); }
});

$('doacao-form').addEventListener('submit', (event) => {
  event.preventDefault();
  try { service.criarDoacao({ doadorId: $('doador-id').value, alimentoId: $('alimento-id').value, data: $('data').value, quantidade: $('doacao-quantidade').value }); event.target.reset(); atualizarLista(); mostrarMensagem('Doação registrada com sucesso.'); } catch (error) { mostrarMensagem(error.message, true); }
});

$('data').value = new Date().toISOString().split('T')[0];
atualizarOpcoes();
atualizarLista();
