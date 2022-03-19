console.log("TA FUNCIONANDO ESSA BAGAÇA");

const tmi = require('tmi.js');
const nomedobot = 'tweetsentinel';
const canaldedestino = 'Ramondevbr14';
const token = 'token';

const opcao = {
    identity:{
        username: "tweetsentinel",
        password: "O token"
    },channels: [[RamonDevbr14]]
};

function mensagemChegou(alvo,contexto,mensagem, ehbot){
   if(ehbot){
       return;
   } 


const nomedoComando = mensagem.trim();
if(nomedoComando === '!comandosum'){
    console.log('Executando o comando ${ExclamacaoComandos}');
}else if(nomedoComando === '!comandosdois'){
    console.log('Executando o comando ${nomedoComando}');
}else{
    console.log('Não conheco esse comando ${nomedoComando}')
    }
}

function entrouNoChatTwitch(endereco, porta){
    console.log('BotSentinel Entrouno endereco: ${endereco}, porta: ${porta}');
}


const client = new tmi.client(opcao);

client.on('message',mensagemChegou);
client.on('connected', entrouNoChatTwitch);
client.connect();