import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import api from "../services/api";
import { Container } from "../styles/modules/home";

const Home: NextPage = () => {

  async function getCars() {
    try {
      const response = await api.get("/carros/marcas");
      
    } catch (err) {
      
    }

    try {
      const response = await api.get("marcas/59/modelos");
      
    } catch (err) {
      
    } 

    try {
      const response = await api.get(` modelos/5940/anos`)
      
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getCars();
  }, []);
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
