import { clienteHelper } from '../helpers/Cliente.helper';
import { Severity } from 'jest-allure/dist/Reporter';
import { StatusCodes } from 'http-status-codes/build/es';
import { fsHelper } from '../helpers/FileSystem.helper';
import { schemaValidatorHelper } from '../helpers/Schemavalidator.helper';

let client;

beforeAll(async () => {
    client = await clienteHelper.getClient();
});

describe('Testes para api json place holde ', () => {
    it('Efetua um GET no endpoint /posts trazendo todos os posts da base', async () => {
        reporter.severity(Severity.Critical);
        const response = await client.get('posts/').expect(StatusCodes.OK);

        const arquivoBase = fsHelper.readJsonFile('retorno_posts');

        expect(response.body).toStrictEqual(arquivoBase);
    });

    it('Efetua um GET no endpoint /posts e valida o JsonSchema', async () => {
        reporter.severity(Severity.Critical);
        const response = await client.get('posts/').expect(StatusCodes.OK);

        const schemaBase = fsHelper.readJsonFile('schema_post');

        expect(
            schemaValidatorHelper.validateSchema(schemaBase, response.body),
        ).toBe(true);
    });

    it('Efetua um GET no endpoint /albums trazendo os dados do album com id 15', async () => {
        reporter.severity(Severity.Critical);
        const response = await client
            .get('albums?id=15')
            .expect(StatusCodes.OK);

        expect(response.body).toEqual([
            {
                userId: 2,
                id: 15,
                title: 'ut pariatur rerum ipsum natus repellendus praesentium',
            },
        ]);
    });

    it('Efetua um POST no endpoint /posts cadastrando um novo post', async () => {
        reporter.severity(Severity.Critical);
        const bodyDados = {
            title: 'Alan Teste',
            body: 'Teste Alan',
            userId: 345,
        };

        const response = await client
            .post('posts/')
            .send(bodyDados)
            .expect(StatusCodes.CREATED);

        expect(response.body).toEqual({
            body: 'Teste Alan',
            id: 101,
            title: 'Alan Teste',
            userId: 345,
        });
    });

    it('Efetua um PUT no endpoint /posts atualizando os dados do post com id 5', async () => {
        reporter.severity(Severity.Critical);
        const bodyDados = {
            id: 5,
            title: 'Alan Teste',
            body: 'Teste Alan',
            userId: 345,
        };
        const response = await client
            .put('posts/5')
            .send(bodyDados)
            .expect(StatusCodes.OK);

        expect(response.body).toEqual({
            title: 'Alan Teste',
            body: 'Teste Alan',
            userId: 345,
            id: 5,
        });
    });

    it('Efetua um DELETE no endpoint /posts atualizando os dados do post com id 10', async () => {
        reporter.severity(Severity.Critical);
        await client.delete('posts/10').expect(StatusCodes.OK);
    });

    it('Efetua um POST no endpoint /posts inserindo um post cujo id já existe', async () => {
        reporter.severity(Severity.Critical);
        const bodyDados = {
            id: 5,
            title: 'Alan Teste',
            body: 'Teste Alan',
            userId: 345,
        };
        const response = await client
            .post('posts')
            .send(bodyDados)
            .expect(StatusCodes.CREATED);

        expect(response.body).toEqual({
            id: 101,
            title: 'Alan Teste',
            body: 'Teste Alan',
            userId: 345,
        });
    });
});
