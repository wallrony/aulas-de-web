import ClientAPIMock from "../data/mock/ClientAPIMock"
import Client from "../models/Client"

class ClientService {
  fetch() {
    const clientList = new ClientAPIMock().fetch()

    return clientList
  }

  find(id: number) {
    const foundClient = new ClientAPIMock().find(id)

    return foundClient
  }

  create(nome: string, idade: number) {
    const myClient = new Client(0, nome, idade)

    new ClientAPIMock().create(myClient)
  }

  erase(id: number) {
    new ClientAPIMock().erase(id)
  }

  print() {
    const clients = new ClientAPIMock().fetch()

    console.log('Listando todos os clientes:\n')

    for (let i = 0; i < clients.length; i++) {
      const item = clients[i]

      console.log(`Cliente ${item.getId}`)
      console.log(`Nome: ${item.getNome}`)
      console.log(`Idade: ${item.getIdade}\n`)

      console.log('-------------------------------')
    }
  }
}

function makeid(length: number) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() *
      charactersLength));
  }
  return result;
}

export default ClientService
