# APP 

check-in (Gympass style app)

## RFs (Requisitos funcionais)

- [ ] Deve ser possível fazer um cadastro;
- [ ] Deve ser poossível se autenticar;
- [ ] Deve ser poossível obter o perfil de um usuário logado;
- [ ] Deve ser poossível obter o número de checkIns realizados pelo usuário;
- [ ] Deve ser poossível o usuário obter seu histórico de checkIns;
- [ ] Deve ser poossível o usuário buscar as academias próximas;
- [ ] Deve ser poossível o usuário buscar academia pelo nome;
- [ ] Deve ser poossível o usuário realizar checkIn em uma academia;
- [ ] Deve ser poossível validar o checkIn de um usuário;
- [ ] Deve ser poossível cadastrar uma academia;

## RNs (Requisitos de negóicio)

- [ ] O usuário não deve poder se cadastrar com um email duplicado;
- [ ] O usuário não pode fazer dois checkIns no mesmo dia;
- [ ] O usuário não pode fazer checkIn se o usuário estiver a mais de 100m da academia;
- [ ] O checkIn só pode ser validado até 20 min após criada;
- [ ] O checkIn só pode ser validado por admin;
- [ ] A academia só pode ser cadastrada por admin;

## RNFs (Requisitos não funcionais)

- [ ] A senha do usuário precisa estar criptografada;
- [ ] Os dados da aplicação precisam estar persistidos em um PostgresSQL;
- [ ] Todas as listas de dados precisam estar paginadas com 20 itens por página;
- [ ] O usuário deve ser identificado por um JWT;# api_solid_check_in
