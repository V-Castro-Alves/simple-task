# SIMPLE TASK

## 1. Introdução

O cotidiano moderno é marcado por um volume massivo de informações e responsabilidades. A ausência de um método de registro gera o chamado "custo cognitivo": o cérebro gasta energia tentando não esquecer tarefas em vez de focar na execução delas.

A tecnologia entra como um "segundo cérebro", oferecendo uma interface centralizada, persistente e de fácil acesso para organizar o fluxo de trabalho e reduzir o estresse mental.

## 2. Nome do Sistema

SIMPLE TASK

## 3. Problema

O sistema busca resolver a fragmentação de informações. Muitas pessoas anotam tarefas em papéis soltos, mensagens de WhatsApp consigo mesmas ou confiam apenas na memória. Isso resulta em prazos perdidos, sentimento de sobrecarga (ansiedade) e dificuldade em lembrar o que é realmente importante.

## 4. Público-Alvo (Quem Ele Atende)

O sistema atende a qualquer pessoa que necessite de uma ferramenta de baixa barreira de entrada, como estudantes, profissionais, etc.

## 5. Objetivo do Sistema

O objetivo principal é oferecer uma solução minimalista para a gestão de tarefas. O resultado esperado é que o usuário tenha uma visão clara da sua lista de tarefas, aumentando a sensação de controle e produtividade.

## 6. Escopo do Sistema

### 6.1 Escopo IN (o que o sistema faz)

- Criar tarefas: campo para inserção de texto.
- Editar tarefas: editar o texto das tarefas.
- Listar tarefas: exibição dinâmica acima do campo de inserção.
- Marcar como concluídas: remove as tarefas da visualização.

### 6.2 Escopo OUT (o que NÃO faz)

- Sistema de login (acesso aberto e imediato).
- Notificações ou alertas sonoros.
- Integração com calendários ou outros apps.

### 6.3 Escopo Creep (possíveis melhorias futuras)

- Uso de LocalStorage para que os dados não sumam ao fechar o navegador.
- Filtro de tarefas por status.

## 7. Funcionalidades

- Cadastro de tarefas: o usuário digita a descrição e, ao clicar no botão "+" ou pressionar "Enter", o item é adicionado na lista.
- Visualização: uma lista vertical que exibe todos os itens cadastrados em tempo real.
- Marcação de conclusão: checkbox que aplica um efeito visual de texto riscado na tarefa finalizada, por alguns segundos, e depois remove a tarefa da lista.

## 8. Tecnologia / Stack

- HTML5: para a estruturação semântica dos elementos.
- CSS3: para a estilização e feedback visual.
- JavaScript/EcmaScript (Vanilla): para a lógica de manipulação do DOM e interatividade.

## 9. Desenvolvimento

### Estrutura da Interface

O design será "Mobile First", com um container centralizado, garantindo que o sistema seja utilizável tanto no computador quanto no celular.

### Disposição dos Elementos

- Cabeçalho (topo alinhado à esquerda): título fixo "Simple Task" para dar identidade ao sistema.
- Área central (lista): um espaço flexível que exibe as tarefas. Quando a lista está vazia, o espaço fica limpo. À medida que as tarefas são adicionadas, elas preenchem o espaço, com as tarefas mais recentes sendo adicionadas ao fim da lista.
- Rodapé (base): uma barra fixa contendo o campo de texto e o botão de adicionar (+).

### Funcionamento Geral

- Inserção de tarefas: o JavaScript monitora o evento de clique. Ao ser acionado, ele cria um novo elemento de lista e o anexa à lista principal, limpando o campo de entrada em seguida.
- Marcar tarefa como concluída: para o caso de conclusão, o script monitora o evento do checkbox; quando acionado, aplica o estilo visual tachado por alguns segundos e depois remove o elemento da lista.
- Edição de tarefas: o script monitora duplos cliques no texto/descrição das tarefas na lista, permite editar o texto, e o salvamento acontece quando o usuário clica fora do campo de texto ou aperta a tecla "Enter".
- Scroll automático: se houver muitas tarefas, a página deve rolar automaticamente para baixo para garantir que a tarefa recém-criada esteja sempre visível para o usuário.

### Decisões Tomadas

Optou-se por não utilizar frameworks (como React ou Vue) para manter o código leve e para fins de simplicidade. A prioridade foi a usabilidade, garantindo que o usuário consiga adicionar uma tarefa com o menor número de cliques possível.