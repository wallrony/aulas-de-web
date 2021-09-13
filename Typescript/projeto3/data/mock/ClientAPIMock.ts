import Client from "../../models/Client"

class ClientAPIMock {
  private static data: Client[] = []

  // Responsável por recuperar os dados
  fetch() {
    return ClientAPIMock.data
  }

  find(id: number) {
    const filter = ClientAPIMock.data.filter(
      (item: Client) => {
        return item.getId === id
      }
    )

    return filter[0]
  }

  // Responsável por criar um novo registro
  create(newClient: Client) {
    const lastClient = ClientAPIMock.data[ClientAPIMock.data.length - 1]

    if (lastClient) {
      newClient.setId = lastClient.getId + 1
    } else {
      newClient.setId = 1
    }

    ClientAPIMock.data.push(newClient)
  }

  // Responsável por atualizar um registro existente
  update(id: number, updatedClient: Client) {
    let indexToUpdate: number | undefined

    ClientAPIMock.data.filter(
      (item: Client, index: number) => {
        const result = item.getId === id

        if (result) {
          indexToUpdate = index
        }

        return result
      }
    )

    if (indexToUpdate !== undefined) {
      ClientAPIMock.data[indexToUpdate] = updatedClient
    }
  }

  // Responsável por excluir um registro existente
  erase(id: number) {
    let indexToUpdate: number | undefined

    ClientAPIMock.data.filter(
      (item: Client, index: number) => {
        const result = item.getId === id

        if (result) {
          indexToUpdate = index
        }

        return result
      }
    )

    if (indexToUpdate !== undefined) {
      ClientAPIMock.data.splice(indexToUpdate, 1)
    }
  }
}

export default ClientAPIMock
