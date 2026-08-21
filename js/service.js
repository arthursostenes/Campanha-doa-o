class Service {
  constructor(repository) {
    this.repository = repository;
  }

  validarObrigatorios(dados) {
    return Object.values(dados).every((valor) => String(valor).trim() !== '');
  }

  cadastrarDoador(dados) {
    if (!this.validarObrigatorios(dados)) throw new Error('Preencha todos os campos do doador.');
    return this.repository.adicionar('doadores', new window.Models.Doador({ ...dados, id: crypto.randomUUID() }));
  }

  cadastrarAlimento(dados) {
    if (!this.validarObrigatorios(dados) || Number(dados.quantidade) <= 0) throw new Error('Informe o alimento e uma quantidade válida.');
    return this.repository.adicionar('alimentos', new window.Models.Alimento({ ...dados, quantidade: Number(dados.quantidade), id: crypto.randomUUID() }));
  }

  criarDoacao(dados) {
    if (!this.validarObrigatorios(dados) || Number(dados.quantidade) <= 0) throw new Error('Preencha os dados da doação.');
    const doadorExiste = this.repository.listar('doadores').some((doador) => doador.id === dados.doadorId);
    const alimento = this.repository.listar('alimentos').find((item) => item.id === dados.alimentoId);
    if (!doadorExiste || !alimento) throw new Error('Cadastre um doador e um alimento antes da doação.');

    const doacao = new window.Models.Doacao({
      id: crypto.randomUUID(),
      data: dados.data,
      doadorId: dados.doadorId,
      alimentos: [{ alimentoId: alimento.id, quantidade: Number(dados.quantidade), unidade: alimento.unidade }]
    });
    return this.repository.adicionar('doacoes', doacao);
  }
}

window.Service = Service;
