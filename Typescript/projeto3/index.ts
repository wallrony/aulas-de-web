import ClientService from "./services/ClientService";

const service = new ClientService()

service.create('Wallisson Rony', 20)
service.create('Ismael', 19)
service.create('Bianca', 19)

service.print()
