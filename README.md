# WhatsappMessageSender

Emissor simples de mensagens via WhatsApp

## Configurações

```
   #Clone do projeto
   git clone https://github.com/BrunoFerreira44/WhatsappMessageSender.git

   #Instalação das dependências
   cd WhatsappMessageSender/
   npm install

   #Alteração das configurações pessoais
   No diretório "config/", editar o arquivo "properties.js" e preencher os campos com os dados desejados:

      • url = URL do WhatsApp Web (preenchido por padrão com "https://web.whatsapp.com")
      • contactName = Nome do contato ao qual as mensagens serão enviadas
      • message = Texto da mensagem que será enviado para o contactName
      • amountMessages: Quantidade que a mensagem será repetida e enviada
```

## Premissas

É importante ressaltar que: O código só irá funcionar se o contato escolhido
para enviar as mensagens estiver entre os primeiros da sua lista de conversas
quando o WhatsApp Web for aberto. Isso se dá pelo motivo de a página não
carregar a lista inteira de uma vez, apenas conforme o scroll. Por este motivo,
não é possível identificar a propriedade CSS que carrega o nome do contato.

## Autor

Bruno Ferreira

LinkedIn: https://www.linkedin.com/in/brunoferreira3003/
