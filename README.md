<h1 align="center">WhatsappMessageSender</h1>

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/BrunoFerreira44/WhatsappMessageSender/main/LICENSE)

## 🛠 Sobre o projeto

Emissor de mensagens via WhatsApp que permite o envio único ou para uma lista de
contatos

## 🚀 Tecnologias

• JavaScript

• NodeJS com utilização da biblioteca Puppeteer

## ⚙ Configurações

```
   #Clone e instalação do projeto
      git clone https://github.com/BrunoFerreira44/WhatsappMessageSender.git
      cd WhatsappMessageSender/
      yarn

   #Alteração das configurações pessoais
      No diretório "src/config/", editar o arquivo "properties.js" e preencher os campos com os dados desejados:

      • contactName = Vetor que carrega os contatos que receberão as mensagens
      • message = Texto da mensagem que será enviado para o vetor de contactName
      • amountMessages: Quantidade de vezes que a mensagem será repetida e enviada

   #Execução
      yarn start
```

## ⚖ Premissas

É importante ressaltar que: O WhatsApp Web necessita de uma validação via QRCode
para autorizar a entrada em sua rede social. Para isso, após executar o código,
abra o WhatsApp em seu celular e valide o QRCode que estará aparecendo na tela.

Após isso, o programa executará normalmente, e as mensagens serão entregues
conforme configurado!

## 🙇‍ Autor

Bruno Ferreira

LinkedIn: https://www.linkedin.com/in/brunoferreira3003/
