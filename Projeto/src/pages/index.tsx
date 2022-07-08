import type { NextPage } from "next";
import Head from "next/head";
import { Container } from "../styles/modules/home";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Projeto</title>
      </Head>
      <Container>
        <div>
          <h1>Tabela Fipe</h1>
          <h3>Consulte o valor de um veículo de fora gratuita</h3>
          <form>
            <select>
              <option>test</option>
            </select>

            <select>
              <option>test</option>
            </select>

            <select>
              <option>test</option>
            </select>
            <button type="submit">Consultar preço</button>
          </form>
          <div>
            <strong>Tabela fipe: Prisma</strong>
            <span>R$ 13.000,00</span>
            <small>Este é o preço de compra do veículo </small>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
